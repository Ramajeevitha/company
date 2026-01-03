import { useNavigate } from "react-router-dom";
import "./MernService.css"; 

const DjangoService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
  
      <video
        className="mern-video"
        src="/vdoo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      
      <div className="mern-overlay">
       
        <h1 className="mern-title">Django Development</h1>
        <p className="mern-subtitle">
          We create scalable and secure web applications using Django, a powerful Python web framework.
        </p>


        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>Custom Web Applications</li>
              <li>Content Management Systems (CMS)</li>
              <li>E-commerce Platforms</li>
              <li>REST APIs & Backend Services</li>
              <li>Admin Dashboards</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our Django Tech Stack</h3>
            <ul>
              <li>Django – Python Web Framework</li>
              <li>Django REST Framework – APIs</li>
              <li>PostgreSQL / MySQL – Databases</li>
              <li>HTML, CSS, JavaScript – Frontend Integration</li>
              <li>Gunicorn / Nginx – Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DjangoService; 
