import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-glow hero-glow-1"></div>
      <div className="hero-bg-glow hero-glow-2"></div>

      <div className="hero-container">
        {/* Logo + Company */}
        <div className="hero-top">
          <div className="hero-logo">
            <img src="/assets/uyaron_logo.png" alt="Uyaron Logo" />
          </div>

          <div className="hero-company">
            <h2 className="company-name">
              <span>Uyaron</span>
            </h2>

            <p className="company-tagline">
              Building Technology. Empowering Tomorrow.
            </p>

            <span className="hero-tag">Software • Hardware • Training</span>
          </div>
        </div>

        {/* Main Content */}

        <div className="hero-main">
          <h1 className="hero-title">
            Smart <span>Software</span> & <span>Hardware</span>
            <br />
            Solutions for Every Business
          </h1>

          <p className="hero-subtitle">
            We provide innovative software solutions, reliable hardware services
            and industry-focused training that empower businesses, students and
            professionals to achieve more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
