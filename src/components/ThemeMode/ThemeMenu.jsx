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
import { useDispatch } from "react-redux";

export const ThemeComponent = () => {
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();

  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);

  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  const handleLightThemeClick = () => {
    setTheme("light");
    setSelectedTheme("light");
    dispatch(changeThemeThunk("light"));
    toggleCustomOptionList();
  };

  const handleDarkThemeClick = () => {
    setTheme("dark");
    setSelectedTheme("dark");
    dispatch(changeThemeThunk("dark"));
    toggleCustomOptionList();
  };

  const handleVioletThemeClick = () => {
    setTheme("violet");
    setSelectedTheme("violet");
    dispatch(changeThemeThunk("violet"));
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
        <CustomOptionList open={isCustomOptionListOpen}>
          <CustomOption
            onClick={() => handleLightThemeClick()}
            selected={selectedTheme === "light"}
          >
            Light
          </CustomOption>

          <CustomOption
            onClick={() => handleDarkThemeClick()}
            selected={selectedTheme === "dark"}
          >
            Dark
          </CustomOption>

          <CustomOption
            onClick={() => handleVioletThemeClick("violet")}
            selected={selectedTheme === "violet"}
          >
            Violet
          </CustomOption>
        </CustomOptionList>
      </CustomSelect>
    </ThemeContainer>
  );
};
