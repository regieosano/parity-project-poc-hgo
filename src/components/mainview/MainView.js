import React, { useState } from "react";
import { Form, FormGroup, Navbar, NavbarBrand } from "reactstrap";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import { useInputForm } from "../../hooks/useInputForm";

import Login from "../login/Login";
import Register from "../register/Register";

function MainView(props) {
  const [variables, handleOnInputChange] = useInputForm({
    accountName: "",
    email: "",
    password: "",
    address: "",
    type: "",
    grower_hauler: "Grower"
  });

  // Initialize states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Icon spinner
  const spinnerIcon = (
    <FontAwesomeIcon icon={faSpinner} size={"2x"} color={"Cyan"} />
  );

  // Handle the toggle modal functionality
  const onHandleToggleModal = e => {
    const registerButtonAction = e.target.id;
    setIsModalOpen(!isModalOpen);
    if (registerButtonAction === "Submit") {
      setLoading(true);
      axios
        .post(
          "https://poc-hgo-nodebackend.herokuapp.com/parity/hgo/api/register",
          {
            accountID: "HGO-100XX",
            accountName: variables.accountName,
            address: variables.address,
            type: variables.type,
            email: variables.email,
            phoneNumber: "(002)-234-9800",
            grower_hauler: variables.grower_hauler,
            password: variables.password
          }
        )
        .then(response => {
          setLoading(false);
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
      {loading && <div>{spinnerIcon}</div>}
      <div>
        <Login />
        <Register
          isModalOpen={isModalOpen}
          onHandleToggleModal={onHandleToggleModal}
          handleOnInputChange={handleOnInputChange}
          isValidForm={
            variables.accountName.length === 0 ||
            variables.email.length === 0 ||
            variables.type.length === 0 ||
            variables.address.length === 0 ||
            variables.password.length === 0
          }
        />
      </div>
    </>
  );
}

export default MainView;
