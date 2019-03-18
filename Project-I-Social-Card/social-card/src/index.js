import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/HeaderComponents/HeaderContainer.js";
import CardContainer from "./components/CardComponents/CardContainer.js";

function App() {
  return (
    <div>
      <Header />
      <a href="ractjs.org">
        <CardContainer />
      </a>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
