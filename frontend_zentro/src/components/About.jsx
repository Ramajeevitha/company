import "./About.css";
import Team from "./Team";
import Mission from "./Mission";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-overlay">
          <h2 className="about-title">About Us</h2>

          <p className="about-subtitle">
            Zentro is a technology-driven company providing modern web solutions
            and industry-focused courses to help businesses grow and individuals
            build strong technical skills.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Who We Are</h3>
              <p>
                We are a passionate team of developers, designers, and technical
                mentors specializing in full-stack development, UI/UX design,
                IT support, and practical tech training.
              </p>
            </div>

            <div className="about-card">
              <h3>What We Do</h3>
              <p>
                We build reliable websites, web applications, and digital
                solutions for businesses while also offering courses and
                training programs in development, design, databases, and
                technical skills for students and professionals.
              </p>
            </div>

            <div className="about-card">
              <h3>Why Choose Us</h3>
              <p>
                We combine real-world project expertise with quality learning
                experiences, helping clients get scalable digital solutions and
                learners gain practical skills that matter in today’s tech
                industry.
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