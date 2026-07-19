import { useNavigate, useLocation } from "react-router-dom";
import "./HardwareServices.css";
import BackToServices from "../components/BackToServices";

const hardwareServices = [
  { name: "Technical Support", route: "/services/tech-support" },
  { name: "Desktop Support", route: "/services/desktop-support" },
  { name: "PCB Designing", route: "/services/pcb" },
  { name: "IoT Projects", route: "/services/iot" },
];

const HardwareServices = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="category-services hardware-services-page">
      <div className="page-top-row">
        <BackToServices to="/services" />
      </div>

      <div className="category-layout">
    
        <aside className="category-sidebar">
          <h2>Hardware Services</h2>
          <ul>
            {hardwareServices.map((service) => (
              <li
                key={service.route}
                className={location.pathname === service.route ? "active" : ""}
                onClick={() => navigate(service.route)}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </aside>

   
        <div className="category-content hardware-hero">
          <span className="tag">Hardware Support • PCB • IoT • Components</span>

          <h1>
            Reliable hardware solutions, electronics support, and affordable
            components for your projects.
          </h1>

          <p>
            From technical support and desktop troubleshooting to PCB designing
            and IoT project development, we provide practical hardware services
            that help students, startups, and businesses build with confidence.
            We also offer access to cost-effective hardware components through
            our dedicated platform, <strong>Nerovolt</strong>.
          </p>

          <div className="software-highlights hardware-highlights">
            <div>
              <span>⚡</span>
              <p>Technical support for systems, devices, and troubleshooting</p>
            </div>

            <div>
              <span>🖥️</span>
              <p>Desktop setup, maintenance, upgrades, and support</p>
            </div>

            <div>
              <span>🔌</span>
              <p>Custom PCB designing for academic, personal, and business use</p>
            </div>

            <div>
              <span>📡</span>
              <p>IoT project development with sensors, automation, and control systems</p>
            </div>

            <div>
              <span>🛒</span>
              <p>
                Low-cost hardware components and electronics support through{" "}
                <strong>Nerovolt</strong>
              </p>
            </div>

            <div>
              <span>🤝</span>
              <p>Guidance for students, project teams, startups, and local businesses</p>
            </div>
          </div>

          <div className="hardware-contact-box">
            <h3>Need hardware support or components?</h3>
            <p>
              If you’re looking for technical support, PCB or IoT project help,
              or affordable hardware components from <strong>Nerovolt</strong>,
              feel free to reach out.
            </p>

            <div className="hardware-contact-list">
              <a href="mailto:nerovolt@gmail.com">📩 nerovolt@gmail.com</a>
              <a
                href="https://www.instagram.com/nerovolt"
                target="_blank"
                rel="noreferrer"
              >
                📷 @nerovolt
              </a>
            </div>

           
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HardwareServices;