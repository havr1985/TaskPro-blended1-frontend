import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthUserData } from "../redux/Auth/authSelectors";

const useTheme = () => {
  const initialTheme = useSelector(selectAuthUserData);
  const [theme, setTheme] = useState(initialTheme.theme || "dark");

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
