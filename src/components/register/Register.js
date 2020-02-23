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
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
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
      <FormGroup>
        <Label for="memberType">Member Type</Label>
        <Input type="select" name="memberType">
          <option>Grower</option>
          <option>Hauler</option>
        </Input>
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
