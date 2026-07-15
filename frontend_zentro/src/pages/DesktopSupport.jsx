import { useNavigate } from "react-router-dom";
import "./MernService.css";
import BackToServices from "../components/BackToServices";


const DesktopSupport = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      <div className="mern-bg">
       
      </div>

      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/hardware" />
        </div>

        <h1 className="mern-title">Desktop Support</h1>

        <p className="mern-subtitle">
          We provide dependable desktop support services to keep your computers,
          workstations, and office systems running efficiently, securely, and
          without interruption.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Offer</h3>
            <ul>
              <li>Desktop and workstation setup for offices and businesses</li>
              <li>Performance troubleshooting and system issue resolution</li>
              <li>Operating system setup, updates, and maintenance support</li>
              <li>Peripheral setup including printers and connected devices</li>
              <li>Routine support to keep systems stable and productive</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our Desktop Support</h3>
            <ul>
              <li>Fast issue resolution to reduce downtime</li>
              <li>Reliable support for day-to-day desktop problems</li>
              <li>Improved system performance and smooth operation</li>
              <li>Support tailored for office, business, and personal use</li>
              <li>Professional assistance that keeps your workflow uninterrupted</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Need Professional Desktop Support?</h3>
          <p>
            Whether you need help setting up office systems, solving desktop
            issues, improving performance, or maintaining day-to-day computer
            operations, we’re here to support your business with reliable
            solutions.
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

export default DesktopSupport;