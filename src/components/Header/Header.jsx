import {
  MainHeader,
  MenuButton,
  MenuButtonContainer,
  MenuIcon,
  ThemeAndUserContainer,
  UserAvatar,
  UserContainer,
  UserIcon,
  UsernameText,
} from "./Header.styled";
import sprite from "../../shared/images/icons.svg";
import { ThemeComponent } from "../ThemeMode/ThemeMenu";
import { EditProfileModal } from "../EditProfileModal/EditProfileModal";
import { useState } from "react";
import { selectAuthUserData } from "../../redux/Auth/authSelectors";
import { useSelector } from "react-redux";

export const Header = ({ openSideBar }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { email, username, avatarURL } = useSelector(selectAuthUserData);
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
          <UsernameText>{username}</UsernameText>
          {avatarURL ? (
            <UserAvatar
              src={avatarURL}
              alt="avatar"
              width="32px"
              height="32px"
            />
          ) : (
            <UserIcon className="iconLightning" width="12px" height="16px">
              <use href={`${sprite}#icon-user`}></use>
            </UserIcon>
          )}
        </UserContainer>
      </ThemeAndUserContainer>
      <EditProfileModal
        isModalOpen={isEditModalOpen}
        modalStateSwapper={modalStateSwapper}
      />
    </MainHeader>
  );
};
