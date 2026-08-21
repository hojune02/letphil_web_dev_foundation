import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'
import { HeroSection } from './components/HeroSection'

function App() {

  const [employee, setEmployee] = useState("Alice");
  const [toggle, setToggle] = useState(false);

  function changeEmployee(){
    if (!toggle){
        setEmployee("Bob");
        setToggle(true);
    } else {
        setEmployee("Alice");
        setToggle(false);
    }
  }

  const people = [
    {id: 1, name: "Jacob", age: 12},
    {id: 2, name: "Bob", age: 13},
    {id: 3, name: "Charlie", age: 14},
    {id: 4, name: "David", age: 15}
  ]

  return (
    <>
      {/* Standalone */}
      {/* <HeroSection /> */}

      {/* Accepts props: children */}
      <HeroSection>
        <div>Hello World!</div>
      </HeroSection>
      <div className="ticks"></div>

      <p>Name of employee: {employee}</p>
      <button onClick={changeEmployee}>Change employee!</button>

      {people.map((person) => <p id={person.name + person.id}>{person.name}: {person.age} years old</p>)}
    </>
  )
}

export default App
