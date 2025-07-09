import { useState } from "react";
import Lily from "./lily";

function App() {
  const username = "Lily and react";

  return (
    <>
      <Lily />
      <h1>React with vite {username}</h1>
      <p>test para</p>
    </>
  );
}

export default App;
