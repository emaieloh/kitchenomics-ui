import React from "react";

const Ingredients = ({ ingredients }) => {
  const recipeIngredients = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return <ul className="ingredient-list px-4">{recipeIngredients}</ul>;
};

export default Ingredients;
