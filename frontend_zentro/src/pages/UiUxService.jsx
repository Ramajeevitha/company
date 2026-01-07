import { useNavigate } from "react-router-dom";
import "./MernService.css"; 
import BackToServices from "../components/BackToServices";


const UiUxService = () => {
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
      <h1 className="mern-title">UI / UX Designing</h1>

      
        <p className="mern-subtitle">
          Crafting intuitive and engaging user experiences with modern design
          principles for web and mobile applications.
        </p>

     
        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>User Interface (UI) Design</li>
              <li>User Experience (UX) Optimization</li>
              <li>Wireframes & Prototypes</li>
              <li>Mobile & Web App Design</li>
              <li>Interactive Design Systems</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our UI/UX Tools</h3>
            <ul>
              <li>Figma – UI/UX Design & Prototyping</li>
              <li>Adobe Illustrator – Vector Graphics</li>
              <li>Adobe Photoshop – Image Editing & Mockups</li>
              <li>Framer – Interactive Prototypes</li>
              <li>Canva – Quick Designs & Marketing Assets</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUxService; 
