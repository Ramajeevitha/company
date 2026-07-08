import { useNavigate } from "react-router-dom";
import "./MernService.css"; 
import BackToServices from "../components/BackToServices";
import GradientBlinds from "../components/GradientBlinds";


const SqlService = () => {
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
      
        <h1 className="mern-title">SQL & Database Management</h1>

 
        <p className="mern-subtitle">
          We manage, optimize, and maintain databases for web and mobile applications to ensure security, scalability, and high performance.
        </p>

  
        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>Database Design & Architecture</li>
              <li>Data Modeling & Normalization</li>
              <li>Performance Optimization</li>
              <li>Query Design & Stored Procedures</li>
              <li>Data Migration & Backup Solutions</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our Tools & Tech Stack</h3>
            <ul>
              <li>MySQL – Relational Database</li>
              <li>PostgreSQL – Relational & Advanced Queries</li>
              <li>MongoDB – NoSQL Database</li>
              <li>SQL Server – Enterprise Database Solutions</li>
              <li>pgAdmin / phpMyAdmin – Database Management Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SqlService; 
