import React from "react";

import "./Register.css";

import { Form, FormGroup, Label, Input } from "reactstrap";

import XModal from "../modals/XModal";

function Register({ isModalOpen, onHandleToggleModal }) {
  const modalBody = (
    <Form>
      <FormGroup>
        <Label for="lastName">Lastname</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter lastname"
        />
      </FormGroup>
      <FormGroup>
        <Label for="firstName">Firstname</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter firstname"
        />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          type="textarea"
          name="address"
          id="address"
          placeholder="Enter address"
        />
      </FormGroup>
    </Form>
  );

  return (
    <>
      <div>
        <XModal
          isModalOpen={isModalOpen}
          modalBody={modalBody}
          onHandleToggleModal={onHandleToggleModal}
          modalSize={"md"}
          modalTitle={"Register"}
          modalId={"registerTitle"}
          buttonHappyText={"Submit"}
          buttonSadText={"Cancel"}
        />
      </div>
    </>
  );
}

export default Register;
