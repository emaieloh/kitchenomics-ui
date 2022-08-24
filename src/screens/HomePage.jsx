import React, { useContext, useState } from "react";
import MyContext from "../MyContext";
import { Navigate, Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import RecipeList from "../components/RecipeList";
import RecipeIngredients from "../components/RecipeIngredients";
import SearchRecipe from "../components/SearchRecipe";
import NoResult from "../components/NoResult";
import LoadingSpinner from "../components/LoadingSpinner";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";

const HomePage = () => {
  const {
    isLoggedIn,
    searchKeyword,
    setSearchKeyword,
    recipeId,
    setStorageItems,
    removeStorageItems,
  } = useContext(MyContext);

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

  if (!isLoggedIn) {
    return <Navigate to={"/signin"} replace={true} />;
  }

  const showSpinner = () => setSpinner(true);
  const hideSpinner = () => setSpinner(false);

  return (
    <>
      <NavigationBar />
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
    </>
  );
};

export default HomePage;
