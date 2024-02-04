
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    var(--color-white) 0%,
    var(--color-white) 25%,
    var(--color-green) 92.19%
  );
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FormContainer = styled.div`
  text-align: center;
  background: var(--bg-color-form);
  border-radius: 8px;
  padding: 40px;
  @media screen and (max-width: 767px) {
    padding: 24px;
  }
`;
export const LinkMenu = styled.div`
  display: flex;
`;

export const RegisterLink = styled(Link)`
  margin-right: 14px;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--color-white);
  text-decoration: none;
`;

export const LoginLink = styled(Link)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
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

  input {
    width: 344px;
    height: 49px;
    left: 40px;
    top: 107px;
    color: var(--color-white);
    background: var(--bg-color-form-input);
    opacity: 0.4;
    border: 1px solid var(--color-green);
    padding-left: 18px;
    box-shadow: 0px 4px 16px var(--color-shadow);
    border-radius: 8px;
    @media screen and (max-width: 767px) {
      width: 287px;
    }
  }
`;

export const RegisterBtn = styled.button`
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  width: 100%;
  height: 49px;
  margin-top: 24px;
  background: var(--color-green);
  border-radius: 8px;
  color: var(--color-dark);
  transition: opacity 200ms linear;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 767px) {
    width: 287px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const PasswordInput = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`
export const Passwordsvg = styled.svg`
  position: absolute;
  right: 18px;
  top: 19px;
  cursor: pointer;
  stroke: #fff;
  width: 16.5px;
  height: 16px;
  right: 15px;
  opacity: 0.4;
  &:hover,
  &:focus {
    stroke: #9dc888;
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
color: #fff;`

export const StyledWrapInputAuth = styled.div`
  position: relative;
`;