import "./Team.css";

const Team = () => {
  return (
    <section className="team">
     

      {/* Overlay */}
      <div className="team-overlay">
        <h2 className="team-title">Our Team</h2>
        <p className="team-subtitle">
          A skilled team dedicated to building reliable, scalable, and modern
          digital solutions.
        </p>

        <div className="team-grid">
          <div className="team-card">
            <h3>Developers</h3>
            <p>
              Full‑stack developers experienced in MERN, backend systems, and
              scalable architectures.
            </p>
          </div>

          <div className="team-card">
            <h3>Designers</h3>
            <p>
              UI/UX designers focused on clean interfaces, usability, and modern
              design principles.
            </p>
          </div>

          <div className="team-card">
            <h3>Support Engineers</h3>
            <p>
              Technical experts providing system support, deployment, and
              long‑term maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;