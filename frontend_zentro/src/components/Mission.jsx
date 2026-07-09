import "./Mission.css";


const Mission = () => {
  return (
    <section className="mission" id="mission">
      <video
        className="team-video"
        src="/vdoo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="mission-container">
        <h2 className="mission-title">Our Mission</h2>

        <p className="mission-text">
          Our mission is to empower businesses and learners through innovative
          web solutions, practical technology training, and reliable digital
          experiences that create long-term growth, skills, and success.
        </p>

        <div className="mission-points">
          <div className="mission-card">
            Deliver high-quality web solutions tailored for businesses and startups.
          </div>

          <div className="mission-card">
            Provide practical courses and hands-on learning in modern technologies.
          </div>

         

          <div className="mission-card">
            Build long-term partnerships by supporting both client success and student growth.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;