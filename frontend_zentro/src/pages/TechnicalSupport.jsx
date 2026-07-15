import { useNavigate } from "react-router-dom";
import "./MernService.css";
import BackToServices from "../components/BackToServices";


const TechnicalSupport = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      <div className="mern-bg">
       
      </div>

      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/hardware" />
        </div>

        <h1 className="mern-title">Technical Support</h1>

        <p className="mern-subtitle">
          We provide reliable technical support services to keep your systems
          running smoothly, solve day-to-day issues quickly, and ensure your
          business operations stay uninterrupted.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Offer</h3>
            <ul>
              <li>Quick troubleshooting for system and device issues</li>
              <li>Setup and support for office computers and workstations</li>
              <li>Assistance with software errors and performance problems</li>
              <li>Network and connectivity issue resolution</li>
              <li>Ongoing support to maintain smooth business operations</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our Technical Support</h3>
            <ul>
              <li>Fast response to reduce downtime and disruptions</li>
              <li>Reliable support for both individual and business needs</li>
              <li>Practical solutions tailored to your working environment</li>
              <li>Improved system performance, stability, and efficiency</li>
              <li>Support designed to keep your team productive and stress-free</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Need Reliable Technical Support?</h3>
          <p>
            Whether you need help with system issues, office setup, device
            troubleshooting, or ongoing technical assistance, we’re here to make
            your work easier and your systems more dependable.
          </p>

        
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupport;