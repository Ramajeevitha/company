import { useNavigate, useLocation } from "react-router-dom";
import "./SoftwareServices.css";
import BackToServices from "../components/BackToServices";

const softwareServices = [
  { name: "Website Development", route: "/services/mern-stack" },
  { name: "Logo & Poster Designing", route: "/services/logo-poster-design" },
  { name: "Frontend Development", route: "/services/frontend" },
  { name: "Backend Development", route: "/services/backend" },
  { name: "UI / UX Designing", route: "/services/uiux" },
  { name: "Database Management", route: "/services/sql" },
];

const SoftwareServices = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="category-services">
      <div className="page-top-row">
        <BackToServices to="/services" />
      </div>

      <div className="category-layout">
        <aside className="category-sidebar">
          <h2>Software Services</h2>
          <ul>
            {softwareServices.map((service) => (
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

        <div className="category-content">
          <span className="tag">Digital Solutions for Growing Brands</span>

          <h1>Smart Software Solutions That Help Your Business Move Faster</h1>

          <p>
            From stunning websites to business-focused digital platforms, we
            build software solutions that improve your online presence, simplify
            operations, and create better customer experiences. Explore our
            services from the left panel and find the right solution for your
            business.
          </p>

          <div className="software-highlights">
            <div>
              <span>✦</span>
              <p>Modern websites designed to build trust and attract customers</p>
            </div>
            <div>
              <span>✦</span>
              <p>Responsive user interfaces that work beautifully on every device</p>
            </div>
            <div>
              <span>✦</span>
              <p>Business-ready backend systems for performance and reliability</p>
            </div>
            <div>
              <span>✦</span>
              <p>Creative design and database solutions tailored to your goals</p>
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default SoftwareServices;