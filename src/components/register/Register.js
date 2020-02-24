import React, { useState } from "react";

import "./Register.css";

import { Form, FormGroup, Label, Input } from "reactstrap";

import XModal from "../modals/XModal";

function Register({ isModalOpen, onHandleToggleModal }) {
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [growler_hauler, setGrowlerHauler] = useState("");

  const modalBody = (
    <Form>
      <FormGroup>
        <Label for="accountName">Account Name</Label>
        <Input
          type="text"
          name="accountName"
          id="accountName"
          placeholder="Enter Account Name"
          onChange={e => setAccountName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          onChange={e => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={e => setPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          type="textarea"
          name="address"
          id="address"
          placeholder="Enter address"
          onChange={e => setAddress(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="type">Type</Label>
        <Input
          type="text"
          name="type"
          id="type"
          placeholder="Enter type"
          onChange={e => setType(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="growerHauler">Grower/Hauler</Label>
        <Input
          type="select"
          name="growerHauler"
          onChange={e => setGrowlerHauler(e.target.value)}>
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
