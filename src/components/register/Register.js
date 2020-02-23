import React from "react";

import "./Register.css";

import { Form, FormGroup, Label, Input } from "reactstrap";

import XModal from "../modals/XModal";

function Register({ isModalOpen, onHandleToggleModal }) {
  const modalBody = (
    <Form>
      <FormGroup>
        <Label for="accountId">Account Id</Label>
        <Input
          type="text"
          name="accountId"
          id="accountId"
          placeholder="Enter Account Id"
        />
      </FormGroup>
      <FormGroup>
        <Label for="accountName">Account Name</Label>
        <Input
          type="text"
          name="accountName"
          id="accountName"
          placeholder="Enter Account Name"
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
        <Label for="type">Type</Label>
        <Input type="text" name="type" id="type" placeholder="Enter type" />
      </FormGroup>
      <FormGroup>
        <Label for="growerHauler">Grower/Hauler</Label>
        <Input type="select" name="growerHauler">
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
          modalId={"modalTitle"}
          buttonHappyText={"Submit"}
          buttonSadText={"Cancel"}
        />
      </div>
    </>
  );
}

export default Register;
