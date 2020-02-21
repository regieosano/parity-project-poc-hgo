import React from "react";

import "./Sidebar.css";

function SideBar(props) {
  const toggleSideBar = () => {};

  return (
    <div id="sidebar">
      <ul>
        <li>DASHBOARD</li>
        <li>RECEIVING</li>
        <li>QUALITY</li>
        <li>DELIVERIES</li>
        <li>PAYMENTS</li>
        <li>USERS</li>
        <li>SETTINGS</li>
      </ul>
    </div>
  );
}

export default SideBar;
