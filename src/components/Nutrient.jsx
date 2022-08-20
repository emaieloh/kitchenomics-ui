import React from "react";

const Nutrient = ({ label, quantity, unit }) => {
  return (
    <>
      <span>{label}</span>
      <span>
        {quantity}
        {unit}
      </span>
    </>
  );
};

export default Nutrient;
