import React from "react";
import "./TimerControls.css";

const timerControls = props => (
  <div className="TimerControls">
    <button onClick={props.start}>Play</button>
    <button onClick={props.stop}>Pause</button>
    <button onClick={props.reset}>Reset</button>
  </div>
);

export default timerControls;
