import "./MernService.css";
import BackToServices from "../components/BackToServices";

import { useNavigate } from "react-router-dom";

const FrontendService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      <div className="mern-bg">
      
      </div>

      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/software" />
        </div>

        <h1 className="mern-title">Frontend Development</h1>

        <p className="mern-subtitle">
          We create visually impressive, responsive, and user-friendly website
          interfaces that make your brand look modern and keep visitors engaged.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Create</h3>
            <ul>
              <li>Modern website pages with clean and attractive layouts</li>
              <li>Responsive designs for mobile, tablet, and desktop</li>
              <li>Landing pages that turn visitors into customers</li>
              <li>Interactive sections for better user engagement</li>
              <li>Fast-loading pages for smooth browsing experience</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our Frontend Service</h3>
            <ul>
              <li>Beautiful and professional design that reflects your brand</li>
              <li>Mobile-friendly layouts built for today’s users</li>
              <li>Easy-to-use interfaces that improve customer experience</li>
              <li>Clean page structure focused on readability and conversion</li>
              <li>Perfect for business websites, portfolios, and service pages</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Ready to Build a Stunning Website Interface?</h3>
          <p>
            Whether you need a landing page, business website, portfolio, or a
            complete modern frontend experience, we’re here to create something
            that looks premium and performs beautifully.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default FrontendService;