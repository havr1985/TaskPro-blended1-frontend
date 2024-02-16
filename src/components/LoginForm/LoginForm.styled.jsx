import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: var(--welcomeBgColor);
`;

export const LoginContainer = styled.div`
  display: flex;
  min-width: 320px;

  flex-direction: column;
  align-items: start;
  background: var(--user-icon-plus-stroke-color);
  padding: 24px;
  border: 1px solid var(--loginform-border);
  border-radius: 8px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 424px;
    padding: 40px;
  }
`;

export const RegisterLink = styled(NavLink)`
  margin-right: 14px;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--color-white);
  text-decoration: none;
`;

export const LoginLink = styled(NavLink)`
  left: 160px;
  top: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--color-pale-white);
  text-decoration: none;
`;

export const InputContainer = styled.div`
  position: relative;
  min-width: 272px;
  height: 49px;
  background: var(--welcome-background-color);
  // margin-bottom: 14px;
  box-shadow: 0px 4px 16px var(--color-shadow);
  border-radius: 8px;
 
   @media (min-width: 375px) {
    width: 287px;
  }
  @media (min-width: 768px) {
    width: 344px;
  }
`;

export const LoginInput = styled.input`
  outline: none;
  overflow: hidden;
  transition: all 250ms ease;
  color: var(--welcome-hover-text-color);
  min-width: 272px;
  height: 49px;
  border: 1px solid var(--loginform-border);
  margin: 0;
  padding-left: 18px;
  background-color: var(--welcome-background-color);
  border-radius: 8px;
  transition: var(--hover-params);

  &:focus,
  &:active {
    border: 1px solid var(--secondary-login-button-color);
  }
   @media (min-width: 375px) {
    width: 287px;
  }
  @media (min-width: 768px) {
    width: 344px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  min-width: 272px;
  max-width: 287px;
  align-items: start;
  padding: 0;
  margin-bottom: 40px;
  color: var(--loginform-text-color);
`;

export const InputBthEye = styled.svg`
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
export const LoginBtn = styled.button`
  cursor: pointer;
  min-width: 272px;
  height: 49px;
  border-radius: 8px;
  font-weight: 500;
  background: var(--start-login-button-color);
  transition: var(--hover-params);
  &:hover {
    background: var(--secondary-login-button-color);

    font-weight: bold;
  }
  &:focus {
    background: var(--secondary-login-button-color);
  }
  @media (min-width: 375px) {
    width: 287px;
  }
    @media screen and (min-width: 768px) {
    width: 344px;
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

export const ErrorContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 200px;
`;

export const CorectDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 14px;
  position: relative;
`;
