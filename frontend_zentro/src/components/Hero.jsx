import React from "react";
import "../components/Hero.css";
import zentroLogo from "../assets/zentro.png";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero">
     

      <img src={zentroLogo} alt="Hero Logo" className="hero-image" />

      <h1>Transform Ideas Into Reality</h1>
      <p>
        Web & Mobile Apps • Cloud Solutions • AI & ML • UI/UX Innovation • IoT • DevOps
      </p>

      <button onClick={scrollToServices}>
        Let’s Build Together
      </button>
    </section>
  );
};

export default Hero;