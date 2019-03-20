import React from "react";
import "./Display.css";
import Operate from "../operate";

const CalculatorDisplay = () => {
  return <div className="display">{Operate()}</div>;
};

export default CalculatorDisplay;
