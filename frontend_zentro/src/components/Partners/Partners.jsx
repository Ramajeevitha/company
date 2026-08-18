import "./Partners.css";

const Partners = () => {
  return (
    <section className="partners-section" id="partners">
      <div className="partners-container">
        <div className="partners-header" data-aos="fade-up">
          <span className="partners-tag">Our Group Enterprise</span>
          <h2>Brands Under Uyaron Technology</h2>
          <p>
            NeroVolt Electronics is our dedicated hardware and electronics division, 
            providing top-notch components, IoT solutions, and PCB designs.
          </p>
        </div>

        <div className="partners-grid" data-aos="fade-up" data-aos-delay="100">
          <div className="partner-card">
            <a href="https://nerovoltelectronics.com" target="_blank" rel="noreferrer" className="partner-link">
              <div className="partner-logo-container">
                <img 
                  src="/assets/NeroVolt_Logo.png" 
                  alt="NeroVolt Electronics Logo" 
                  className="partner-logo" 
                  loading="lazy" 
                  decoding="async"
                />
              </div>
              <div className="partner-info">
                <h3>NeroVolt Electronics</h3>
                <p>Hardware Solutions & Components</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
