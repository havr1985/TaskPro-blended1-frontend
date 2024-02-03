import { useState } from "react";
import { AddBoardModal } from "../BoardModal/newBoardModal/newBoardModal";

export const RegisterForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalStateSwapper = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  // console.log(isModalOpen);;

  return (
    <>
      <button onClick={modalStateSwapper}>Open modal</button>
      <AddBoardModal
        isModalOpen={isModalOpen}
        modalStateSwapper={modalStateSwapper}
      />
    </>
  );
};
