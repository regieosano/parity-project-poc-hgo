import React, { useState } from "react";
import { Form, FormGroup, Navbar, NavbarBrand } from "reactstrap";
import axios from "axios";

import Login from "../login/Login";
import Register from "../register/Register";

function MainView(props) {
  // Initialize states
  const [isModalOpen, setIsModalOpen] = useState(false);

  let accountName = "";
  let email = "";
  let password = "";
  let address = "";
  let type = "";
  let grower_hauler = "";

  const handleOnInputChange = e => {
    const eventName = e.target.name;
    const eventValue = e.target.value;
    switch (eventName) {
      case "accountName":
        accountName = eventValue;
        break;
      case "email":
        email = eventValue;
        break;
      case "password":
        password = eventValue;
      case "address":
        address = eventValue;
      case "type":
        type = eventValue;
      case "grower_hauler":
        grower_hauler = eventValue;
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
          phoneNumber: "1002-234-9800",
          grower_hauler,
          password
        })
        .then(response => {
          console.log(response.data);
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
        />
      </div>
    </>
  );
}

export default MainView;
