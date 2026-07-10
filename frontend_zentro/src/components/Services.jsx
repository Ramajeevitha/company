import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="landing-services" id="services">
      <div className="landing-services-overlay">
        <h2 className="landing-services-title">What We Offer</h2>
        <p className="landing-services-subtitle">
          Explore our professional services and industry-focused courses
          designed for businesses, students, and tech learners.
        </p>

        <div className="landing-services-grid">
          {/* SERVICES CARD */}
          <div className="landing-service-card">
            <div className="landing-service-icon">💼</div>
            <h3>Services</h3>
            <p>
              Discover our software and hardware solutions including web
              development, UI/UX, backend systems, IoT, technical support, and
              more.
            </p>
            <button onClick={() => navigate("/services")}>
              Explore Services
            </button>
          </div>

          {/* COURSES CARD */}
          <div className="landing-service-card">
            <div className="landing-service-icon">📘</div>
            <h3>Courses</h3>
            <p>
              Learn practical skills through our hands-on courses in web
              development, databases, UI/UX, DSA, and modern software tools.
            </p>
            <button
              onClick={() => {
                navigate("/courses");
                window.scrollTo(0, 0);
              }}
            >
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
