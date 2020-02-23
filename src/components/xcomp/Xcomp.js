import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import NavBar from "../navbar/NavBar";
import MainSideBar from "../mainsidebar/MainSideBar";
import GrowerHaulerDetailView from "../grower-hauler-detail/GrowerHaulerDetailView";

function XComp(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [memberName, setMemberName] = useState("");

  useEffect(() => {
    const supreme = props.location["state"];
    const mFName = supreme.majestic.member.firstName;
    const mLName = supreme.majestic.member.lastName;
    setMemberName(`${mFName} ${mLName}`);
  }, []);

  const onHandleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Row xs="1">
        <Col>
          <NavBar memberName={memberName} />
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
