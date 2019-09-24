import React from "react";
import "./Timer.css";

const leftpad = val => {
  if (val < 10) return `0${val}`;
  return `${val}`;
};

const timer = props => {
  return (
    <div className="Timer">
      <div>
        <div>
          <h2>Session Length</h2>
          <div>
            <button onClick={props.add}> + </button>
            <span> {`${props.time.get("minutes")}`} </span>
            <button onClick={props.less}> - </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default timer;
// <h2>Break Length</h2>
//         <div>
//           <button> + </button>
//           <span> 5 </span>
//           <button> - </button>
//         </div>
