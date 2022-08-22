import React, { useState, useContext } from "react";
import MyContext from "../MyContext";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import RecipeList from "./RecipeList";
import RecipeIngredients from "./RecipeIngredients";
import SearchRecipe from "./SearchRecipe";
import NoResult from "./NoResult";
import LoadingSpinner from "./LoadingSpinner";
import CarouselComponent from "./CarouselComponent";

const Recipes = () => {
  const [recipes, setRecipes] = useState(
    localStorage.getItem("recipes")
      ? JSON.parse(localStorage.getItem("recipes"))
      : []
  );
  const [pages, setPages] = useState(
    localStorage.getItem("pages")
      ? JSON.parse(localStorage.getItem("pages"))
      : []
  );
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage")
      ? JSON.parse(localStorage.getItem("currentPage"))
      : 0
  );
  const [spinner, setSpinner] = useState(false);

  const {
    searchKeyword,
    setSearchKeyword,
    recipeId,
    setStorageItems,
    removeStorageItems,
  } = useContext(MyContext);

  const showSpinner = () => setSpinner(true);
  const hideSpinner = () => setSpinner(false);

  return (
    <Container>
      <SearchRecipe
        setSearchKeyword={setSearchKeyword}
        setRecipes={setRecipes}
        setPages={setPages}
        setCurrentPage={setCurrentPage}
        showSpinner={showSpinner}
        hideSpinner={hideSpinner}
        setStorageItems={setStorageItems}
        removeStorageItems={removeStorageItems}
      />
      <Routes>
        <Route path="/" element={<CarouselComponent />} />
        <Route
          path={`/${searchKeyword}`}
          element={
            <RecipeList
              recipes={recipes}
              pages={pages}
              currentPage={currentPage}
              setRecipes={setRecipes}
              setPages={setPages}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path={`/${recipeId}`}
          element={<RecipeIngredients searchKeyword={searchKeyword} />}
        />
        <Route path="/no-result" element={<NoResult />} />
      </Routes>
      <LoadingSpinner spinner={spinner} hideSpinner={hideSpinner} />
    </Container>
  );
};

export default Recipes;
