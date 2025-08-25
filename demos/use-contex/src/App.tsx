import { useState } from "react";
import ThemeContext, { type Theme } from "./context/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";
import ThemedCard from "./components/ThemedCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/Box";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-vh-100 p-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
      >
        <div className="container">
          <h1 className="mb-4">React Theme Toggle using Bootstrap</h1>
          <ThemeToggler />
          <Box>Hello World</Box>
          <Box>
            <ThemedCard />
          </Box>

          <Box>
            <table className={`table ${theme === "dark" ? "table-dark" : "table-light"}`}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@social</td>
                </tr>
              </tbody>
            </table>
          </Box>

          <Box>
            <div className={`card ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
              <div className="card-header">
                Featured
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </Box>

        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;