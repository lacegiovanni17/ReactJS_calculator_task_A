import React, { useState } from "react";
import "./App.css";

function Header() {
  return (
    <header className="banner">
      <img src="twitter_1529723220.jpeg" alt="Header Banner" />
    </header>
  );
}

function Footer() {
  return <footer>&copy; Chidera Okemeziem</footer>;
}

function SubBody({ num1, num2, operation }) {
  let result = "";

  switch (operation) {
    case "+":
      result = `${num1} + ${num2} = ${num1 + num2}`;
      break;
    case "-":
      result = `${num1} - ${num2} = ${num1 - num2}`;
      break;
    case "*":
      result = `${num1} * ${num2} = ${num1 * num2}`;
      break;
    case "/":
      result = `${num1} / ${num2} = ${num1 / num2}`;
      break;
    case "**":
      result = `${num1} ** ${num2} = ${num1 ** num2}`;
      break;
    default:
      result = "Invalid operation";
  }

  return <div className="sub-body">{result}</div>;
}

function MainBody() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "num1") {
      setNum1(value);
    } else if (name === "num2") {
      setNum2(value);
    } else if (name === "operation") {
      setOperation(value);
    }
  };

  return (
    <div className="main-body">
      <h2>Enter Two Values and Select an Operation:</h2>
      <input
        type="number"
        name="num1"
        value={num1}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="num2"
        value={num2}
        onChange={handleInputChange}
      />
      <select name="operation" value={operation} onChange={handleInputChange}>
        <option value="">Select Operation</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="**">**</option>
      </select>
      {operation && (
        <SubBody
          num1={parseFloat(num1)}
          num2={parseFloat(num2)}
          operation={operation}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
