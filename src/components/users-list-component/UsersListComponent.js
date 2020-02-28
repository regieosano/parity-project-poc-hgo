import React, { useState } from "react";
import XModal from "../modals/XModal";

function UsersListComponent({
  isModalOpen,
  modalTitle,
  modalBody,
  onHandleToggleModal,
  hgoArrayUsers
}) {
  const mainTitle = modalTitle.toUpperCase();

  //   const [hgoUsers, setHGOUsers] = useState([]);
  let hgoUsers = [];

  switch (mainTitle) {
    case "GROWERS":
      hgoUsers = hgoArrayUsers.filter(
        u => u.grower_hauler.toLowerCase() === "grower"
      );
      console.log(hgoUsers);
      break;

    case "HAULERS":
      hgoUsers = hgoArrayUsers.filter(
        u => u.grower_hauler.toLowerCase() === "hauler"
      );
      console.log(hgoUsers);
      break;
  }

  const dataBody = (
    <>
      <ul>
        {hgoUsers.map((u, index) => {
          return (
            <li key={index} className="ml-2">
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
          modalSize={"xl"}
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
