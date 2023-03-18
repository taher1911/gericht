import React from "react";

import "./FuncButton.css";
const FuncButton = (props) => {
  return (
    <button type="button" className="func__button" onClick={props.handler}>
      {props.text}
    </button>
  );
};

export default FuncButton;
