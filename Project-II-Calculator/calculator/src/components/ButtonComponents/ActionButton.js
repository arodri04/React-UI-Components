import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <button onClick={() => console.log(props.numprop)} className="LB">
      {props.numprop}
    </button>
  );
};

export default ActionButton;
