import styled from "styled-components";

export const UserAvatar = styled.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`;

export const UserAvatarButton = styled.button`
  cursor: pointer;
  height: 24px;
  width: 24px;
  background-color: #bedbb0;
  border-radius: 8px;
  outline: none;
  border: none;
  color: black;
  position: absolute;
  bottom: -12px;
  left: 22px;
  padding-top: 3px;
`;

export const UserAvatarWrapper = styled.div`
  position: relative;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
`;

export const ModalInput = styled.input`
  width: 400px;
  border-radius: 8px;
  border: 1px solid grey;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  background-color: transparent;
  outline: none;
  color: #fff;
  &:focus {
    border-color: #bedbb0;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 10px;
`;

export const EyeIconSvg = styled.svg`
  position: absolute;
  right: 18px;
  top: 14px;
  fill: white;
`;
export const PasswordInputWrapper = styled.div`
  position: relative;
`;
