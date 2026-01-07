import { useNavigate } from "react-router-dom";
import "./MernService.css";
import BackToServices from "../components/BackToServices";

const PCBService = () => {
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
        {/* Back Button */}
        <BackToServices />

        <h1 className="mern-title">PCB Designing</h1>

        <p className="mern-subtitle">
          Designing professional printed circuit boards (PCBs) for electronics projects.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Do</h3>
            <ul>
              <li>PCB Schematic Design</li>
              <li>Multi-layer PCB Layouts</li>
              <li>Component Placement & Routing</li>
              <li>Prototyping & Testing</li>
              <li>Manufacturing-ready Gerber Files</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our Tools</h3>
            <ul>
              <li>Eagle – PCB Design</li>
              <li>KiCad – Open-source PCB Tool</li>
              <li>Altium Designer – Professional Layouts</li>
              <li>Fritzing – Prototyping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCBService;
