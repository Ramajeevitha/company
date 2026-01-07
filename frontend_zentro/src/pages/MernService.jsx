import "./MernService.css";
import BackToServices from "../components/BackToServices";

const MernService = () => {
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

        <h1 className="mern-title">MERN Stack Development</h1>

        <p className="mern-subtitle">
          Building scalable, secure, and high-performance web applications using
          modern JavaScript technologies.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>Custom Business Web Applications</li>
              <li>Enterprise Dashboards</li>
              <li>E-commerce Platforms</li>
              <li>REST APIs & Backend Systems</li>
              <li>Real-time Applications</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our MERN Tech Stack</h3>
            <ul>
              <li>MongoDB – NoSQL Database</li>
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

export default MernService;
