import React from "react";
import "./Header.css";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <div className="headdiv">
      <img src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
      <div>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default Header;
