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
          Our mission is to empower businesses through innovative technology,
          scalable solutions, and reliable digital experiences that drive
          long‑term growth and success.
        </p>

        <div className="mission-points">
          <div className="mission-card">
            Deliver high‑quality, scalable software solutions.
          </div>

          <div className="mission-card">
            Focus on user‑centric design and performance.
          </div>

          <div className="mission-card">
            Build long‑term partnerships with our clients.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
