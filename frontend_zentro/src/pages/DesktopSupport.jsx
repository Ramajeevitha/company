import { useNavigate } from "react-router-dom";
import "./MernService.css";
import BackToServices from "../components/BackToServices";
import GradientBlinds from "../components/GradientBlinds";


const DesktopSupport = () => {
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
