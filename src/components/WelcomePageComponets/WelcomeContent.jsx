import iconImage from "../../shared/images/boy.png";
import icons from "../../shared/images/icons.svg";
import {
  WelcomeWrapper,
  WelcomeIcon,
  WelcomeLogo,
  WelcomeLogoIcon,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeLoginButton,
  WelcomeRegisterButton,
  WelcomeLogoTitle,
} from "./WelcomeContent.styled";

export const WelcomeContent = () => {
  return (
    <WelcomeWrapper>
      <WelcomeContainer>
        <WelcomeIcon src={iconImage} alt="boy with laptop" />

        <WelcomeLogo>
          <WelcomeLogoIcon>
            <use href={icons + "#icon-logo"} />
          </WelcomeLogoIcon>

          <WelcomeLogoTitle>Task Pro</WelcomeLogoTitle>
        </WelcomeLogo>

        <WelcomeDescription>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don`t wait, start achieving your goals now!
        </WelcomeDescription>

        <WelcomeRegisterButton to="/auth/register">
          Registration
        </WelcomeRegisterButton>
        <WelcomeLoginButton to="/auth/login">Log In</WelcomeLoginButton>
      </WelcomeContainer>
    </WelcomeWrapper>
  );
};

export default WelcomeContent;
