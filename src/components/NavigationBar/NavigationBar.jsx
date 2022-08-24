import React, { useContext } from "react";
import MyContext from "../../MyContext/MyContext";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import SearchRecipe from "./SearchRecipe";

const NavigationBar = (props) => {
  const {
    setRecipes,
    setPages,
    setCurrentPage,
    showSpinner,
    hideSpinner,
  } = props;

  const {
    user,
    setIsLoggedIn,
    setSearchKeyword,
    setRecipeId,
    setRecipeIngHref,
    setStorageItems,
    removeStorageItems,
  } = useContext(MyContext);

  const navigate = useNavigate();

  const logout = () => {
    removeStorageItems([
      "user",
      "recipes",
      "searchKeyword",
      "recipeId",
      "recipeIngHref",
      "pages",
      "currentPage",
    ]);

    setIsLoggedIn(false);
    setRecipes([]);
    setSearchKeyword("");
    setRecipeId("");
    setRecipeIngHref("");
    setPages([]);
    setCurrentPage(0);
  };

  const homeButton = () => {
    removeStorageItems([
      "recipes",
      "searchKeyword",
      "recipeId",
      "recipeIngHref",
      "pages",
      "currentPage",
    ]);

    setRecipes([]);
    setSearchKeyword("");
    setRecipeId("");
    setRecipeIngHref("");
    setPages([]);
    setCurrentPage(0);
    navigate("/", { replace: true });
  };

  return (
    <Navbar
      collapseOnSelect
      className="px-5 navigation-bar"
      bg="success"
      variant="dark"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand>Welcome {user.firstName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Item>
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
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={homeButton}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={logout}>Sign out</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
