import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import NavBar from "../navbar/NavBar";
import MainSideBar from "../mainsidebar/MainSideBar";
import GrowerHaulerDetailView from "../grower-hauler-detail/GrowerHaulerDetailView";
import UsersListComponent from "../users-list-component/UsersListComponent";

function XComp(props) {
  const [hgoUser, setHGOUser] = useState({});
  const [mainTitle, setMainTitle] = useState("");
  const [isUsersListModalOpen, setIsUsersListModalOpen] = useState(false);
  const [hgoArrayUsers, setHGOArrayUsers] = useState([]);
  const [accountName, setAccountName] = useState("");
  const [showGHDetailModal, setShowGHDetailModal] = useState(false);

  useEffect(() => {
    const supreme = props.location["state"];
    const hgoUsers = supreme.majestic.data;
    const accountName = supreme.majestic.member.accountName;
    setHGOArrayUsers(hgoUsers);
    setAccountName(accountName);
  }, []);

  const onHandleToggleModal = e => {
    if (!showGHDetailModal) {
      setMainTitle(e.target.name);
    }
    setShowGHDetailModal(false);
    setIsUsersListModalOpen(!isUsersListModalOpen);
  };

  const onSelectUserFromList = hgoUser => {
    setHGOUser(hgoUser);
    setIsUsersListModalOpen(!isUsersListModalOpen);
    setShowGHDetailModal(!showGHDetailModal);
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
              isModalOpen={isUsersListModalOpen}
              modalTitle={mainTitle}
              onHandleToggleModal={onHandleToggleModal}
              onSelectUserFromList={onSelectUserFromList}
              hgoArrayUsers={hgoArrayUsers}
            />
            <GrowerHaulerDetailView
              isModalOpen={showGHDetailModal}
              onHandleToggleModal={onHandleToggleModal}
              hgoUser={hgoUser}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default XComp;
