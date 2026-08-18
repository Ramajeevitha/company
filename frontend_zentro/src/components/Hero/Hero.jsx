import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-container">
   
        <div className="hero-top" data-aos="fade-down">
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



        <div className="hero-main" data-aos="fade-up" data-aos-delay="200">
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
