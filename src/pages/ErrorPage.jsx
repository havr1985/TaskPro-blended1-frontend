import { useNavigate } from "react-router-dom";
import img from "../shared/images/error.png";
import { useEffect, useState } from "react";
import { Conteiner } from "../shared/Container/Conteiner";
import {
  HomeLink,
  Image,
  MainText,
  SecondaryText,
  StyledContainer,
  Timer,
  TimerText,
} from "./ErrorPage.styled";

export default function ErrorPage() {
  const navigate = useNavigate();

  const [redirectTime, setRedirectTime] = useState(10);

  const intervalId = setInterval(() => {
    setRedirectTime(redirectTime - 1);
  }, 1000);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      navigate("/"), { replace: true };
    }, 10000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Conteiner>
        <StyledContainer>
          <Image src={img} alt="error" />
          <MainText>Sorry! This page not found :(</MainText>
          <SecondaryText>
            <HomeLink to={"/home"}>Click here</HomeLink> for redirect to home
            page
          </SecondaryText>
          <TimerText>
            Or you will be automatically redirect in{" "}
            <Timer>{redirectTime}</Timer> seconds
          </TimerText>
        </StyledContainer>
      </Conteiner>
    </main>
  );
}
