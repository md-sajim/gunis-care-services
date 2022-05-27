import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  // fist one system
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const navigate = useNavigate("");
  const handleForm = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    // console.log(name, email, password, confirmPassword);
    console.log(event.target);
  };
  const handleNavigetLogin = () => {
    navigate("/login");
  };
  //second one system
  const handleFormSecond = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <div className="container mx-auto mt-5 w-50">
      <h1>Please register</h1>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="mt-2">
        Already have an account?
        <span
          style={{ cursor: "pointer" }}
          className="text-warning"
          onClick={handleNavigetLogin}
        >
          Please Login
        </span>
      </p>
      <div className="anther-one-style">
        <h1 className="text-primary">Login anther one style</h1>
        <form onSubmit={handleFormSecond}>
          <input
            type="text"
            name="Name"
            id="formBasicName"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            id="formBasicEmail"
            placeholder="Your email"
            required
          />
          <input
            type="password"
            name="password"
            id="formBasicPassword"
            placeholder="Password"
            required
          />
          <input type="submit" value="Submit" />
        </form>
        <p className="mt-2">
          Already have an account?
          <span
            style={{ cursor: "pointer" }}
            className="text-warning"
            onClick={handleNavigetLogin}
          >
            Please Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
