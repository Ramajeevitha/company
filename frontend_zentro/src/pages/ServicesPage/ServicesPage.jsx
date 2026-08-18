import React, { useState, useEffect } from "react";
import SEO from "../../components/SEO/SEO";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import { FaEnvelope, FaGlobe, FaInstagram } from "react-icons/fa";
import { servicesData, overviewData } from "../../data/servicesData";
import "./ServicesPage.css";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("software");
  const [activeServiceId, setActiveServiceId] = useState("overview");

  // When tab changes, default to overview
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveServiceId("overview");
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeServicesList = servicesData[activeTab];
  const selectedServiceData = activeServicesList.find(s => s.id === activeServiceId);

  return (
    <div className="unified-services-page">
      <SEO 
        title="Our Services" 
        description="Explore our comprehensive Software and Hardware services."
      />
      
      <div className="unified-services-header">
        <div style={{ alignSelf: "flex-start" }}>
          <PageNavigation to="/" text="Back" />
        </div>
        <h1 data-aos="fade-up">Our Services</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          Choose a category and explore our specialized solutions.
        </p>

        {/* Top Menu Tabs */}
        <div className="services-tabs" data-aos="fade-up" data-aos-delay="200">
          <button 
            className={`tab-btn ${activeTab === "software" ? "active" : ""}`}
            onClick={() => setActiveTab("software")}
          >
            Software Services
          </button>
          <button 
            className={`tab-btn ${activeTab === "hardware" ? "active" : ""}`}
            onClick={() => setActiveTab("hardware")}
          >
            Hardware Services
          </button>
        </div>
      </div>

      <div className="services-dashboard">
        {/* Fixed Left Sidebar */}
        <aside className="services-sidebar" data-aos="fade-right" data-aos-delay="300">
          <ul className="sidebar-list">
            <li 
              className={`sidebar-item ${activeServiceId === "overview" ? "active" : ""}`}
              onClick={() => setActiveServiceId("overview")}
            >
              Overview
            </li>
            {activeServicesList.map((service) => (
              <li 
                key={service.id}
                className={`sidebar-item ${activeServiceId === service.id ? "active" : ""}`}
                onClick={() => setActiveServiceId(service.id)}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Dynamic Right Content Area */}
        <main className="services-content-area" data-aos="fade-left" data-aos-delay="400">
          {activeServiceId === "overview" ? (
            <div className="service-overview-ui">
              <span className="overview-tag">{overviewData[activeTab].tag}</span>
              <h1 className="overview-title">{overviewData[activeTab].title}</h1>
              <p className="overview-description">{overviewData[activeTab].description}</p>
              
              <div className="overview-highlights">
                {overviewData[activeTab].highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="highlight-icon">✦</span>
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>

              {overviewData[activeTab].contactBox && (
                <div className="hardware-contact-box">
                  <h3>{overviewData[activeTab].contactBox.title}</h3>
                  <p>{overviewData[activeTab].contactBox.desc}</p>
                  <div className="hardware-contact-list">
                    <a href={`mailto:${overviewData[activeTab].contactBox.links.email}`}>
                      <FaEnvelope className="contact-icon" /> {overviewData[activeTab].contactBox.links.email}
                    </a>
                    <a href={`https://${overviewData[activeTab].contactBox.links.web}`} target="_blank" rel="noreferrer">
                      <FaGlobe className="contact-icon" /> {overviewData[activeTab].contactBox.links.web}
                    </a>
                    <a href={`https://instagram.com/${overviewData[activeTab].contactBox.links.insta}`} target="_blank" rel="noreferrer">
                      <FaInstagram className="contact-icon insta-icon" /> @{overviewData[activeTab].contactBox.links.insta}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ) : selectedServiceData && (
            <div className="service-details" key={selectedServiceData.id}>
              <h2 className="service-title">{selectedServiceData.title}</h2>
              <p className="service-subtitle">{selectedServiceData.subtitle}</p>

              <div className="service-cards-container">
                <div className="service-detail-card">
                  <h3>What We Create</h3>
                  <ul>
                    {selectedServiceData.whatWeCreate.map((item, i) => (
                      <li key={i}>
                        <span className="bullet-icon">✦</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-detail-card">
                  <h3>Why Choose Us</h3>
                  <ul>
                    {selectedServiceData.whyChooseUs.map((item, i) => (
                      <li key={i}>
                        <span className="bullet-icon">✦</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="service-cta">
                <h3>Ready to get started?</h3>
                <p>Contact us to discuss how we can help with {selectedServiceData.title.toLowerCase()}.</p>
                <a href="mailto:uyaronoffice@gmail.com" className="contact-btn">Contact Us</a>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ServicesPage;
