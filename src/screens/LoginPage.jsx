import React, { useState, useContext } from "react";
import MyContext from "../MyContext";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Registration from "../components/Registration";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationModal, setRegistrationModal] = useState(false);
  const { setIsLoggedIn, setUser, setStorageItems } = useContext(MyContext);

  const navigate = useNavigate();
  const showModal = () => setRegistrationModal(true);
  const hideModal = () => setRegistrationModal(false);

  const submitLogin = async (e) => {
    e.preventDefault();

    const { data: user } = await axios.post(
      "http://localhost:8080/users/login",
      {
        email,
        password,
      }
    );
    if (user.error) {
      alert(user.error);
    } else {
      setStorageItems([["user", JSON.stringify(user)]]);
      setIsLoggedIn(true);
      setUser(user);
      navigate("/", { replace: true });
    }
  };

  return (
    <Container
      id="login-container"
      className="d-flex justify-content-center align-items-center"
    >
      <Form onSubmit={submitLogin} id="login" className="p-3">
        <FloatingLabel controlId="Email" label="Email">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3"
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="Password" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3"
            required
          />
        </FloatingLabel>
        <Button variant="dark" type="submit" className="w-100 p-2 mt-2">
          Sign in
        </Button>
        <Container className="px-4 pt-4 text-center border-top mt-4">
          <Button
            variant="warning"
            type="button"
            className="p-2 w-50"
            onClick={showModal}
          >
            Create an account
          </Button>
        </Container>
        <Registration
          registrationModal={registrationModal}
          hideModal={hideModal}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
          setStorageItems={setStorageItems}
        />
      </Form>
    </Container>
  );
};

export default LoginPage;
