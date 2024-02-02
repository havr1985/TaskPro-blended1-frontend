import Modal from "react-modal";
import { CloseModalBtn, ModalTitle } from "./SharedModal.styled";
import "./sharedModal.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "calc(100vw - 48px)",
    minWidth: "335px",
    maxHeight: "calc(100vh - 24px)",
    background: "#151515",
    padding: "24px 24px",
    border: "1px solid rgba(190, 219, 176, 0.5)",
    borderRadius: "8px",
  },
};
Modal.setAppElement("#root");

// eslint-disable-next-line react/prop-types
export function SharedModal({ children, modalIsOpen, closeModal, title }) {
  return (
    <div>
      <Modal
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
