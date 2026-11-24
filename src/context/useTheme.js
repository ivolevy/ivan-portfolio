import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  renderedTheme: "dark",
  isOverride: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
