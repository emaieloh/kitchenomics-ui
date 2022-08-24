import React from "react";
import Nutrient from "./Nutrient";

const NutrientsList = ({ totalNutrients, nutrientsList, css }) => {
  const allNutrients = Object.entries(totalNutrients);

  const filteredNutrients = allNutrients.map((nutrient) => {
    const list = nutrientsList.map((item) => {
      if (nutrient[0] === item) {
        return (
          <li key={nutrient[0]}>
            <Nutrient
              label={nutrient[1].label}
              quantity={Math.floor(nutrient[1].quantity)}
              unit={nutrient[1].unit}
            />
          </li>
        );
      }
      return list;
    });
    return list;
  });

  return <ul className={css}>{filteredNutrients}</ul>;
};

export default NutrientsList;
