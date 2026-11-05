import React, { useEffect, useState } from "react";
import { ThemeContext } from "./theme";
import type { Theme } from "./theme";

const prefersDark = (): boolean => window.matchMedia("(prefers-color-scheme: dark)").matches;

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => (prefersDark() ? "dark" : "light"));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const changeTheme = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", changeTheme);

    return () => {
      mediaQuery.removeEventListener("change", changeTheme);
    };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
