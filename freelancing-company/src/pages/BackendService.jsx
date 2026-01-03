import { useNavigate } from "react-router-dom";
import "./MernService.css";

const BackendService = () => {
  const navigate = useNavigate();

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
        
        <h1 className="mern-title">Backend Development</h1>
        <p className="mern-subtitle">
          Building robust, scalable, and secure server-side applications that power your web and mobile solutions.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>RESTful APIs & Backend Systems</li>
              <li>Authentication & Authorization Modules</li>
              <li>Database Integration & Management</li>
              <li>Microservices Architecture</li>
              <li>Server-Side Rendering & Logic</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our Backend Tech Stack</h3>
            <ul>
              <li>Node.js – Server Environment</li>
              <li>Express.js – Backend Framework</li>
              <li>Python & Django – Optional Frameworks</li>
              <li>MongoDB / PostgreSQL / MySQL – Databases</li>
              <li>REST API & GraphQL – APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendService; 
