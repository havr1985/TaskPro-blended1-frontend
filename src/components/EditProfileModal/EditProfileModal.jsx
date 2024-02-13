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
  UserIcon,
} from "./EditProfileModal.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAvatarThunk,
  userUpdateThunk,
} from "../../redux/Auth/authOperation";
import { selectAuthUserData } from "../../redux/Auth/authSelectors";

import sprite from "../../shared/images/icons.svg";
import { toast } from "react-toastify";

export const EditProfileModal = ({ isModalOpen, modalStateSwapper }) => {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const { email, username, avatarURL } = useSelector(selectAuthUserData);

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

    if (userEditData[2].value !== "" && userEditData[2].value.length < 8) {
      if (userEditData[2].value.split("").includes("")) {
        return toast.error("Wrong password, it must be without spaces");
      }

      return toast.error("Wrong password, it must be at least 8 symbols!");
    }
    if (userEditData[2].value !== "" && userEditData[2].value.length > 8) {
      if (userEditData[2].value.split("").includes(" ")) {
        return toast.error("Wrong password, it must be without spaces");
      }
    }

    const filteredUserData = userEditData.filter(({ value }) => value);
    filteredUserData.forEach(({ name, value }) => (editDataObj[name] = value));
    dispatch(userUpdateThunk(editDataObj));
    modalStateSwapper();
  };

  return (
    <SharedModal
      modalIsOpen={isModalOpen}
      closeModal={modalStateSwapper}
      title={"Edit profile"}
      maxWidth={"400px"}
    >
      <UserAvatarWrapper>
        {avatarURL ? (
          <UserAvatar
            src={
              avatarURL
                ? avatarURL
                : "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            }
            alt="avatar"
          />
        ) : (
          <div>
            <UserIcon className="iconLightning" width="12px" height="16px">
              <use href={`${sprite}#icon-user`}></use>
            </UserIcon>
          </div>
        )}
        <UserAvatarInput onChange={changeAvatar} type="file" id="input__file" />
        <UserAvatarLabel htmlFor="input__file">+</UserAvatarLabel>
      </UserAvatarWrapper>
      <ModalContentWrapper
        autoComplete="false"
        onSubmit={(e) => onSubmitHandle(e)}
      >
        <InputsWrapper>
          <ModalInput
            autoComplete="off"
            name="username"
            minLength={2}
            maxLength={32}
            placeholder="Fullname"
            defaultValue={username ? username : null}
            type="text"
          />
          <ModalInput
            autoComplete="off"
            name="email"
            placeholder="Email"
            defaultValue={email ? email : null}
            type="email"
          />
          <PasswordInputWrapper>
            <ModalInput
              name="password"
              placeholder="Password"
              type={passwordType}
              autoComplete="off"
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
