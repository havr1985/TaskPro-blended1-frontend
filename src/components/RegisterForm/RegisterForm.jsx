import { useState } from "react";
import { EditProfileModal } from "../EditProfileModal/EditProfileModal";

export const RegisterForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStateSwapper = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  // console.log(isModalOpen);
  return (
    <>
      <button onClick={modalStateSwapper}>Open modal</button>
      <EditProfileModal
        isModalOpen={isModalOpen}
        modalStateSwapper={modalStateSwapper}
      />
    </>
  );
  // return <div>Welcome content</div>;
};
