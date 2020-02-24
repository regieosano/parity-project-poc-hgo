import React from "react";

import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

import "./XModal.css";

function XModal({
  isModalOpen,
  onHandleToggleModal,
  modalSize,
  modalTitle,
  modalId,
  modalBody,
  buttonHappyText,
  buttonSadText
}) {
  return (
    <>
      <div>
        <Modal isOpen={isModalOpen} size={modalSize}>
          <div id={modalId}>
            <h5 className="mt-1">{modalTitle}</h5>
          </div>
          <ModalBody>{modalBody}</ModalBody>
          <ModalFooter>
            <Button
              color="success"
              id={buttonHappyText}
              onClick={onHandleToggleModal}>
              {buttonHappyText}
            </Button>{" "}
            <Button
              color="danger"
              id={buttonSadText}
              onClick={onHandleToggleModal}>
              {buttonSadText}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default XModal;
