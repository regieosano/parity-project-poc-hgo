import React from "react";

import {
  ButtonGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./MainSidebar.css";

function MainSideBar({ onHandleToggleModal }) {
  return (
    <div id="mainsidebar">
      <ul>
        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="dropDownText">DASHBOARD</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Dropdown 1</DropdownItem>
              <DropdownItem>Dropdown 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>

        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="dropDownText">RECEIVING</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Dropdown 1</DropdownItem>
              <DropdownItem>Dropdown 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>

        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="dropDownText">QUALITY</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Dropdown 1</DropdownItem>
              <DropdownItem>Dropdown 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>

        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="dropDownText">DELIVERIES</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Dropdown 1</DropdownItem>
              <DropdownItem>Dropdown 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>

        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="dropDownText">PAYMENTS</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Dropdown 1</DropdownItem>
              <DropdownItem>Dropdown 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>
        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="dropDownText">USERS</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={onHandleToggleModal}>Grower</DropdownItem>
              <DropdownItem>Hauler</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>

        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown">
              <span className="dropDownText">SETTINGS</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Grower</DropdownItem>
              <DropdownItem>Hauler</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>
      </ul>
    </div>
  );
}

export default MainSideBar;
