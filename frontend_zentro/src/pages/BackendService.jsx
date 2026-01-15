import "../pages/MernService.css"; // ✅ reuse existing CSS
import BackToServices from "../components/BackToServices";

const BackendService = () => {
  return (
    <section className="mern">
       <video
        className="mern-video"
        src="/vdoo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

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
              <li>Node.js & Express.js</li>
              <li>Django & Django REST Framework</li>
              <li>MongoDB, PostgreSQL, MySQL</li>
              <li>JWT & OAuth Security</li>
              <li>Docker & API Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendService;