import "../components/Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { name: "MERN Stack Development", route: "/services/mern-stack" },
    { name: "PERN Stack Development", route: "/services/pern-stack" },
    { name: "Frontend Development", route: "/services/frontend" },
    { name: "Backend Development", route: "/services/backend" },
    { name: "Django", route: "/services/django" },
    { name: "UI / UX Designing", route: "/services/uiux" },
    { name: "SQL & Database Management", route: "/services/sql" },
    { name: "Artificial Intelligence", route: "/services/ai" },
    { name: "Deep Learning", route: "/services/dl" },
    { name: "Gen-AI", route: "/service/gen-ai"},
    { name: "Word / Excel / PowerPoint", route: "/services/office" },
    { name: "Technical Support", route: "/services/tech-support" },
    { name: "Desktop Support", route: "/services/desktop-support" },
    { name: "PCB Designing", route: "/services/pcb" },
    { name: "IoT Projects", route: "/services/iot" },
    { name: "Wood Router / 3D printing", route: "/services/wood-3d"}
  ];

  return (
    <section className="services">
       <video
        className="team-video"
        src="/vdoo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => navigate(service.route)}
          >
            {service.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;