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
          <span className="hero-tag">
            Software • Hardware • Training
          </span>

          <h1 className="hero-title">
            Smart <span>Software</span> &
            <span> Hardware</span>
            <br />
            Solutions for Every Business
          </h1>

          <p className="hero-subtitle">
            We build modern software solutions, deliver reliable hardware
            services, and provide practical training programs that prepare
            students and professionals for real-world success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;