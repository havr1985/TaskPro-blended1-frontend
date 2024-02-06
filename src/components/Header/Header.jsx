import {
  MainHeader,
  MenuButton,
  MenuButtonContainer,
  MenuIcon,
  ThemeAndUserContainer,
  UserContainer,
  UserIcon,
} from "./Header.styled";
import sprite from "../../shared/images/icons.svg";
import { ThemeComponent } from "../ThemeMode/ThemeMenu";
import { EditProfileModal } from "../EditProfileModal/EditProfileModal";
import { useState } from "react";

export const Header = ({ openSideBar }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const modalStateSwapper = () => {
    setIsEditModalOpen((prev) => !prev);
  };
  return (
    <MainHeader>
      <MenuButtonContainer>
        <MenuButton type="button" onClick={openSideBar}>
          <MenuIcon className="iconLightning" width="12px" height="16px">
            <use href={`${sprite}#icon-burger-menu`}></use>
          </MenuIcon>
        </MenuButton>
      </MenuButtonContainer>
      <ThemeAndUserContainer>
        <ThemeComponent />
        <UserContainer onClick={() => modalStateSwapper()}>
          <p>User</p>
          <UserIcon className="iconLightning" width="12px" height="16px">
            <use href={`${sprite}#icon-user`}></use>
          </UserIcon>
        </UserContainer>
      </ThemeAndUserContainer>
      <EditProfileModal
        isModalOpen={isEditModalOpen}
        modalStateSwapper={modalStateSwapper}
      />
    </MainHeader>
  );
};
