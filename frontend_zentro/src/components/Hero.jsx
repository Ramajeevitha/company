import React from "react";
import "../components/Hero.css";
import zentroLogo from "../assets/zentro.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-glow hero-glow-1"></div>
      <div className="hero-bg-glow hero-glow-2"></div>

      <div className="hero-container">
        <div className="hero-image-wrap">
          <img src={zentroLogo} alt="Zentro" className="hero-image" />
        </div>
      
        <div className="hero-content">
          <h1 className="hero-title">
            Build Powerful <span>Web Solutions</span> <br />
            and Learn with <span>Zentro</span>
          </h1>

          <p className="hero-subtitle">
            We help businesses grow with modern websites, mobile apps, UI/UX,
            backend systems, cloud-ready solutions, and practical tech courses
            designed for students, freshers, and teams.
          </p>
        </div>

      
        
      </div>
    </section>
  );
};

export default Hero;