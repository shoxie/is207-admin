import { createContext, useState } from "react";
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("");
    const [showSideBar, setShowSideBar] = useState(true)
  const toggleTheme = () => {   
    setTheme(theme === "dark" ? "" : "dark");
  };
  const value = { theme, toggleTheme, showSideBar, setShowSideBar };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProvider };
