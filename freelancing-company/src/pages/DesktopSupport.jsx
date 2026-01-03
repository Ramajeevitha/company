import { useNavigate } from "react-router-dom";
import "./MernService.css";

const DesktopSupport = () => {
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
       
        <h1 className="mern-title">Desktop Support</h1>

        <p className="mern-subtitle">
          Maintaining and troubleshooting desktop environments for optimal performance.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Do</h3>
            <ul>
              <li>Desktop Installation & Setup</li>
              <li>Hardware & Peripheral Support</li>
              <li>Operating System Troubleshooting</li>
              <li>Software Configuration</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our Tools</h3>
            <ul>
              <li>Windows / Mac OS Utilities</li>
              <li>Remote Assistance Tools</li>
              <li>Hardware Diagnostic Tools</li>
              <li>Security & Antivirus Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopSupport;
