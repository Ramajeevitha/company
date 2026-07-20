import "./Services.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Services = () => {
  const navigate = useNavigate();
  const [loadingInternship, setLoadingInternship] = useState(false);

  const handleInternship = () => {
    setLoadingInternship(true);

    setTimeout(() => {
      setLoadingInternship(false);
      alert("🚀 Internship Portal Coming Soon!");
    }, 2000);
  };

  return (
    <section className="landing-services" id="services">
      <div className="landing-services-overlay">
        <h2 className="landing-services-title">What We Offer</h2>

        <p className="landing-services-subtitle">
          Explore our professional services, industry-focused courses,
          placement training programs, and internship opportunities designed
          for businesses, students, and aspiring professionals.
        </p>

        <div className="landing-services-grid">


          <div className="landing-service-card">
            <div className="landing-service-icon">💼</div>

            <h3>Services</h3>

            <p>
              Discover our software and hardware solutions including web
              development, UI/UX, backend systems, IoT, technical support,
              branding, and more.
            </p>

            <button onClick={() => navigate("/services")}>
              Explore Services
            </button>
          </div>


          <div className="landing-service-card">
            <div className="landing-service-icon">📘</div>

            <h3>Courses</h3>

            <p>
              Learn practical skills through hands-on training in MERN Stack,
              Frontend, Backend, UI/UX, SQL, C, Java, and modern software
              technologies.
            </p>

            <button onClick={() => navigate("/courses")}>
              Explore Courses
            </button>
          </div>

          <div className="landing-service-card">
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

          <div className="landing-service-card">
            <div className="landing-service-icon">💻</div>

            <h3>Internships</h3>

            <p>
              Join real-time internships in Software Development, UI/UX,
              Hardware, IoT,Pcb, and emerging technologies with live project
              experience and mentorship.
            </p>

            <button
              onClick={handleInternship}
              disabled={loadingInternship}
            >
              {loadingInternship
                ? "Loading Internship..."
                : "Explore Internship"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;