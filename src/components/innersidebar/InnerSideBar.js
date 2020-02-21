import React from "react";

import "./InnerSideBar.css";

function InnerSideBar(props) {
  return (
    <>
      <div id="innersidebar">
        <ul>
          <li>Delivery</li>
          <li>Receiving Station</li>
          <li>Grower</li>
          <li>Hauler</li>
          <li>Variety</li>
          <li>Payments</li>
        </ul>
      </div>
    </>
  );
}

export default InnerSideBar;
