import React from "react";

const HealthLabels = ({ healthLabels }) => {
  const healthLabelItem = healthLabels.map((healthLabel) => {
    return <li key={healthLabel}>&nbsp;{healthLabel}&nbsp;</li>;
  });

  return (
    <ul id="health-labels" className="ps-0">
      {healthLabelItem}
    </ul>
  );
};

export default HealthLabels;
