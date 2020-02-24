import React, { useState } from "react";
import { Form, FormGroup, Navbar, NavbarBrand } from "reactstrap";
import axios from "axios";

import Login from "../login/Login";
import Register from "../register/Register";

function MainView(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle the toggle modal functionality
  const onHandleToggleModal = e => {
    const registerButtonAction = e.target.id;
    setIsModalOpen(!isModalOpen);
    if (registerButtonAction === "Submit") {
      axios
        .post("http://localhost:7700/parity/hgo/api/register", {
          accountID: "HGO-10001",
          accountName: "XYZ Company",
          address: "New York, New York",
          type: "Cash",
          email: "xyccompany@gmail.com",
          phoneNumber: "1002-234-9800",
          hauler_grower: "Hauler",
          password: "54321"
        })
        .then(response => {
          console.log(response.data);
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
        />
      </div>
    </>
  );
}

export default MainView;
