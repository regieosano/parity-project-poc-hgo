import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import NavBar from "../navbar/NavBar";
import MainSideBar from "../mainsidebar/MainSideBar";
import GrowerHaulerDetailView from "../grower-hauler-detail/GrowerHaulerDetailView";

function XComp(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberObject, setMemberObject] = useState({});
  const [accountName, setAccountName] = useState("");

  useEffect(() => {
    const supreme = props.location["state"];
    const accountName = supreme.majestic.member.accountName;
    const memberObject = supreme.majestic.member;
    console.log(memberObject);
    setAccountName(accountName);
    setMemberObject(memberObject);
  }, []);

  const onHandleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Row xs="1">
        <Col>
          <NavBar accountName={accountName} />
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
              memberObject={memberObject}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default XComp;
