import { useEffect } from "react";
import "./App.css";
import { CaseInsensitive } from "./filtering/CaseInsensitive";
import { Stats } from "./reducing/Stats";

function App() {
  const data = async () => {
    try {
      const response = await fetch("http://localhost:3000");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (<>
    <CaseInsensitive />
    <Stats />
  </>);
}

export default App;
