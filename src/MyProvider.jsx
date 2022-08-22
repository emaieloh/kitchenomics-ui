import React, { useState } from "react";
import MyContext from "./MyContext";

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
    setIsLoggedIn,
    setUser,
    setSearchKeyword,
    setRecipeId,
    setRecipeIngHref,
    setStorageItems,
    removeStorageItems,
  };
  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};

export default MyProvider;
