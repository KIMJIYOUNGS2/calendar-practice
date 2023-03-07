import React from "react";
import "./Month.css";

import Day from "../Day/Day";

const Month = ({ month }) => {
  return (
    <div className="month-container">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
