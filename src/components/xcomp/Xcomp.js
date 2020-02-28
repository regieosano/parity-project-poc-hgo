import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import NavBar from "../navbar/NavBar";
import MainSideBar from "../mainsidebar/MainSideBar";
import GrowerHaulerDetailView from "../grower-hauler-detail/GrowerHaulerDetailView";
import UsersListComponent from "../users-list-component/UsersListComponent";

function XComp(props) {
  const [
    isGrowerHaulerDetailModalOpen,
    setIsGrowerHaulerDetailModalOpen
  ] = useState(false);
  const [mainTitle, setMainTitle] = useState("");
  const [isUsersModalOpen, setIsUsersModalOpen] = useState(false);
  const [memberObject, setMemberObject] = useState({});
  const [hgoArrayUsers, setHGOArrayUsers] = useState([]);
  const [accountName, setAccountName] = useState("");

  useEffect(() => {
    const supreme = props.location["state"];
    const hgoUsers = supreme.majestic.data;
    const accountName = supreme.majestic.member.accountName;
    const memberObject = supreme.majestic.member;
    setHGOArrayUsers(hgoUsers);
    setAccountName(accountName);
    setMemberObject(memberObject);
  }, []);

  const onHandleToggleModal = e => {
    setMainTitle(e.target.name);
    setIsUsersModalOpen(!isUsersModalOpen);
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
            <UsersListComponent
              isModalOpen={isUsersModalOpen}
              modalTitle={mainTitle}
              onHandleToggleModal={onHandleToggleModal}
              hgoArrayUsers={hgoArrayUsers}
            />
            <GrowerHaulerDetailView
              isModalOpen={false}
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
