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
  const [recipes, setRecipes] = useState([]);
  const [queryText, setQueryText] = useState("");
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [spinner, setSpinner] = useState(false);

  const { recipeId } = useContext(MyContext);
  const showSpinner = () => setSpinner(true);
  const hideSpinner = () => setSpinner(false);

  return (
    <Container>
      <SearchRecipe
        queryText={queryText}
        setQueryText={setQueryText}
        setRecipes={setRecipes}
        setPages={setPages}
        setCurrentPage={setCurrentPage}
        showSpinner={showSpinner}
        hideSpinner={hideSpinner}
      />
      <LoadingSpinner spinner={spinner} hideSpinner={hideSpinner} />
      <Routes>
        <Route path="/" element={<CarouselComponent />} />
        <Route
          path={`/${queryText}`}
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
          element={<RecipeIngredients queryText={queryText} />}
        />
        <Route path="/no-result" element={<NoResult />} />
      </Routes>
    </Container>
  );
};

export default Recipes;
