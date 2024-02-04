import { Conteiner } from "../../shared/Container/Conteiner";
import HomeBar from "./HomeBar/HomeBar";
import UserInfo from "./UserInfo/UserInfo";
import icons from "../../shared/images/icons.svg";
import {
  HeaderContainer,
  SelectUserWrapper,
  OpenSaidbar,
} from "./Header.styled";


const Header = () => {
  return (
    <>
      <Conteiner>
        <HeaderContainer>
          <OpenSaidbar>
            <svg width="24px" height="24px">
              <use href={icons + "#icon-bell"}></use>
            </svg>
          </OpenSaidbar>
          <SelectUserWrapper>
            <HomeBar />
            <UserInfo />
          </SelectUserWrapper>
        </HeaderContainer>
      </Conteiner>
    </>
  );
}

export default Header