import { createContext } from "react";

const ThemeContext = createContext(
  document.documentElement.getAttribute("data-theme")
);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
