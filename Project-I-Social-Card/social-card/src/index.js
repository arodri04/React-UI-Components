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
// const Header = () => {
//   return (
//     <div className="headt">
//       <h1>
//         Lambda School <span>@lambdaschool</span>
//       </h1>
//       <p className="headc">
//         Let's learn React by building simple interfaces with components. Don't
//         try to overthink it, just keep it simple and have fun. Once you feel
//         comfortable using components, you are well on your way to mastering
//         React!
//       </p>
//     </div>
//   );
// };
ReactDOM.render(<App />, document.getElementById("root"));
