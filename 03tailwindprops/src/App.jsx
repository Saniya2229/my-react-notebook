import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Lily",
    age: 20,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-blue-400 rounded-md">Hello world!</h1>
      <Card username="Lily" paraText="I am a CAT Lover" />
      <Card username="kashishs" paraText="CAT was so preety" />
    </>
  );
}

export default App;
