import "./generatepassword.css";
import React, { useState } from "react";

function GeneratePassword() {
  const [text, setText] = useState("0");

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
        <h2 style={character.txt}>Character Length</h2>
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
    margin: "13px 0 32px",
  },
};

const length = document.querySelector(".length");
