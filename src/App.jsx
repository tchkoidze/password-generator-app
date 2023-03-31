import "./App.css";
import { useState } from "react";
import iconCheck from "./assets/images/icon-check.svg";
import generator from "generate-password";

function App() {
  const [text, setText] = useState(0);
  const [password, setPassword] = useState("P4$5W0rD!");

  const [uppercase, setUpperCase] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  function handleInputChange(event) {
    setText(event.target.value);
  }

  let strengthCount = 0;

  if (uppercase) {
    strengthCount++;
  }
  if (lowercase) {
    strengthCount++;
  }
  if (numbers) {
    strengthCount++;
  }
  if (symbols) {
    strengthCount++;
  }

  const color =
    strengthCount === 1
      ? "#F64A4A"
      : strengthCount === 2
      ? "#FB7C58"
      : strengthCount === 3
      ? "#F8CD65"
      : strengthCount === 4
      ? "#A4FFAF"
      : "";
  const strengthness =
    strengthCount === 1
      ? "TOO WEAK!"
      : strengthCount === 2
      ? "WEAK"
      : strengthCount === 3
      ? "MEDIUM"
      : strengthCount === 4
      ? "STRONG"
      : "";

  function passwordGenerator() {
    if (strengthCount !== 0) {
      const passwordCharacters = [];
      let newPassword = "";

      if (lowercase) {
        passwordCharacters.push("abcdefghijklmnopqrstuvwxyz");
      }
      if (uppercase) {
        passwordCharacters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }
      if (numbers) {
        passwordCharacters.push("0123456789");
      }
      if (symbols) {
        passwordCharacters.push("!@#$%^&*_+;?,./-=");
      }

      for (let i = 0; i < text; i++) {
        console.log(text);
        const randomType = Math.floor(
          Math.random() * passwordCharacters.length
        );
        const randomChar = Math.floor(
          Math.random() * passwordCharacters[randomType].length
        );
        const newChar = passwordCharacters[randomType][randomChar];

        newPassword += newChar;
        console.log(newPassword);
      }

      setPassword(newPassword);
      console.log(passwordCharacters);
    }
  }

  return (
    <div className="App">
      <h1>Password Generator </h1>
      <div className="generator-password-box">
        {text > 0 ? (
          <p className="rendered-password">{password}</p>
        ) : (
          <p className="rendered-password default-password">P4$5W0rD!</p>
        )}
        {/*<p className="rendered-password">{text > 0 ? password : "P4$5W0rD!"}</p>*/}
        <svg
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
          width="17.5"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox=" 0 0 21 21"
        >
          <path
            className="copy"
            d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
            fill="#A4FFAF"
          />
        </svg>
      </div>

      <div className="generate-password">
        <div
          className="character-length"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Character Length</h3>

          <p className="length">{text}</p>
        </div>
        <div className="slider-length">
          <input
            type="range"
            name="range"
            id="lengthRange"
            min={0}
            max={20}
            //value={0}
            onInput={handleInputChange}
            value={text}
            style={{
              backgroundSize: `${text * 5}%`,
            }}
          />
        </div>

        <ul className="filters">
          <li className="filter">
            <div
              className="check-box"
              style={{
                backgroundColor: uppercase ? "#A4FFAF" : "#24232C",
                border: uppercase ? "none" : null,
              }}
              onClick={() => {
                setUpperCase(!uppercase);
                console.log(!uppercase);
              }}
            >
              {uppercase ? <img src={iconCheck} alt="" /> : null}
            </div>
            Include Uppercase Letters
          </li>
          <li className="filter">
            <div
              className="check-box"
              style={{
                backgroundColor: lowercase ? "#A4FFAF" : "#24232C",
                border: lowercase ? "none" : null,
              }}
              onClick={() => {
                setLowerCase(!lowercase);
                console.log(!lowercase);
              }}
            >
              {lowercase ? <img src={iconCheck} alt="" /> : null}
            </div>
            Include Lowercase Letters
          </li>
          <li className="filter">
            <div
              className="check-box"
              style={{
                backgroundColor: numbers ? "#A4FFAF" : "#24232C",
                border: numbers ? "none" : null,
              }}
              onClick={() => {
                setNumbers(!numbers);
                console.log(!numbers);
              }}
            >
              {numbers ? <img src={iconCheck} alt="" /> : null}
            </div>
            Include Numbers
          </li>
          <li className="filter">
            <div
              className="check-box"
              style={{
                backgroundColor: symbols ? "#A4FFAF" : "#24232C",
                border: symbols ? "none" : null,
              }}
              onClick={() => {
                setSymbols(!symbols);
                console.log(!symbols);
              }}
            >
              {symbols ? <img src={iconCheck} alt="" /> : null}
            </div>
            Include Symbols
          </li>
        </ul>

        <div className="strength-container">
          <h2>STRENGTH</h2>
          <div className="showing-strength-container">
            <p>{strengthness}</p>
            <div className="stength-boxes">
              <div
                className="stength-boxe"
                style={{
                  backgroundColor: strengthCount > 0 ? color : "transparent",
                  border: strengthCount > 0 ? "none" : null,
                }}
              ></div>
              <div
                className="stength-boxe"
                style={{
                  backgroundColor: strengthCount > 1 ? color : "transparent",
                  border: strengthCount > 1 ? "none" : null,
                }}
              ></div>
              <div
                className="stength-boxe"
                style={{
                  backgroundColor: strengthCount > 2 ? color : "transparent",
                  border: strengthCount > 2 ? "none" : null,
                }}
              ></div>
              <div
                className="stength-boxe"
                style={{
                  backgroundColor: strengthCount > 3 ? color : "transparent",
                  border: strengthCount > 3 ? "none" : null,
                }}
              ></div>
            </div>
          </div>
        </div>

        <button className="generate-btn" onClick={passwordGenerator}>
          GENERATE{" "}
          <div>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#24232C"
                d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;

const x = {
  y: { backgroundColor: "blue" },
};
