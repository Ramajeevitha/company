import "./Services.css";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate = useNavigate();
  const handleInternship = () => {
    navigate("/internships");
  };

  return (
    <section className="landing-services" id="services">
      <div className="landing-services-overlay">
        <h2 className="landing-services-title" data-aos="fade-up">What We Offer</h2>

        <p className="landing-services-subtitle" data-aos="fade-up" data-aos-delay="100">
          Explore our professional services, industry-focused courses,
          placement training programs, and internship opportunities designed
          for businesses, students, and aspiring professionals.
        </p>

        <div className="landing-services-grid">


          <div className="landing-service-card" data-aos="fade-up" data-aos-delay="200">
            <div className="landing-service-icon">💼</div>

            <h3>Services</h3>

            <p>
              Discover our comprehensive software and hardware solutions including web
              development, UI/UX, ERP, IoT systems, PCB Design, technical support,
              and Embedded engineering.
            </p>

            <button onClick={() => navigate("/services")}>
              Explore Services
            </button>
          </div>


          <div className="landing-service-card" data-aos="fade-up" data-aos-delay="300">
            <div className="landing-service-icon">📘</div>

            <h3>Courses</h3>

            <p>
              Learn practical skills through hands-on training in MERN Stack,
              UI/UX, IoT Fundamentals, PCB Design, VLSI, Arduino Programming, and
              Embedded Systems with real-world projects.
            </p>

            <button onClick={() => navigate("/courses")}>
              Explore Courses
            </button>
          </div>

          <div className="landing-service-card" data-aos="fade-up" data-aos-delay="400">
            <div className="landing-service-icon">🎯</div>

            <h3>Placement Training</h3>

            <p>
              Get placement-ready with aptitude, logical reasoning,
              quantitative aptitude, coding, technical interviews, HR
              preparation, and company-specific training.
            </p>

            <button onClick={() => navigate("/services/placement-training")}>
              Explore Placement
            </button>
          </div>

          <div className="landing-service-card" data-aos="fade-up" data-aos-delay="500">
            <div className="landing-service-icon">💻</div>

            <h3>Internships</h3>

            <p>
              Join real-time internships in Software Development, UI/UX,
              Hardware, IoT,Pcb, and emerging technologies with live project
              experience and mentorship.
            </p>

            <button onClick={handleInternship}>
              Explore Internship
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;