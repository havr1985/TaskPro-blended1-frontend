import { useModal } from "../../hooks/useModal";
import { AddBoardModal } from "../BoardModal/newBoardModal/newBoardModal";

export const RegisterForm = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <AddBoardModal isModalOpen={isModalOpen} onCloseModal={closeModal} />
    </>
  );
};
