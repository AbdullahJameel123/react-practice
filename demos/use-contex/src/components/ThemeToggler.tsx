import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`btn ${theme === "light" ? "btn-dark" : "btn-light"} mb-4`}
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

export default ThemeToggler;