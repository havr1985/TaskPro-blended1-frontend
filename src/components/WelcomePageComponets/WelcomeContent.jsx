import {
  WelcomeWrapper,
  WelcomeLogo,
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
        <WelcomeLogo>
          <WelcomeLogoTitle>Task Pro</WelcomeLogoTitle>
        </WelcomeLogo>
        <WelcomeDescription>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don``t wait, start achieving your goals now!
        </WelcomeDescription>

        <WelcomeRegisterButton>Registration</WelcomeRegisterButton>
        <WelcomeLoginButton>Log In</WelcomeLoginButton>
      </WelcomeContainer>
    </WelcomeWrapper>
  );
};

export default WelcomeContent;
