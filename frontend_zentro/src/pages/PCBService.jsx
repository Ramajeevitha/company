import { useNavigate } from "react-router-dom";
import "./MernService.css";
import BackToServices from "../components/BackToServices";


const PCBService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
      <div className="mern-bg">
       
      </div>

      <div className="mern-overlay">
        <div className="mern-back-wrap">
          <BackToServices to="/services/hardware" />
        </div>

        <h1 className="mern-title">PCB Design & Development</h1>

        <p className="mern-subtitle">
          We design high-quality PCB solutions for electronic products,
          prototypes, and custom hardware projects with a strong focus on
          performance, reliability, and real-world usability.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Create</h3>
            <ul>
              <li>Custom PCB layouts for electronic devices and systems</li>
              <li>Single-layer and multi-layer board design solutions</li>
              <li>Prototype-ready PCB designs for new product development</li>
              <li>Circuit board solutions tailored to project requirements</li>
              <li>Design support for embedded and hardware-based applications</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Why Choose Our PCB Services</h3>
            <ul>
              <li>Precision-focused design for reliable hardware performance</li>
              <li>Custom solutions built around your product needs</li>
              <li>Clean and efficient layouts for better functionality</li>
              <li>Suitable for prototypes, products, and specialized systems</li>
              <li>Support from concept stage to implementation-ready design</li>
            </ul>
          </div>
        </div>

        <div className="mern-contact-box">
          <h3>Looking for PCB Design Support?</h3>
          <p>
            Whether you’re building a new electronic product, developing a
            prototype, or need a custom PCB solution for your hardware project,
            we can help turn your concept into a practical and production-ready
            design.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default PCBService;