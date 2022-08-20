import React, { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user") ? true : false
  );
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );
  const [recipeId, setRecipeId] = useState("");
  const [recipeIngHref, setRecipeIngHref] = useState("");

  const state = {
    isLoggedIn,
    user,
    recipeId,
    recipeIngHref,
    setIsLoggedIn,
    setUser,
    setRecipeId,
    setRecipeIngHref,
  };
  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};

export default MyProvider;
