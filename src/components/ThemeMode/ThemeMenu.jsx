import { useState } from "react";
import { changeThemeThunk } from "../../redux/Auth/authOperation";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthUserData } from "../../redux/Auth/authSelectors";
import {
  ThemeButton,
  ThemeButtonItem,
  ThemeButtonMenu,
  ThemeContainer,
} from "./ThemeMenu.styled";
import icons from "../../shared/images/icons.svg";

export const ThemeComponent = () => {
  const [arrowBtn, setArrowBtn] = useState(null);
  const open = Boolean(arrowBtn);
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUserData);

  const [currentTheme, setCurrentTheme] = useState(user.theme);

  const handleThemeChange = async (theme) => {
    try {
      dispatch(changeThemeThunk(theme));
      setCurrentTheme(theme);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleClick = (event) => {
    setArrowBtn(event.currentTarget);
  };
  const handleClose = () => {
    setArrowBtn(null);
  };

  return (
    <ThemeContainer>
      <ThemeButton id="theme-button" onClick={handleClick}>
        Theme
        <svg aria-label="question with round" width="16px" height="16px">
          <use href={icons + "#icon-chevron-down"}></use>
        </svg>
      </ThemeButton>
      <ThemeButtonMenu
        id="theme-menu"
        arrowBtn={arrowBtn}
        selected={currentTheme === user.theme}
        open={open}
        onClose={handleClose}
      >
        <ThemeButtonItem onClick={() => handleThemeChange("light")}>
          Light
        </ThemeButtonItem>
        <ThemeButtonItem onClick={() => handleThemeChange("dark")}>
          Dark
        </ThemeButtonItem>
        <ThemeButtonItem onClick={() => handleThemeChange("violet")}>
          Violet
        </ThemeButtonItem>
      </ThemeButtonMenu>
    </ThemeContainer>
  );
};
