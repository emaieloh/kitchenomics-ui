import React, { useState, useContext } from "react";
import MyContext from "../MyContext";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Registration from "../components/Registration";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationModal, setRegistrationModal] = useState(false);
  const { setIsLoggedIn, setUser } = useContext(MyContext);

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
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
      setUser(user);
      navigate("/", { replace: true });
    }
  };

  return (
    <Form onSubmit={submitLogin}>
      <FloatingLabel controlId="Email" label="Email">
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="Password" label="Password">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FloatingLabel>
      <Button type="submit">Sign in</Button>
      <Button variant="success" type="button" onClick={showModal}>
        Sign up
      </Button>
      <Registration
        registrationModal={registrationModal}
        hideModal={hideModal}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
      />
    </Form>
  );
};

export default LoginPage;
