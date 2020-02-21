import React from "react";
import { Row, Col } from "reactstrap";
import InnerSideBar from "../innersidebar/InnerSideBar";
import GrowerHaulerDViewButtons from "../grower-hauler-dview-buttons/GrowerHaulerDViewButtons";

import "./XMenuCategory.css";

function XMenuCategory({ xTable, xTitle }) {
  return (
    <div>
      <h1 className="x-title">{xTitle}</h1>
      <Row>
        <InnerSideBar />
        {xTable}
      </Row>
    </div>
  );
}

export default XMenuCategory;
