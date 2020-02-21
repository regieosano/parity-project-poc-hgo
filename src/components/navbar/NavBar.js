import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { FormGroup, Label, Input } from "reactstrap";

import "./NavBar.css";

const NavBar = props => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#036b1d" }}>
        <NavbarBrand>
          <span>Welcome, HGO User</span>
        </NavbarBrand>
        <FormGroup>
          <Input
            type="search"
            name="search"
            id="searchBox"
            placeholder="Type to search"
          />
        </FormGroup>
      </Navbar>
    </div>
  );
};

export default NavBar;
