import React, { useState } from "react";
import { Form, FormGroup, Navbar, NavbarBrand } from "reactstrap";
import axios from "axios";

import Login from "../login/Login";
import Register from "../register/Register";

function MainView(props) {
  // Initialize states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [grower_hauler, setGrowerHauler] = useState("Grower");

  const handleOnInputChange = e => {
    const eventName = e.target.name;
    const eventValue = e.target.value;
    switch (eventName) {
      case "accountName":
        setAccountName(eventValue);
        break;
      case "email":
        setEmail(eventValue);
        break;
      case "password":
        setPassword(eventValue);
        break;
      case "address":
        setAddress(eventValue);
        break;
      case "type":
        setType(eventValue);
        break;
      case "grower_hauler":
        setGrowerHauler(eventValue);
        break;
    }
  };

  // Handle the toggle modal functionality
  const onHandleToggleModal = e => {
    const registerButtonAction = e.target.id;
    setIsModalOpen(!isModalOpen);
    if (registerButtonAction === "Submit") {
      axios
        .post("http://localhost:7700/parity/hgo/api/register", {
          accountID: "HGO-100XX",
          accountName,
          address,
          type,
          email,
          phoneNumber: "(002)-234-9800",
          grower_hauler,
          password
        })
        .then(response => {
          alert("A new MEMBER is Added.");
        })
        .catch(error => {
          alert(`There is an error - ${error.message}`);
        });
    }
  };

  return (
    <>
      <div id="navBarElemLogin">
        <Navbar id="loginNavBar">
          <NavbarBrand>
            <span id="loginTitle">HGO System V1.0</span>
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
      <div>
        <Login />
        <Register
          isModalOpen={isModalOpen}
          onHandleToggleModal={onHandleToggleModal}
          handleOnInputChange={handleOnInputChange}
          isValidForm={
            accountName.length === 0 ||
            email.length === 0 ||
            type.length === 0 ||
            address.length === 0 ||
            password.length === 0
          }
        />
      </div>
    </>
  );
}

export default MainView;
