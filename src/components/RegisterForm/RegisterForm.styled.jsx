import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: var(--welcomeBgColor);
`;
export const FormContainer = styled.div`
  text-align: center;
  background: var(--user-icon-plus-stroke-color);
  border-radius: 8px;
  padding: 24px;
  min-width: 320px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 424px;
    padding: 40px;
  }
`;
export const LinkMenu = styled.div`
  display: flex;
  min-width:272px;
  color: var(--loginform-text-color);
   @media (min-width: 375px) {
    width: 287px; 
  }
    @media (min-width: 768px) {
    width: 344px; 
  }
`;

export const RegisterLink = styled(Link)`
  margin-right: 14px;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--color-white);
  text-decoration: none;
`;

export const LoginLink = styled(Link)`
  left: 160px;
  top: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--color-pale-white);
  text-decoration: none;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
  gap: 14px;
  position: relative;
`;

export const InputInput = styled.input`
  outline: none;
  overflow: hidden;
  width: 100%;
  height: 49px;
  color: var(--welcome-hover-text-color);
  background: var(--welcome-background-color);
  border: 1px solid var(--loginform-border);
  padding-left: 18px;
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
  transition: var(--hover-params);

  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px white; /* цвет вашего фона */
    -webkit-text-fill-color: black; /* цвет текста */
  }

  &:focus,
  &:active {
    border: 1px solid var(--secondary-login-button-color);
  }

 /*  @media (max-width: 767px) {
    width: 287px;
  } */
`;

export const RegisterBtn = styled.button`
  // font-style: normal;
  // font-family: Poppins;
  // font-weight: 500;
  // font-weight: bold;
  // font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  min-width:272px;
  height: 49px;
  margin-top: 24px;
  background: var(--user-icon-plus-fill-color);
  border-radius: 8px;
  color: var(--color-dark);
  transition: opacity 200ms linear;
  cursor: pointer;
  &:hover {
    background: var(--secondary-login-button-color);
  }

    @media (min-width: 375px) {
    width: 287px; 
  }
    @media (min-width: 768px) {
    width: 344px; 
  }
  
`;

export const PasswordInput = styled.div`
  position: relative;
  display: flex;

 /*  min-width:272px;
  max-width:287px; */
  align-items: center;
  flex-direction: column;
  gap: 14px;
`;
export const Passwordsvg = styled.svg`
  position: absolute;
  top: 16px;
  right: 15px;
  width: 18px;
  height: 18px;
  stroke: var(--user-icon-stroke-color);
  stroke-width: 1.3px;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity var(--hover-params);

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const ErrorText = styled.div`
  position: absolute;
  bottom: -15px;
  right: 0;
  font-size: 11px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -1%;
  opacity: 0.9;
  color: #fff;
`;

export const StyledWrapInputAuth = styled.div`
  position: relative;
  min-width:272px;
    @media (min-width: 375px) {
    width: 287px; 
  }
    @media (min-width: 768px) {
    width: 344px; 
  }
 
`;
