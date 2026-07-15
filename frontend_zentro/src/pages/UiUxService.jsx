import "./MernService.css";
import BackToServices from "../components/BackToServices";

import { useNavigate } from "react-router-dom";

const UiUxService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      <div className="mern-bg">
       
      </div>

      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/software" />
        </div>

        <h1 className="mern-title">UI / UX Designing</h1>

        <p className="mern-subtitle">
          We design beautiful, intuitive, and engaging digital experiences that
          make your website or application easy to use, visually appealing, and
          memorable for your audience.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Create</h3>
            <ul>
              <li>Clean and modern user interface designs</li>
              <li>User-friendly website and app layouts</li>
              <li>Wireframes and screen flow planning</li>
              <li>Interactive prototypes for better visualisation</li>
              <li>Design systems that keep your brand consistent</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our UI / UX Service</h3>
            <ul>
              <li>Designs focused on both beauty and usability</li>
              <li>Smooth user journeys that improve engagement</li>
              <li>Layouts built to increase trust and conversions</li>
              <li>Perfect balance of creativity and business purpose</li>
              <li>Ideal for websites, dashboards, apps, and digital products</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Want a Better Experience for Your Users?</h3>
          <p>
            We create thoughtful and visually attractive designs that help your
            audience enjoy every interaction with your brand, from first click
            to final action.
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

export default UiUxService;