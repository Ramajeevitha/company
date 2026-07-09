import "../pages/MernService.css";
import BackToServices from "../components/BackToServices";
import Plasma from "../components/Plasma";

const BackendService = () => {
  return (
    <section className="mern">
      <div className="mern-bg">
        <Plasma
          color="#48cae4"
          speed={1}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={false}
        />
      </div>

      <div className="mern-overlay">
        <BackToServices />

        <h1 className="mern-title">Backend Development</h1>

        <p className="mern-subtitle">
          Building secure, scalable, and high-performance server-side systems
          that power modern applications.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>REST & GraphQL APIs</li>
              <li>Authentication & Authorization Systems</li>
              <li>Business Logic & Data Processing</li>
              <li>Microservices Architectures</li>
              <li>Cloud-ready Backend Solutions</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Backend Technologies</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Django & Django REST Framework</li>
              <li>MongoDB, PostgreSQL, MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendService;
