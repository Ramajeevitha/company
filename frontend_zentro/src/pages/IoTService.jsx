import { useNavigate } from "react-router-dom";
import "./MernService.css";
import BackToServices from "../components/BackToServices";


const IoTService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      <div className="mern-bg">
       
      </div>

      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/hardware" />
        </div>

        <h1 className="mern-title">IoT Solutions</h1>

        <p className="mern-subtitle">
          We build smart IoT solutions that connect devices, automate processes,
          and help businesses monitor, manage, and improve operations more
          efficiently.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Create</h3>
            <ul>
              <li>Smart device solutions for automation and monitoring</li>
              <li>Connected systems for homes, offices, and industries</li>
              <li>Real-time data collection and control-based applications</li>
              <li>Custom IoT solutions tailored to specific business needs</li>
              <li>Prototype and product-oriented smart hardware integrations</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our IoT Services</h3>
            <ul>
              <li>Smarter systems that improve efficiency and reduce manual work</li>
              <li>Custom-built solutions based on your business goals</li>
              <li>Real-time visibility and better control over operations</li>
              <li>Reliable support for innovative connected products and systems</li>
              <li>Practical IoT solutions designed for real-world usage</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Ready to Build a Smart IoT Solution?</h3>
          <p>
            Whether you need device automation, monitoring systems, connected
            products, or custom IoT solutions for your business, we’re here to
            help you build smarter, more efficient technology experiences.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default IoTService;