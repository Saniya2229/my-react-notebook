import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-700 px-3">Vite with tailwind</h1>
      <Card username="Lily" />
      <Card />
      <Card />
    </>
  );
}

export default App;
