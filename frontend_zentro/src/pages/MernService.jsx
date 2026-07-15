import "./MernService.css";
import BackToServices from "../components/BackToServices";

import { useNavigate } from "react-router-dom";

const MernService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      <div className="mern-bg">
       
      </div>

      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/software" />
        </div>

        <h1 className="mern-title">Website Development</h1>

        <p className="mern-subtitle">
          We create modern, fast, and visually stunning websites that help your
          business stand out, build trust, and turn visitors into customers.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Create</h3>
            <ul>
              <li>Professional business websites</li>
              <li>Service-based company websites</li>
              <li>Portfolio and personal brand websites</li>
              <li>E-commerce and product showcase websites</li>
              <li>Custom web platforms tailored to your business goals</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our Website Development</h3>
            <ul>
              <li>Clean, modern, and premium-looking design</li>
              <li>Mobile-friendly layouts for all screen sizes</li>
              <li>Fast-loading pages for a smooth user experience</li>
              <li>Easy navigation that keeps visitors engaged</li>
              <li>Built to strengthen your brand and increase enquiries</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Ready to Build Your Website?</h3>
          <p>
            Whether you need a business website, portfolio, landing page, or a
            complete custom web solution, we’re here to bring your ideas to
            life.
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

export default MernService;