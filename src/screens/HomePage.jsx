import React, { useContext } from "react";
import MyContext from "../MyContext";
import { Navigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Recipes from "../components/Recipes";

const HomePage = () => {
  const { isLoggedIn } = useContext(MyContext);

  if (!isLoggedIn) {
    return <Navigate to={"/signin"} replace={true} />;
  }

  return (
    <>
      <NavigationBar />
      <Recipes />
    </>
  );
};

export default HomePage;
