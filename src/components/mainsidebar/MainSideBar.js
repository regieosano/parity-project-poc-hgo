import React from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./MainSidebar.css";

function SideBar(props) {
  const toggleSideBar = () => {};

  return (
    <div id="mainsidebar">
      <ul>
        <li>DASHBOARD</li>
        <li>RECEIVING</li>
        <li>QUALITY</li>
        <li>DELIVERIES</li>
        <li>PAYMENTS</li>
        <li>
          {" "}
          <UncontrolledDropdown>
            <DropdownToggle className="dropdown" color="brown">
              USERS
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Grower</DropdownItem>
              <DropdownItem>Hauler</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>
        <li>SETTINGS</li>
      </ul>
    </div>
  );
}

export default SideBar;
