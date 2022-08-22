import React, { useState } from "react";
import {
  Modal,
  Form,
  FloatingLabel,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = (props) => {
  const {
    registrationModal,
    hideModal,
    setIsLoggedIn,
    setUser,
    setStorageItems,
  } = props;
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [registrationAlert, setRegistrationAlert] = useState(false);
  const [userError, setUserError] = useState("");

  const submitRegistration = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (password !== confirmPassword) {
      setPasswordAlert(true);
    } else {
      const { data: user } = await axios.post(
        "http://localhost:8080/users/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      if (user.error) {
        setUserError(user.error);
        setRegistrationAlert(true);
      } else {
        setStorageItems([["user", JSON.stringify(user)]]);
        setIsLoggedIn(true);
        setUser(user);
        navigate("/", { replace: true });
      }
    }
  };

  return (
    <Modal
      show={registrationModal}
      onHide={hideModal}
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Alert
        show={registrationAlert}
        variant="danger"
        onClose={() => setRegistrationAlert(false)}
        dismissible
      >
        {userError}
      </Alert>
      <Form onSubmit={submitRegistration} id="registration">
        <Modal.Header
          id="registration-header"
          className="text-light bg-dark fst-italic"
          closeButton
        >
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <FloatingLabel controlId="firstName" label="First name">
                <Form.Control
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mb-3"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="lastName" label="Last name">
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mb-3"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
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
          <FloatingLabel controlId="Confirm Password" label="Confirm password">
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mb-3"
              required
            />
          </FloatingLabel>
          <Alert
            show={passwordAlert}
            variant="danger"
            onClose={() => setPasswordAlert(false)}
            dismissible
          >
            Passwords did not match.
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="dark">
            Register
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Registration;
