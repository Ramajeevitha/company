import { useNavigate } from "react-router-dom";
import "./ServicesPage.css";
import BackToServices from "../components/BackToServices";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <section className="services-page">
      <div className="services-page-overlay">
      
        <BackToServices to="/" scrollTo="services" />

        <h1 className="services-page-title">Our Services</h1>
        <p className="services-page-subtitle">
          Choose the category you want to explore.
        </p>

        <div className="services-page-grid">
          <div className="services-page-card">
            <h3>Software Solutions</h3>
            <p>
              Web development, frontend, backend, MERN, PERN, UI/UX, databases,
              and more.
            </p>
            <button onClick={() => navigate("/services/software")}>
              Explore Software
            </button>
          </div>

          <div className="services-page-card">
            <h3>Hardware Solutions</h3>
            <p>
              Technical support, desktop support, PCB design, and IoT project
              services.
            </p>
            <button onClick={() => navigate("/services/hardware")}>
              Explore Hardware
            </button>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
