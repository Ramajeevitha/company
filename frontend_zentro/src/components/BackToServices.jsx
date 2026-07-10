import { useNavigate } from "react-router-dom";
import "./BackToServices.css";

const BackToServices = ({ to = "/services" }) => {
  const navigate = useNavigate();

  return (
    <button
      className="back-to-services"
      onClick={() => navigate(to)}
      aria-label="Go back"
      title="Go back"
    >
      <span className="back-arrow">←</span>
    </button>
  );
};

export default BackToServices;