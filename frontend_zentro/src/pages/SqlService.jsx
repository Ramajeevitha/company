import "./MernService.css";
import BackToServices from "../components/BackToServices";
import Plasma from "../components/Plasma";
import { useNavigate } from "react-router-dom";

const SqlService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      <div className="mern-bg">
        <Plasma
          color="#48cae4"
          speed={1}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={false}
        />
      </div>

      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/software" />
        </div>

        <h1 className="mern-title">Database Management</h1>

        <p className="mern-subtitle">
          We organise, manage, and optimise your business data so your website
          or application runs smoothly, securely, and efficiently as your
          business grows.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Create</h3>
            <ul>
              <li>Structured database systems for websites and applications</li>
              <li>Secure storage for customer, product, and business data</li>
              <li>Performance optimisation for faster data access</li>
              <li>Backup and recovery planning for business continuity</li>
              <li>Data organisation for long-term scalability</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our Database Service</h3>
            <ul>
              <li>Well-organised data structure for smooth performance</li>
              <li>Secure handling of important business information</li>
              <li>Optimised systems that reduce delays and slow loading</li>
              <li>Built to support future growth and larger data volumes</li>
              <li>Reliable foundation for websites, apps, and admin systems</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Need a Strong Data Foundation for Your Business?</h3>
          <p>
            We help businesses manage their data the right way — securely,
            efficiently, and with the structure needed to support modern
            websites, apps, and internal systems.
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

export default SqlService;