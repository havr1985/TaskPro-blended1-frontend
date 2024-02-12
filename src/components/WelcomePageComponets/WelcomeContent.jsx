import iconImage from "../../shared/images/boy.png";
import icons from "../../shared/images/icons.svg";
import { ThemeComponent } from "../ThemeMode/ThemeMenu";
import { googleLoginThunk } from "../../redux/Auth/authOperation";
import { useDispatch } from "react-redux";
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
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export const WelcomeContent = () => {
  const dispatch = useDispatch();
  
const loginByG = async (token) => {
  const userData = jwtDecode(token);
  try {
    await dispatch(
      googleLoginThunk({
        username: userData.name,
        email: userData.email,
      })
    ).unwrap();
    toast.success("You have registered successfully!");
  } catch (error) {
    toast.error(
      "Oops, it's looks like something went wrong... Please, try again!"
    );
  }
}

  return (
    <WelcomeWrapper>
      <WelcomeContainer>
        <WelcomeIcon src={iconImage} alt="boy with laptop" />
        <ThemeComponent></ThemeComponent>
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
        <GoogleLogin
          onSuccess={credentialResponse => {
            loginByG(credentialResponse.credential);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </WelcomeContainer>
    </WelcomeWrapper>
  );
};

export default WelcomeContent;
