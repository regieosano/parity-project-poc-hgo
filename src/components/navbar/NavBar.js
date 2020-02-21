import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { FormGroup, Input } from "reactstrap";

import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavBar.css";

const NavBar = props => {
  const welcomeIcon = (
    <FontAwesomeIcon icon={faDoorOpen} size={"2x"} color={"brown"} />
  );

  return (
    <div>
      <Navbar style={{ backgroundColor: "#036b1d" }}>
        <NavbarBrand>
          <span>{welcomeIcon}&nbsp;&nbsp;Welcome, HGO User</span>
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
