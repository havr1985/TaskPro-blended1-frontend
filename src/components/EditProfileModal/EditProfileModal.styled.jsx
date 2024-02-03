import styled from "styled-components";

export const UserAvatar = styled.img`
  height: 68px;
  width: 68px;
  border-radius: 8px;
`;

export const UserAvatarLabel = styled.label`
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
  text-align: center;
`;

export const UserAvatarWrapper = styled.form`
  position: relative;
`;
export const UserAvatarInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;
// export const UserAvatarInputWrapper = styled.div`
// display: ;
// `;

export const ModalContentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  overflow-x: hidden;
`;

export const ModalInput = styled.input`
  width: 100%;
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
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const EyeIconSvg = styled.svg`
  position: absolute;
  right: 18px;
  top: 14px;
  fill: white;
`;
export const PasswordInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;
