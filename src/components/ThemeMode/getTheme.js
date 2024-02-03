import modes from "./theme";

const getTheme = (mode) => {
  switch (mode) {
    case "light":
      return modes.lightTheme;
    case "dark":
      return modes.darkTheme;
    case "violet":
      return modes.violetTheme;

    default:
      return modes.lightTheme;
  }
};

export default getTheme;
