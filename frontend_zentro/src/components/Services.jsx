import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const softwareServices = [
    { name: "MERN Stack Development", route: "/services/mern-stack" },
    { name: "PERN Stack Development", route: "/services/pern-stack" },
    { name: "Frontend Development", route: "/services/frontend" },
    { name: "Backend Development", route: "/services/backend" },
    { name: "Django", route: "/services/django" },
    { name: "UI / UX Designing", route: "/services/uiux" },
    { name: "SQL & Database Management", route: "/services/sql" },
    { name: "DSA", route: "/services/dsa" },
  ];

  const hardwareServices = [
    { name: "Technical Support", route: "/services/tech-support" },
    { name: "Desktop Support", route: "/services/desktop-support" },
    { name: "PCB Designing", route: "/services/pcb" },
    { name: "IoT Projects", route: "/services/iot" },
  ];

  return (
    <section className="services">
      <h2>Our Services & Courses</h2>

      <div className="service-section">
        <h3 className="service-heading">Software Solutions</h3>
        <div className="service-grid">
          {softwareServices.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => navigate(service.route)}
            >
              {service.name}
            </div>
          ))}
        </div>
      </div>

      <div className="service-section">
        <h3 className="service-heading">Hardware Solutions</h3>
        <div className="service-grid">
          {hardwareServices.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => navigate(service.route)}
            >
              {service.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;