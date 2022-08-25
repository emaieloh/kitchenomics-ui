import React, { useState, useEffect } from "react";
import MyContext from "./MyContext/MyContext";
import axios from "axios";

const MyProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user") ? true : false
  );
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );
  const [searchKeyword, setSearchKeyword] = useState(
    localStorage.getItem("searchKeyword")
      ? JSON.parse(localStorage.getItem("searchKeyword"))
      : ""
  );
  const [recipeId, setRecipeId] = useState(
    localStorage.getItem("recipeId")
      ? JSON.parse(localStorage.getItem("recipeId"))
      : ""
  );
  const [recipeIngHref, setRecipeIngHref] = useState(
    localStorage.getItem("recipeIngHref")
      ? JSON.parse(localStorage.getItem("recipeIngHref"))
      : ""
  );
  const [favorites, setFavorites] = useState([]);

  const checkIngredients = (recipeLink, navigate) => {
    const self = recipeLink.split("/");
    const id = self[6].split("?");

    setStorageItems([
      ["recipeId", JSON.stringify(id[0])],
      ["recipeIngHref", JSON.stringify(recipeLink)],
    ]);

    setRecipeId(id[0]);
    setRecipeIngHref(recipeLink);

    navigate(`/${id[0]}`, { replace: true });
  };

  const setStorageItems = (items) => {
    items.forEach((item) => localStorage.setItem(item[0], item[1]));
  };

  const removeStorageItems = (items) => {
    items.forEach((item) => localStorage.removeItem(item));
  };

  const state = {
    isLoggedIn,
    user,
    searchKeyword,
    recipeId,
    recipeIngHref,
    favorites,
    setIsLoggedIn,
    setUser,
    setSearchKeyword,
    setRecipeId,
    setRecipeIngHref,
    setFavorites,
    checkIngredients,
    setStorageItems,
    removeStorageItems,
  };

  useEffect(() => {
    (async () => {
      if (isLoggedIn) {
        const { data: favorites } = await axios.get(
          `http://localhost:8080/favorites/get/${user._id}`
        );
        setFavorites([...favorites]);
      }
    })();
  }, [favorites.length, user._id]);

  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};

export default MyProvider;
