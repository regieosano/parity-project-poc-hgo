import React, { useState } from "react";

import XModal from "../modals/XModal";

function GrowerHaulerDetailView({ isModalOpen, onHandleToggleModal }) {
  const modalBody = <h1>Hello Modal Body</h1>;

  return (
    <>
      <XModal
        isModalOpen={isModalOpen}
        modalBody={modalBody}
        onHandleToggleModal={onHandleToggleModal}
        modalSize={"lg"}
        modalId={"modalTitle"}
        modalTitle={"Grower/Hauler Detail View"}
        buttonHappyText={"Submit"}
        buttonSadText={"Cancel"}
      />
    </>
  );
}

export default GrowerHaulerDetailView;
