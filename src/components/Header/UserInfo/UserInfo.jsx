
import  { useState } from "react";
import { OpenEditUser, UserInfoWrapper, UserName } from "./UserInfo.styled";
import icons from "../../../shared/images/icons.svg";
import { EditProfileModal } from "../../EditProfileModal/EditProfileModal";

const UserInfo = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

const handleOpenModal = () => {
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};

  return (
    <>
      <UserInfoWrapper>
        <UserName>name</UserName>
        <OpenEditUser type="button" onClick={handleOpenModal}>
          <svg width="32px" height="32px">
            <use href={icons + "#icon-user"}></use>
          </svg>
        </OpenEditUser>
      </UserInfoWrapper>
      <EditProfileModal
        isModalOpen={isModalOpen}
        modalStateSwapper={handleCloseModal}
      />
    </>
  );
};

export default UserInfo;

