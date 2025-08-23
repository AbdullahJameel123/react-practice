import { useState } from "react";
import ThemeContext, { type Theme } from "./contex/ThemeContext";
import ThemeToggler from "./contex/ThemeToggler";
import ThemedCard from "./components/ThemedCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-vh-100 p-5 ${
          theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <div className="container">
          <h1 className="mb-4">React Theme Toggle using Bootstrap</h1>
          <ThemeToggler />
          <ThemedCard />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;