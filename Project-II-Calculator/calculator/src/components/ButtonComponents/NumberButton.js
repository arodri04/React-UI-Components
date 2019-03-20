import React from "react";
import "./Button.css";
import Operate from "../operate";

const NumberButton = props => {
  if (Number.isInteger(props.numprop)) {
    return (
      <button onClick={() => Operate(props.numprop)} className="numbut">
        {props.numprop}
      </button>
    );
  } else {
    return (
      <button onClick={() => Operate(props.numprop)} className="Actions">
        {props.numprop}
      </button>
    );
  }
};

export default NumberButton;
