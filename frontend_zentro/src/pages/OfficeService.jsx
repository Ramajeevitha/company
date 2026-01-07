import { useNavigate } from "react-router-dom";
import "./MernService.css"; 
import BackToServices from "../components/BackToServices";


const OfficeService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      {/* Background Video */}
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
       <h1 className="mern-title">Word / Excel / PowerPoint</h1>

     
        <p className="mern-subtitle">
          Professional document creation, data analysis, and presentation design using Microsoft Office tools.
        </p>

    
        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>Word: Reports, Templates, Letters</li>
              <li>Excel: Data Analysis, Dashboards, Formulas</li>
              <li>PowerPoint: Presentation Slides, Pitches</li>
              <li>Automation using Macros & VBA</li>
              <li>Collaboration & Formatting Best Practices</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our Tools</h3>
            <ul>
              <li>Microsoft Word – Documents & Templates</li>
              <li>Microsoft Excel – Data Analysis & Dashboards</li>
              <li>Microsoft PowerPoint – Presentations & Pitches</li>
              <li>Google Docs / Sheets / Slides – Cloud Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeService;
