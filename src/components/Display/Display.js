import React from "react";
import "./Display.css";

const leftpad = val => {
  if (val < 10) return `0${val}`;
  return `${val}`;
};

const display = props => (
  <div>
    <div className="Display">
      <h2>Session</h2>
      <h1>
        {`${leftpad(props.currentTime.get("hours"))}
      :${leftpad(props.currentTime.get("minutes"))}
      :${leftpad(props.currentTime.get("seconds"))}`}
      </h1>
    </div>
  </div>
);

export default display;
