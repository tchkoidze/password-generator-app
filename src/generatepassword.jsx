import "./generatepassword.css";
import { useState } from "react";
import iconCheck from "./assets/images/icon-check.svg";

function GeneratePassword() {
  const [text, setText] = useState("0");

  const [uppercase, setUpperCase] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  function handleInputChange(event) {
    setText(event.target.value);
  }

  return (
    <div
      className="generate-password"
      style={{ padding: "16px", backgroundColor: "#24232C" }}
    >
      <div
        className="character-length"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={character.txt}>Character Length</h3>
        <p
          className="length"
          style={{ fontSize: "24px", lineHeight: "32px", color: "#A4FFAF" }}
        >
          {text}
        </p>
      </div>
      <div className="slider-length" style={range.styles}>
        <input
          type="range"
          name="range"
          id="lengthRange"
          min={0}
          max={20}
          //value={0}
          onInput={handleInputChange}
          value={text}
        />
      </div>

      <ul
        className="filters"
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "17px",
        }}
      >
        <li className="filter">
          <div
            className="check-box"
            style={{
              backgroundColor: uppercase ? "#A4FFAF" : "#24232C",
              border: uppercase ? "none" : null,
            }}
            onClick={() => {
              setUpperCase(!uppercase);
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
          <div className="stength-boxes">
            <div className="stength-boxe"></div>
            <div className="stength-boxe"></div>
            <div className="stength-boxe"></div>
            <div className="stength-boxe"></div>
          </div>
        </div>
      </div>

      <button className="generate-btn">
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
  );
}

export default GeneratePassword;

const character = {
  txt: { fontWeight: 700, fontSize: "16px", lineHeight: "21px" },
};

const range = {
  styles: {
    display: "flex",
    width: "100%",
    margin: "23px 0 32px",
  },
};
