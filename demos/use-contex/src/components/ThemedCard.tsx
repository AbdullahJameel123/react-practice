import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemedCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`card ${
        theme === "dark" ? "bg-secondary text-white" : "bg-white text-dark"
      }`}
    >
      <div className="card-body">
        <h5 className="card-title">Themed Card</h5>
        <p className="card-text">
          This card changes appearance based on the current Bootstrap theme!
        </p>
      </div>
    </div>
  );
}

export default ThemedCard;