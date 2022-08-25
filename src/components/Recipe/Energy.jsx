import React from "react";

const Energy = ({ energy, servings }) => {
  return (
    <>
      <div>{servings} servings</div>
      <div>
        <span className="fs-3">{Math.floor(energy.quantity / servings)}</span>
        {energy.unit}
      </div>
    </>
  );
};

export default Energy;
