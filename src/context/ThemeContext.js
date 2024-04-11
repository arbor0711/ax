import React, { createContext, useState, useContext, useEffect } from "react";

const defaultState = {
  theme: "",
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultState);

// Getting dark mode information from OS
const userPrefersDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(userPrefersDarkMode ? "dark" : "light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
export { ThemeProvider, useTheme };
