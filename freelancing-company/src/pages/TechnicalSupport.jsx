import { useNavigate } from "react-router-dom";
import "./MernService.css";

const TechnicalSupport = () => {
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
        
        <h1 className="mern-title">Technical Support</h1>

        <p className="mern-subtitle">
          Providing efficient technical assistance to resolve software, hardware, and network issues.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Do</h3>
            <ul>
              <li>Software Installation & Troubleshooting</li>
              <li>Hardware Setup & Repair</li>
              <li>Network Configuration & Support</li>
              <li>System Optimization</li>
              <li>Remote Assistance & Monitoring</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our Tools</h3>
            <ul>
              <li>TeamViewer / AnyDesk – Remote Support</li>
              <li>Windows / Mac Utilities</li>
              <li>Network Monitoring Tools</li>
              <li>Diagnostic Software</li>
              <li>Ticketing & Reporting Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupport;
