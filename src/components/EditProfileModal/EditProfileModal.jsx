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
import { useDispatch, useSelector } from "react-redux";
import {
  changeAvatarThunk,
  userUpdateThunk,
} from "../../redux/Auth/authOperation";
import { selectAuthUserData } from "../../redux/Auth/authSelectors";

export const EditProfileModal = ({ isModalOpen, modalStateSwapper }) => {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const user = useSelector(selectAuthUserData);
  console.log(user);

  const changePasswordType = () => {
    setPasswordType((prevState) => {
      return prevState === "password" ? "text" : "password";
    });
  };

  const changeAvatar = (e) => {
    const newAvatar = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", newAvatar);
    dispatch(changeAvatarThunk(formData));
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    const editDataObj = {};
    const userEditData = [...e.target.elements].slice(0, 3);
    const filteredUserData = userEditData.filter(({ value }) => value);
    filteredUserData.forEach(({ name, value }) => (editDataObj[name] = value));
    console.log(editDataObj);
    dispatch(userUpdateThunk(editDataObj));
  };

  return (
    <SharedModal
      modalIsOpen={isModalOpen}
      closeModal={modalStateSwapper}
      title={"Edit profile"}
      maxWidth={"400px"}
    >
      <ModalContentWrapper onSubmit={(e) => onSubmitHandle(e)}>
        {/* <UserAvatarWrapper>
          <UserAvatar
            src={
              user.avatarURL
                ? user.avatarURL
                : "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            }
            alt="avatar"
          />

          <UserAvatarInput
            onChange={changeAvatar}
            type="file"
            id="input__file"
          />
          <UserAvatarLabel htmlFor="input__file">+</UserAvatarLabel>
        </UserAvatarWrapper> */}

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
