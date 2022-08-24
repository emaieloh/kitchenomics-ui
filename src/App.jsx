import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/signin" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
