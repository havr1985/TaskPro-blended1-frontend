import { SharedModal } from "../../shared/SharedModal/SharedModal";
import icons from "../../shared/images/icons.svg";
import { SharedModalBtn } from "../../shared/SharedModalBtn/SharedModalBtn";
import "./EditProfileModal.styled";
import {
  EyeIconSvg,
  InputsWrapper,
  ModalContentWrapper,
  ModalInput,
  PasswordInputWrapper,
  UserAvatar,
  UserAvatarButton,
  UserAvatarWrapper,
} from "./EditProfileModal.styled";
import { useState } from "react";
export const EditProfileModal = ({ isModalOpen, modalStateSwapper }) => {
  const [passwordType, setPasswordType] = useState("password");

  const changePasswordType = () => {
    setPasswordType((prevState) => {
      if (prevState === "password") return "text";
      return "password";
    });
  };

  return (
    <SharedModal
      modalIsOpen={isModalOpen}
      closeModal={modalStateSwapper}
      title={"Edit profile"}
    >
      <ModalContentWrapper>
        <UserAvatarWrapper>
          <UserAvatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAV7kqqSzzofyF1tUF2ZAgtjcbf6e5ICU-hQ&usqp=CAU"
            alt="12312"
          />
          <UserAvatarButton>+</UserAvatarButton>
        </UserAvatarWrapper>
        <InputsWrapper>
          <ModalInput placeholder="Fullname" type="text" />
          <ModalInput placeholder="Email" type="email" />
          <PasswordInputWrapper>
            <ModalInput placeholder="Password" type={passwordType} />
            <EyeIconSvg
              onClick={() => changePasswordType()}
              className=""
              width="22px"
              height="22px"
            >
              <use href={icons + "#icon-password-eye"}></use>
            </EyeIconSvg>
          </PasswordInputWrapper>
        </InputsWrapper>
        <SharedModalBtn>Send</SharedModalBtn>
      </ModalContentWrapper>
    </SharedModal>
  );
};
