import React from "react";
import Recipe from "../Recipe/Recipe";
import PaginationComponent from "./PaginationComponent";

const RecipeList = (props) => {
  const {
    recipes,
    pages,
    currentPage,
    setRecipes,
    setPages,
    setCurrentPage,
  } = props;

  const recipeList = recipes.map((recipe) => {
    return (
      <Recipe
        key={recipe._links.self.href}
        component={"RecipeList"}
        label={recipe.recipe.label}
        image={recipe.recipe.images.SMALL.url}
        href={recipe._links.self.href}
        healthLabels={recipe.recipe.healthLabels}
        energy={recipe.recipe.totalNutrients.ENERC_KCAL}
        servings={recipe.recipe.yield}
        totalNutrients={recipe.recipe.totalNutrients}
      />
    );
  });

  return (
    <>
      <div className="recipe-list mt-5 pt-5 px-1 d-flex justify-content-center flex-wrap">
        {recipeList}
      </div>
      <PaginationComponent
        recipes={recipes}
        pages={pages}
        currentPage={currentPage}
        setRecipes={setRecipes}
        setPages={setPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default RecipeList;
