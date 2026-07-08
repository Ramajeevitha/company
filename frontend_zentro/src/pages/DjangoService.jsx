import { useNavigate } from "react-router-dom";
import "./MernService.css"; 
import BackToServices from "../components/BackToServices";
import GradientBlinds from "../components/GradientBlinds";


const DjangoService = () => {
  const navigate = useNavigate();

  return (
    <section className="mern">
  
        <GradientBlinds
                  gradientColors={["#00c6ff", "#0072ff"]}
                  angle={20}
                  noise={0.15}
                  blindCount={16}
                  blindMinWidth={60}
                  spotlightRadius={0.45}
                  spotlightSoftness={1.2}
                  spotlightOpacity={1.1}
                  mouseDampening={0.08}
                  distortAmount={2.2}
                  shineDirection="left"
                  mixBlendMode="lighten"
                />
      
      <div className="mern-overlay">
         <BackToServices />
       
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
