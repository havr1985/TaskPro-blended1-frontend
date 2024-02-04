import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthTheme } from "../redux/Auth/authSelectors";

const useTheme = () => {
  const initialTheme = useSelector(selectAuthTheme);
  const [theme, setTheme] = useState(initialTheme || "dark");

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
