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
  UserAvatarInput,
  UserAvatarLabel,
  UserAvatarWrapper,
} from "./EditProfileModal.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeAvatarThunk } from "../../redux/Auth/authOperation";

export const EditProfileModal = ({ isModalOpen, modalStateSwapper }) => {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");

  const changePasswordType = () => {
    setPasswordType((prevState) => {
      return prevState === "password" ? "text" : "password";
    });
  };

  const changeAvatar = (e) => {
    const newAvatar = e.target.files[0];
    dispatch(changeAvatarThunk(newAvatar));
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    const editDataObj = {};
    const userEditData = [...e.target.elements].slice(0, 3);
    const filteredUserData = userEditData.filter(({ value }) => value);
    filteredUserData.forEach(({ name, value }) => (editDataObj[name] = value));
  };

  return (
    <SharedModal
      modalIsOpen={isModalOpen}
      closeModal={modalStateSwapper}
      title={"Edit profile"}
      maxWidth={"400px"}
    >
      <ModalContentWrapper onSubmit={(e) => onSubmitHandle(e)}>
        <UserAvatarWrapper>
          <UserAvatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAV7kqqSzzofyF1tUF2ZAgtjcbf6e5ICU-hQ&usqp=CAU"
            alt="avatar"
          />

          <UserAvatarInput
            onChange={changeAvatar}
            type="file"
            id="input__file"
          />
          <UserAvatarLabel htmlFor="input__file">+</UserAvatarLabel>
        </UserAvatarWrapper>

        <InputsWrapper>
          <ModalInput name="username" placeholder="Fullname" type="text" />
          <ModalInput name="email" placeholder="Email" type="email" />
          <PasswordInputWrapper>
            <ModalInput
              name="password"
              placeholder="Password"
              type={passwordType}
            />
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
