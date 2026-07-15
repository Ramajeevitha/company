import { useNavigate } from "react-router-dom";
import "./MernService.css";
import BackToServices from "../components/BackToServices";


const PCBService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      <div className="mern-bg">
       
      </div>

      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/hardware" />
        </div>

        <h1 className="mern-title">PCB Design & Development</h1>

        <p className="mern-subtitle">
          We design high-quality PCB solutions for electronic products,
          prototypes, and custom hardware projects with a strong focus on
          performance, reliability, and real-world usability.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Create</h3>
            <ul>
              <li>Custom PCB layouts for electronic devices and systems</li>
              <li>Single-layer and multi-layer board design solutions</li>
              <li>Prototype-ready PCB designs for new product development</li>
              <li>Circuit board solutions tailored to project requirements</li>
              <li>Design support for embedded and hardware-based applications</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our PCB Services</h3>
            <ul>
              <li>Precision-focused design for reliable hardware performance</li>
              <li>Custom solutions built around your product needs</li>
              <li>Clean and efficient layouts for better functionality</li>
              <li>Suitable for prototypes, products, and specialized systems</li>
              <li>Support from concept stage to implementation-ready design</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Looking for PCB Design Support?</h3>
          <p>
            Whether you’re building a new electronic product, developing a
            prototype, or need a custom PCB solution for your hardware project,
            we can help turn your concept into a practical and production-ready
            design.
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

export default PCBService;