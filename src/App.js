import "./styles.css";
import React, { useState } from "react";

var emojiList = {
  "π": " Grinning Face",
  "π": " Winking Face",
  "π€©": "Star-Struck",
  "πΆβπ«οΈ": "Face in Clouds",
  "π₯Ά": "Cold Face",
  "π₯Ί": "Pleading Face",
  "π": "smilling face with sunglass",
  "π§¨": "firecraker",
  "π­": "performing arts",
  "π·": "tulip"
};

var emojiWeKnow = Object.keys(emojiList);

console.log(emojiWeKnow);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function inputChange(event) {
    var meaning = emojiList[event.target.value];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in this list";
    }
    setmeaning(meaning);
  }

  function listClickHandler(emoji) {
    var meaning = emojiList[emoji];

    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji</h1>

      <input style={{ padding: "0.5rem 2rem" }} onChange={inputChange}></input>

      <div
        style={{
          padding: "1rem",
          fontSize: "X-large",
          fontWeight: "bold"
        }}
      >
        {" "}
        {meaning}
      </div>

      <h3> Emoji We Know</h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => listClickHandler(emoji)}
            style={{
              padding: "1rem 1rem",
              fontSize: "x-large",
              cursor: "pointer"
            }}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
