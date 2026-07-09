import { useNavigate } from "react-router-dom";
import "./MernService.css";
import BackToServices from "../components/BackToServices";
import Plasma from "../components/Plasma";

const FrontendService = () => {
  const navigate = useNavigate();

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
        <h1 className="mern-title">Frontend Development</h1>
        <p className="mern-subtitle">
          Crafting visually stunning and responsive web interfaces that enhance
          user experience and engagement.
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
