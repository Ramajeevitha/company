import "./Team.css";

const Team = () => {
  return (
    <section className="team">
      <div className="team-overlay">
        <h2 className="team-title">Our Team</h2>
        <p className="team-subtitle">
          A skilled team dedicated to delivering modern web solutions, technical
          training, and reliable digital support.
        </p>

        <div className="team-grid">
          <div className="team-card">
            <h3>Developers</h3>
            <p>
              Full-stack developers experienced in MERN, frontend, backend,
              databases, and scalable web application development.
            </p>
          </div>

          <div className="team-card">
            <h3>Trainers</h3>
            <p>
              Industry-focused trainers who provide practical courses in web
              development, programming, databases, and real-world project
              building.
            </p>
          </div>

          <div className="team-card">
            <h3>Support Engineers</h3>
            <p>
              Technical experts offering deployment support, troubleshooting,
              system maintenance, and long-term assistance for clients and
              learners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;