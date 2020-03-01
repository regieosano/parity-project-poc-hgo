import React, { useState } from "react";
import XModal from "../modals/XModal";

import GrowerHaulerDetailView from "../grower-hauler-detail/GrowerHaulerDetailView";

import "./UsersListComponent.css";

function UsersListComponent({
  isModalOpen,
  modalTitle,
  onHandleToggleModal,
  onSelectUserFromList,
  hgoArrayUsers
}) {
  const mainTitle = modalTitle;

  const [hgoUser, setHGOUser] = useState({});

  // const [showGHDetailModal, setShowGHDetailModal] = useState(false);

  let users = [];

  const handleSelectedUser = e => {
    const index = e.target.id;
    const userSelected = users[index];
    setShowGHDetailModal(true);
    setHGOUser(userSelected);
  };

  switch (mainTitle) {
    case "growers":
      users = hgoArrayUsers.filter(
        u => u.grower_hauler.toLowerCase() === "grower"
      );

      break;

    case "haulers":
      users = hgoArrayUsers.filter(
        u => u.grower_hauler.toLowerCase() === "hauler"
      );

      break;
  }

  const dataBody = (
    <>
      <ul>
        {users.map((u, index) => {
          return (
            <li
              key={index}
              className="ml-2 usersHGOList"
              id={index}
              onClick={onSelectUserFromList}>
              {u.accountName}
            </li>
          );
        })}
      </ul>
    </>
  );

  return (
    <>
      <div>
        <XModal
          isModalOpen={isModalOpen}
          onHandleToggleModal={onHandleToggleModal}
          modalSize={"lg"}
          modalBody={dataBody}
          modalId={"modalTitle"}
          modalTitle={mainTitle}
          buttonHappyText={"None"}
          buttonSadText={"Close"}
          name={"usersListModal"}
        />
      </div>
    </>
  );
}

export default UsersListComponent;
