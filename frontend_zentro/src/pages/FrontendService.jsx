import { useNavigate } from "react-router-dom";
import "./MernService.css"; 
import BackToServices from "../components/BackToServices";


const FrontendService = () => {
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
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React.js – Frontend Library</li>
              <li>Redux / Context API – State Management</li>
              <li>Tailwind CSS / Bootstrap – Styling Frameworks</li>
              <li>Next.js – Optional Server-Side Rendering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendService;
