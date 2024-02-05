import Modal from "react-modal";
import { CloseModalBtn, ModalTitle } from "./SharedModal.styled";
import "./sharedModal.css";

Modal.setAppElement("#root");

// eslint-disable-next-line react/prop-types
export function SharedModal({
  children,
  modalIsOpen,
  closeModal,
  title,
  maxWidth,
}) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgb(21, 21, 21, 0.75)",
    },
    content: {
      maxWidth: maxWidth,
    },
  };

  return (
    <div>
      <Modal
        className="ReactModalContentClassName"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Sample Modal"
        closeTimeoutMS={750}
      >
        <CloseModalBtn onClick={closeModal}>✕</CloseModalBtn>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </Modal>
    </div>
  );
}
