import { useNavigate } from "react-router-dom";
import "./MernService.css"; // can use same styling

const PernService = () => {
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
      

        <h1 className="mern-title">PERN Stack Development</h1>
        <p className="mern-subtitle">
          Building scalable web applications using PostgreSQL, Express, React, and Node.js.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>Custom Web Applications</li>
              <li>Enterprise Dashboards</li>
              <li>E-commerce Platforms</li>
              <li>REST APIs & Backend Systems</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our PERN Tech Stack</h3>
            <ul>
              <li>PostgreSQL – Relational Database</li>
              <li>Express.js – Backend Framework</li>
              <li>React.js – Frontend Library</li>
              <li>Node.js – Server Environment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PernService;
