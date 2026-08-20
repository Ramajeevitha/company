import { useNavigate } from "react-router-dom";
import "./PageNavigation.css";

const PageNavigation = ({ to = -1, text = "Back" }) => {
  const navigate = useNavigate();

  return (
    <div className="page-navigation-container">
      <button
        className="nav-btn back-btn"
        onClick={() => navigate(to)}
        aria-label={text}
      >
        <span>&#8592;</span> {text}
      </button>
    </div>
  );
};

export default PageNavigation;
