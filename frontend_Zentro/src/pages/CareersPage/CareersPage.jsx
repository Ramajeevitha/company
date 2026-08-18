import React, { useEffect } from "react";
import SEO from "../../components/SEO/SEO";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import "./CareersPage.css";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Removed specific domains as requested

  return (
    <div className="careers-page">
      <SEO 
        title="Careers" 
        description="Join Uyaron Technology. We are looking for talented individuals in Web Development, IoT, and more."
      />
      <div style={{ marginBottom: "40px" }} data-aos="fade-right">
        <PageNavigation to="/" text="Back" />
      </div>
      <div className="page-header" data-aos="fade-down">
        <h1>Join Our Team</h1>
        <p>Explore exciting career opportunities at Uyaron Technology.</p>
      </div>

      <div className="careers-content">
        <div className="hiring-domains" style={{ textAlign: "center", marginBottom: "40px" }} data-aos="fade-up" data-aos-delay="100">
          <h2 style={{ fontSize: "2rem", color: "#38bdf8", marginBottom: "15px" }}>Open for All Domains</h2>
          <p style={{ color: "#cfd7e5", fontSize: "1.1rem", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
            Whether you're a developer, designer, hardware engineer, or marketer, we are always on the lookout for passionate individuals. Send us your profile!
          </p>
        </div>

        <div className="application-box" data-aos="fade-up" data-aos-delay="200">
          <h2>How to Apply</h2>
          <p>
            Please send your updated resume to <a href="mailto:uyaronoffice@gmail.com" className="email-link">uyaronoffice@gmail.com</a>.
          </p>
          <div className="email-instructions">
            <p>Make sure to include the following details in your email:</p>
            <ul>
              <li><strong>Domain:</strong> (Your specific domain of expertise)</li>
              <li><strong>Experience:</strong> (e.g., Fresher, 2 Years)</li>
              <li><strong>Reference Link:</strong> (e.g., Portfolio, GitHub, Live Projects)</li>
              <li><strong>LinkedIn Link:</strong> (Your LinkedIn profile URL)</li>
            </ul>
          </div>
          <a 
            href="mailto:uyaronoffice@gmail.com?subject=Job Application&body=Domain:%0D%0AExperience:%0D%0AReference Link:%0D%0ALinkedIn Link:%0D%0A" 
            className="apply-btn"
          >
            Draft Email Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
