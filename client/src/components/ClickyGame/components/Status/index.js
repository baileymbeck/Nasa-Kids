import React from "react";
import "./style.css";

function Status(props) {
  return <div className="status">{props.rightWrong}</div>;
}

export default Status;
