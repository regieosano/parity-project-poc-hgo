import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";

import NavBar from "../navbar/NavBar";
import MainSideBar from "../mainsidebar/MainSideBar";
import XMenuCategory from "../mainview/XMenuCategory";
import InnerSideBar from "../innersidebar/InnerSideBar";
import GrowerHaulerDetailViewModal from "../modals/GrowerHaulerDetailViewModal";

import GrowerHaulerTable from "../users/grower-hauler-table/GrowerHaulerTable";

function Xcomp(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <GrowerHaulerDetailViewModal
              isModalOpen={isModalOpen}
              onHandleToggleModal={onHandleToggleModal}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Xcomp;
