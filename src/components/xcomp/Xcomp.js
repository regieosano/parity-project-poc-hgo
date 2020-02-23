import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";

import NavBar from "../navbar/NavBar";
import MainSideBar from "../mainsidebar/MainSideBar";
import XMenuCategory from "../mainview/XMenuCategory";
import InnerSideBar from "../innersidebar/InnerSideBar";
import GrowerHaulerDetailView from "../grower-hauler-detail/GrowerHaulerDetailView";

import GrowerHaulerTable from "../users/grower-hauler-table/GrowerHaulerTable";

function XComp(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const supreme = props.location["state"];
    console.log(supreme.majestic["data"]);
  }, []);

  const onHandleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Row xs="1">
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row xs="2">
        <Col>
          <MainSideBar onHandleToggleModal={onHandleToggleModal} />
        </Col>

        <Col>
          <Row xs="1">
            <GrowerHaulerDetailView
              isModalOpen={isModalOpen}
              onHandleToggleModal={onHandleToggleModal}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default XComp;
