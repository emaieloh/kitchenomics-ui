import React from "react";
import Recipe from "./Recipe";
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
    return <Recipe key={recipe._links.self.href} recipe={recipe} />;
  });

  return (
    <>
      {recipeList}
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
