import "./About.css";
import Team from "./Team";
import Mission from "./Mission";
import Contact from "./Contact";

const About = () => {
  return (
    <>
      <section className="about">
       
        <div className="about-overlay">
          <h2 className="about-title">About Us</h2>

          <p className="about-subtitle">
            We are a technology‑driven team delivering reliable digital solutions
            for businesses and individuals.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Who We Are</h3>
              <p>
                We are a passionate team of developers, designers, and technical
                experts specializing in full‑stack development, UI/UX design,
                and IT support services.
              </p>
            </div>

            <div className="about-card">
              <h3>What We Do</h3>
              <p>
                From scalable web applications to enterprise support systems,
                we build secure, high‑performance solutions tailored to your
                needs.
              </p>
            </div>

            <div className="about-card">
              <h3>Why Choose Us</h3>
              <p>
                We focus on quality, performance, and long‑term reliability
                while maintaining clear communication and timely delivery.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div>
              <h4>50+</h4>
              <span>Projects</span>
            </div>
            <div>
              <h4>20+</h4>
              <span>Technologies</span>
            </div>
            <div>
              <h4>100%</h4>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <Mission />
      <Team />
    
    </>
  );
};

export default About;
