import React from "react";
import "./style.css";

function Wrapper(i) {
  return <div className="wrapper">{i.children}</div>;
}

export default Wrapper;