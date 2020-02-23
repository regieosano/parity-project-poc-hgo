import React, { useState } from "react";

import axios from "axios";

import { Navbar, NavbarBrand } from "reactstrap";
import { Card, CardBody, Form, FormGroup, Input, Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import Register from "../register/Register";

import "./Login.css";

function Login(props) {
  // Initialize the states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passWordInput, setPassWordInput] = useState("");

  // Handle the toggle modal functionality
  const onHandleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Post call to API using Axios
  const handleLoginClick = () => {
    axios
      .post("http://localhost:7700/parity/hgo/api/login", {
        email: emailInput,
        password: passWordInput
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        alert("Invalid Credentials");
      });
  };

  return (
    <>
      <div id="navBarElemLogin">
        <Navbar style={{ backgroundColor: "#036b1d" }} id="navbar">
          <NavbarBrand>
            <span id="loginTextPosition">HGO System V1.0</span>
          </NavbarBrand>
          <Form inline>
            <FormGroup>
              <h6 id="registerFormat" onClick={onHandleToggleModal}>
                Register
              </h6>
            </FormGroup>
          </Form>
        </Navbar>
      </div>
      <Register
        isModalOpen={isModalOpen}
        onHandleToggleModal={onHandleToggleModal}
      />
      <div id="cardElemLogin" className="card-centered">
        <Container>
          <Row xs="3">
            <Col></Col>
            <Col>
              <Card>
                <CardBody>
                  <div className="loginTitle">
                    <h4>Member Login</h4>
                  </div>
                  <Form>
                    <FormGroup>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="loginMargins"
                        onChange={e => setEmailInput(e.target.value)}
                      />
                      <Input
                        type="password"
                        placeholder="Password"
                        className="loginMargins"
                        onChange={e => setPassWordInput(e.target.value)}
                      />
                      <Button
                        color="success"
                        block
                        className="loginMargins p-2"
                        onClick={handleLoginClick}>
                        Login
                      </Button>
                    </FormGroup>
                  </Form>
                  <div className="forgotPassword loginTitle p-1">
                    <p className="mt-3">Forgot Password?</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
