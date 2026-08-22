import { Router } from "express";
import { supabase } from "../../../config/supabase";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();
const SECRET_KEY = process.env.SECRET_KEY;

/**
 * email, username, password, phone number
 * jin@email.com, jinsusername, jin123!, 584230849
 *
 * jin123! => asdlkfj0irjg20-94jkjsda-f=0wekjf;lkasdjfaksjdf
 * asdlkfj0irjg20-94jkjsda-f=0wekjf;lkasdjfaksjdf => askdjf0i2wrei24kjklajsdfklojwqoiejklafjsdf
 */

router.post("/register", async (req, res) => {
  let userData = req.body;

  if (
    !userData.email ||
    !userData.username ||
    !userData.password ||
    !userData.phoneNumber
  ) {
    return res.status(400).send("something missing!");
  }

  // salt rounds
  const hashedPassword = bcrypt.hash(userData.password, 10);
  userData.password = hashedPassword;
  // we're saving hte user information into the database here
  // problem: storing raw password, if stolen the person can just log in
  const { data, error } = await supabase
    .from("users")
    .insert([userData])
    .select();

  if (error)
    return res
      .status(400)
      .send({ msg: "There was an error creating a new user", error: error });

  const payload = { id: data.id, username: data.username, email: data.email };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "15m" });
  res.status(200).send({ accessToken: token, data: data });
});

/**
 * username, password
 */
router.post("/login", async (req, res) => {
  const userInformation = req.body;
  if (!userInformation.username || !userInformation.password) {
    return res.status(400).send("Lacks username or passsword");
  }

  const { data, error } = await supabase
    .from("users")
    .eq("username", userInformation.username)
    .single();

  if (error) return res.status(400).send({ msg: "User not found" });

  const checkPassword = bcrypt.compare(userInformation.password, data.password);

  if (!checkPassword) return res.status(400).send({ msg: "Wrong Password" });

  const payload = { id: data.id, username: data.username, email: data.email };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "15m" });
  res.status(200).send({ accessToken: token, data: data });
});

export default router;
