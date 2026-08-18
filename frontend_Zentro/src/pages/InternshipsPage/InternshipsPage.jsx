import React, { useEffect } from "react";
import SEO from "../../components/SEO/SEO";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import "./InternshipsPage.css";

const InternshipsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="internships-page">
      <SEO 
        title="Internships" 
        description="Apply for exciting internships at Uyaron Technology."
      />
      <div style={{ marginBottom: "40px" }} data-aos="fade-right">
        <PageNavigation to="/" text="Back" />
      </div>
      
      <div className="internships-content" data-aos="fade-up">
        <div className="coming-soon-badge">Coming Soon</div>
        <h1>Our Official Internship Portal is Launching Soon!</h1>
        <p className="internships-subtitle">
          We are currently building an exclusive portal for internships. In the meantime, you can directly apply by sending us your resume.
        </p>

        <div className="application-box">
          <h2>How to Apply Now</h2>
          <p>
            Please send your updated resume to <a href="mailto:uyaronoffice@gmail.com" className="email-link">uyaronoffice@gmail.com</a>.
          </p>
          <div className="email-instructions">
            <p>Make sure to include the following details in your email:</p>
            <ul>
              <li><strong>Interested Domain:</strong> (e.g., Frontend, Backend, IoT, PCB, Hardware)</li>
              <li><strong>Educational Background:</strong> (Degree, College, Year of passing)</li>
              <li><strong>Reference Link:</strong> (Portfolio, GitHub, Live Projects)</li>
              <li><strong>LinkedIn Link:</strong> (Your LinkedIn profile URL)</li>
            </ul>
          </div>
          <a 
            href="mailto:uyaronoffice@gmail.com?subject=Internship Application&body=Interested Domain:%0D%0AEducational Background:%0D%0AReference Link:%0D%0ALinkedIn Link:%0D%0A" 
            className="apply-btn"
          >
            Draft Email Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;
