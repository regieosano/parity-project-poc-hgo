import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./XMenuCategory.css";

function XMenuCategory({ xTable, xTitle }) {
  return (
    <div>
      <h1 className="x-title mt-5">{xTitle}</h1>
      <Row className="ml-5 mt-3">
        <h1 className="ml-5">SideBarMenu</h1>

        {xTable}
      </Row>
    </div>
  );
}

export default XMenuCategory;
