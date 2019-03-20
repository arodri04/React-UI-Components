import React from "react";

const Operate = num => {
  console.log(num);
  if (num === "clear") {
    console.log(0);
    return 0;
  } else {
    return num;
  }
};

export default Operate;
