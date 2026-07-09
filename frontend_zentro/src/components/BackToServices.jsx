import { useNavigate } from "react-router-dom";
import "./BackToServices.css";

const BackToServices = () => {
  const navigate = useNavigate();

  return (
    <button
      className="back-to-services"
      onClick={() => navigate("/", { state: { scrollTo: "services" } })}
    >
      ←
    </button>
  );
};

export default BackToServices;