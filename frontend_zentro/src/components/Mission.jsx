import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission" id="mission">
      <div className="mission-container">
        <h2 className="mission-title">Our Mission</h2>

        <p className="mission-text">
          Our mission is to empower businesses and learners through innovative
          web solutions, practical training, and reliable digital experiences
          that create long-term growth and success.
        </p>

        <div className="mission-points">
          <div className="mission-card">
            Deliver high-quality, scalable web and software solutions.
          </div>

          <div className="mission-card">
            Provide practical, industry-focused courses and technical training.
          </div>

          <div className="mission-card">
            Build long-term partnerships through trust, quality, and support.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;