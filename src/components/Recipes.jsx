import React, { useState, useContext } from "react";
import MyContext from "../MyContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import RecipeList from "./RecipeList";
import RecipeIngredients from "./RecipeIngredients";
import SearchRecipe from "./SearchRecipe";
import NoResult from "./NoResult";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [queryText, setQueryText] = useState("");
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const { recipeId } = useContext(MyContext);
  const navigate = useNavigate();

  const searchHandler = async (e) => {
    e.preventDefault();

    setPages([]);
    setCurrentPage(0);
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryText}&app_id=2f5498b7&app_key=ccb0994fa759c8bb890e6ac4e7124c19`;
    const { data } = await axios(url);
    if (!data.hits.length) {
      navigate("/no-result", { replace: true });
    } else {
      setRecipes([...data.hits]);
      if (data._links.next) {
        setPages([url, data._links.next.href]);
      } else {
        setPages([url, "No more results"]);
      }
      navigate("/", { replace: true });
    }
  };

  return (
    <Container>
      <SearchRecipe
        searchHandler={searchHandler}
        queryText={queryText}
        setQueryText={setQueryText}
      />
      <Routes>
        <Route
          path="/"
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
        <Route path={`/${recipeId}`} element={<RecipeIngredients />} />
        <Route path="/no-result" element={<NoResult />} />
      </Routes>
    </Container>
  );
};

export default Recipes;
