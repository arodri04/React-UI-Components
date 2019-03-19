import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

let display = [];

const App = () => {
  return (
    <div className="daddydiv">
      <CalculatorDisplay />
      <ActionButton numprop={"clear"} />
      <NumberButton numprop={"÷"} />
      <NumberButton numprop={7} />
      <NumberButton numprop={8} />
      <NumberButton numprop={9} />
      <NumberButton numprop={"x"} />
      <NumberButton numprop={4} />
      <NumberButton numprop={5} />
      <NumberButton numprop={6} />
      <NumberButton numprop={"-"} />
      <NumberButton numprop={1} />
      <NumberButton numprop={2} />
      <NumberButton numprop={3} />
      <NumberButton numprop={"+"} />
      <ActionButton numprop={0} />
      <NumberButton numprop={"="} />
    </div>
  );
};

// const CalculatorDisplay = () => {
//   return <div className="display">0</div>;
// };

// const NumberButton = props => {
//   return <div className="numbut">{props.numprop}</div>;
// };
// const ActionButton = props => {
//   return <div className="Actions">{props.numprop}</div>;
// };

const LongButton = props => {
  return <div className="LB">{props.numprop}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
