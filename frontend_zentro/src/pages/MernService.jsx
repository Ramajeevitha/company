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

        
        </div>
      </div>
    </section>
  );
};

export default MernService;