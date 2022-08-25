import React, { useContext } from "react";
import MyContext from "../../MyContext/MyContext";
import Recipe from "../RecipeList/Recipe/Recipe";

const Favorite = () => {
  const { favorites } = useContext(MyContext);

  const userFavorites = favorites.map((favorite) => {
    return (
      <Recipe
        key={favorite.href}
        label={favorite.label}
        image={favorite.image}
        href={favorite.href}
        healthLabels={favorite.healthLabels}
        energy={favorite.energy}
        servings={favorite.servings}
        totalNutrients={favorite.totalNutrients}
      />
    );
  });

  return (
    <div className="recipe-list mt-5 pt-5 px-1 d-flex justify-content-center flex-wrap">
      {userFavorites}
    </div>
  );
};

export default Favorite;
