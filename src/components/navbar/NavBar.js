import React, { useState } from "react";
import { Navbar, NavbarBrand, Form } from "reactstrap";
import { Button, FormGroup, Input } from "reactstrap";

import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavBar.css";

const NavBar = ({ accountName }) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const industryIcon = (
    <FontAwesomeIcon icon={faIndustry} size={"2x"} color={"Cyan"} />
  );

  return (
    <div>
      <Navbar style={{ backgroundColor: "#036b1d" }} id="navbar">
        <NavbarBrand>
          <span id="brandTitle">
            {industryIcon}&nbsp;&nbsp;Welcome, {accountName}
          </span>
        </NavbarBrand>
        <Form inline>
          <span>Logout</span>
          <FormGroup>
            <Input
              type="search"
              name="search"
              className="searchBox"
              id="searchBoxId"
              placeholder="Type to search"
            />
          </FormGroup>
          <Button className="searchBox"> {searchIcon}</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
