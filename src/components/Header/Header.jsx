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

export const Header = ({ openSideBar }) => {
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
        <UserContainer>
          <p>User</p>
          <UserIcon className="iconLightning" width="12px" height="16px">
            <use href={`${sprite}#icon-user`}></use>
          </UserIcon>
        </UserContainer>
      </ThemeAndUserContainer>
    </MainHeader>
  );
};
