import React, { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md shadow-lg rounded-lg px-6 py-6 bg-gray-800 text-orange-400">
        <h1 className="text-white text-2xl font-bold text-center mb-6">
          🔑 Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-lg bg-gray-700 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold"
          >
            Copy
          </button>
        </div>

        {/* Settings */}
        <div className="space-y-4">
          {/* Length Slider */}
          <div className="flex items-center justify-between">
            <label className="text-white font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setlength(Number(e.target.value))}
              className="cursor-pointer"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setnumberAllowed((prev) => !prev)}
              id="number"
            />
            <label htmlFor="number" className="text-white">
              Include Numbers
            </label>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              id="charInput"
            />
            <label htmlFor="charInput" className="text-white">
              Include Special Characters
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
