import { useState, type ReactNode } from "react";
import ThemeContext from "./ThemeContext";
import type { Theme } from "./ThemeContext"

type ThemeProviderProps = {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-vh-100 ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}>
        {children}
      </div>
    </ThemeContext.Provider>
      
  )
}

export default ThemeProvider;