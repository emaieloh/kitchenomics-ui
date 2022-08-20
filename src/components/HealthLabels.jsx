import React from "react";

const HealthLabels = ({ healthLabels }) => {
  return (
    <ul id="health-labels" className="ps-0">
      {healthLabels.map((healthLabel) => {
        return <li key={healthLabel}>&nbsp;{healthLabel}&nbsp;</li>;
      })}
    </ul>
  );
};

export default HealthLabels;
