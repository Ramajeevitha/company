import { useNavigate } from "react-router-dom";
import "./MernService.css"; 
import BackToServices from "../components/BackToServices";
import GradientBlinds from "../components/GradientBlinds";


const FrontendService = () => {
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
        <h1 className="mern-title">Frontend Development</h1>
        <p className="mern-subtitle">
          Crafting visually stunning and responsive web interfaces that enhance user experience and engagement.
        </p>


        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>Responsive Web Pages & Websites</li>
              <li>Single Page Applications (SPA)</li>
              <li>Interactive UI Components</li>
              <li>Landing Pages & Marketing Sites</li>
              <li>Performance Optimized Interfaces</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our Frontend Tech Stack</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js – Frontend Library</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendService;
