import "../pages/MernService.css";
import BackToServices from "../components/BackToServices";
import GradientBlinds from "../components/GradientBlinds";

const BackendService = () => {
  return (
    <section className="mern">
      <div className="mern-bg">
        <GradientBlinds
          gradientColors={["#00c6ff", "#0072ff"]}
          angle={20}
          noise={0.15}
          blindCount={16}
          blindMinWidth={60}
          spotlightRadius={0.45}
          spotlightSoftness={1.2}
          spotlightOpacity={1.1}
          mouseDampening={0.08}
          distortAmount={2.2}
          shineDirection="left"
          mixBlendMode="lighten"
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