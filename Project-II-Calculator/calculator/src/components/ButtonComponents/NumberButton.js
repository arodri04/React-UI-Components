import React from "react";
import "./Button.css";

const NumberButton = props => {
  if (Number.isInteger(props.numprop)) {
    return <div className="numbut">{props.numprop}</div>;
  } else {
    return <div className="Actions">{props.numprop}</div>;
  }
};

export default NumberButton;
