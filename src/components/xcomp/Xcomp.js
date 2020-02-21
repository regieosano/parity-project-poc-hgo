import React from "react";
import { Row, Col, Container } from "reactstrap";

import NavBar from "../navbar/NavBar";
import SideBar from "../mainsidebar/MainSideBar";
import XMenuCategory from "../mainview/XMenuCategory";
import InnerSideBar from "../innersidebar/InnerSideBar";

import GrowerHaulerTable from "../users/grower-hauler-table/GrowerHaulerTable";

function Xcomp(props) {
  return (
    <div>
      <Row xs="1">
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row xs="2">
        <Col>
          <SideBar />
        </Col>

        <Col>
          <Row xs="1"></Row>
        </Col>
      </Row>
    </div>
  );
}

export default Xcomp;
