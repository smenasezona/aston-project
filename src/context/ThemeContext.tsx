import { createContext, useContext } from "react";

interface ThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const theme = createContext<ThemeContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(theme);
  if (!context) {
    throw new Error("error")
  }
  return context;
};