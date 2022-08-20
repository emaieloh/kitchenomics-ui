import React, { useContext } from "react";
import MyContext from "../MyContext";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  const { user, setIsLoggedIn } = useContext(MyContext);

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <Navbar
      className="px-5"
      bg="success"
      variant="dark"
      expand="md"
      fixed="top"
      collapseOnSelect
    >
      <Navbar.Brand>Welcome {user.firstName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link onClick={logout}>Sign out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
