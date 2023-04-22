import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./Calendar";
import { generateMessage } from "./generateMessage";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiKey = process.env.REACT_APP_API_TOKEN;
    const message = await generateMessage(apiKey, inputValue);
    setOutputValue(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Generate</button>
      <div>{outputValue}</div>
    </form>
  );
}

export default App;
