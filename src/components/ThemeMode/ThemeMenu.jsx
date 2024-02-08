import { useState } from "react";
import {
  CustomOption,
  CustomOptionList,
  CustomSelect,
  IconDown,
  TheamBtn,
  ThemeContainer,
} from "./ThemeMenu.styled";
import icons from "../../shared/images/icons.svg";
import useTheme from "../../hooks/useTheme";
import { changeThemeThunk } from "../../redux/Auth/authOperation";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUserData } from "../../redux/Auth/authSelectors";

export const ThemeComponent = () => {
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();
  const user = useSelector(selectAuthUserData);
  const [isThemeListOpen, setIsThemeListOpen] = useState(false);

  const toggleCustomOptionList = () => {
    setIsThemeListOpen(!isThemeListOpen);
  };

  const handleLightThemeClick = () => {
    setTheme("light");

    dispatch(changeThemeThunk({ theme: "light" }));
    toggleCustomOptionList();
  };

  const handleDarkThemeClick = () => {
    setTheme("dark");

    dispatch(changeThemeThunk({ theme: "dark" }));
    toggleCustomOptionList();
  };

  const handleVioletThemeClick = () => {
    setTheme("violet");

    dispatch(changeThemeThunk({ theme: "violet" }));
    toggleCustomOptionList();
  };

  return (
    <ThemeContainer>
      <TheamBtn onClick={toggleCustomOptionList}>
        Theme
        <IconDown>
          <use href={icons + "#icon-chevron-down"}></use>
        </IconDown>
      </TheamBtn>

      <CustomSelect theme={theme}>
        <CustomOptionList open={isThemeListOpen}>
          <CustomOption
            onClick={() => handleLightThemeClick()}
            selected={user.theme === "light"}
          >
            Light
          </CustomOption>

          <CustomOption
            onClick={() => handleDarkThemeClick()}
            selected={user.theme === "dark"}
          >
            Dark
          </CustomOption>

          <CustomOption
            onClick={() => handleVioletThemeClick("violet")}
            selected={user.theme === "violet"}
          >
            Violet
          </CustomOption>
        </CustomOptionList>
      </CustomSelect>
    </ThemeContainer>
  );
};
