import { useNavigate } from "react-router-dom";
import "./MernService.css";
import BackToServices from "../components/BackToServices";
import GradientBlinds from "../components/GradientBlinds";


const IoTService = () => {
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
       
       

        <h1 className="mern-title">IoT Projects</h1>

        <p className="mern-subtitle">
          Developing connected devices and IoT solutions for smart applications.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>Smart Home Devices</li>
              <li>Industrial IoT Solutions</li>
              <li>Sensor & Data Collection Systems</li>
              <li>IoT Dashboards & Monitoring</li>
              <li>Prototyping & Testing</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our Tools & Tech Stack</h3>
            <ul>
              <li>Arduino / Raspberry Pi – Microcontrollers</li>
              <li>MQTT / HTTP – Communication Protocols</li>
              <li>Node.js / Python – Backend Integration</li>
              <li>React – Dashboards & Interfaces</li>
              <li>IoT Cloud Platforms – Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTService;
