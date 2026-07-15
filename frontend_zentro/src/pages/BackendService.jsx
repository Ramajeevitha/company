import "./MernService.css";
import BackToServices from "../components/BackToServices";

import { useNavigate } from "react-router-dom";

const BackendService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      <div className="mern-bg">
       
      </div>

      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/software" />
        </div>

        <h1 className="mern-title">Backend Development</h1>

        <p className="mern-subtitle">
          We build secure, scalable, and high-performance systems behind your
          website or application so everything runs smoothly, safely, and
          efficiently.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Create</h3>
            <ul>
              <li>Custom server-side systems for web applications</li>
              <li>Login, authentication, and user management features</li>
              <li>Business logic and data processing workflows</li>
              <li>Admin dashboards and internal management systems</li>
              <li>Reliable APIs to connect apps, websites, and services</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our Backend Service</h3>
            <ul>
              <li>Strong and secure architecture for long-term reliability</li>
              <li>Built to handle growth as your business expands</li>
              <li>Fast and optimized performance behind the scenes</li>
              <li>Clean structure for smooth integration with frontend systems</li>
              <li>Perfect for business websites, portals, and custom platforms</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Need a Powerful Backend for Your Platform?</h3>
          <p>
            From user systems and dashboards to advanced business workflows, we
            build backend solutions that keep your website or application
            running securely and efficiently.
          </p>

          <button
            onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
            style={{
              padding: "14px 28px",
              border: "none",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #48cae4, #7b61ff)",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "700",
              cursor: "pointer",
              marginTop: "20px",
              boxShadow: "0 12px 26px rgba(72, 202, 228, 0.24)",
              transition: "all 0.28s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px) scale(1.02)";
              e.target.style.boxShadow =
                "0 18px 34px rgba(72, 202, 228, 0.32)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow =
                "0 12px 26px rgba(72, 202, 228, 0.24)";
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default BackendService;