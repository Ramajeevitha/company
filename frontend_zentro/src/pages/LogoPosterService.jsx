import "./MernService.css";
import BackToServices from "../components/BackToServices";

import { useNavigate } from "react-router-dom";

const LogoPosterService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      {/* Background */}
      <div className="mern-bg">
        
      </div>

      {/* Content */}
      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/software" />
        </div>

        <h1 className="mern-title">Logo & Poster Designing</h1>

        <p className="mern-subtitle">
          We create eye-catching logos and impactful poster designs that give
          your brand a strong identity, improve visibility, and leave a lasting
          impression on your audience.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Design</h3>
            <ul>
              <li>Custom Business Logos</li>
              <li>Brand Identity & Visual Concepts</li>
              <li>Marketing Posters & Promotional Posters</li>
              <li>Event Posters & Product Launch Creatives</li>
              <li>Social Media Branding Designs</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our Designs</h3>
            <ul>
              <li>Creative visuals that make your brand stand out</li>
              <li>Professional and premium-looking design style</li>
              <li>Designed to match your business identity and audience</li>
              <li>Perfect for digital promotions, branding, and print use</li>
              <li>Focused on making your brand memorable and impactful</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Need a Logo or Poster for Your Brand?</h3>
          <p>
            Whether you're launching a new business, promoting an event, or
            building a stronger brand presence, we design visuals that look
            professional and attract attention.
          </p>

     
        </div>
      </div>
    </section>
  );
};

export default LogoPosterService;
