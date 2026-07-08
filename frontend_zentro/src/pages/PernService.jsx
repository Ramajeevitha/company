import { useNavigate } from "react-router-dom";
import "./MernService.css"; 
import BackToServices from "../components/BackToServices";
import GradientBlinds from "../components/GradientBlinds";


const PernService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
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
      <div className="mern-overlay">
         <BackToServices />
      

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
