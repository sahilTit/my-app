import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState(" ");
  const handleUpClick = () => {
    // console.log("upper case was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handlelowclick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleclearclick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const removeExtraSpaces=()=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnChange = (event) => {
    // console.log("Handle on change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="conatianer">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={Text}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelowclick}>
          convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>
          clear text
        </button>
        <button
          className="btn btn-primary mx-2"
          id="myBox"
          onClick={handleCopyClick}
        >
          copy text
        </button>
        <button
          className="btn btn-primary mx-2"
          id="myBox"
          onClick={removeExtraSpaces}
        >
          remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {Text.split(" ").length} words and {Text.length} character's
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p className="container">{Text}</p>
      </div>
    </>
  );
}
