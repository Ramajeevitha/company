import React from "react";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import SEO from "../../components/SEO/SEO";
import "./PlacementTraining.css";

const PlacementTraining = () => {
  
  return (
    <>
      <SEO 
        title="Placement Training" 
        description="Comprehensive placement preparation by Uyaron Technology to help students succeed in campus and off-campus recruitment drives."
        keywords="Placement Training, Aptitude Training, Technical Preparation, Logical Reasoning, Uyaron Technology, Campus Placement"
      />
      <section className="placement-page">
      <div className="placement-overlay">

        <div data-aos="fade-right" style={{marginBottom: "40px"}}>
          <PageNavigation
            to="/"
            scrollTo=""
            text="Back"
          />
        </div>

        <h1 className="placement-title" data-aos="fade-down">
          Placement Training
        </h1>

        <p className="placement-subtitle" data-aos="fade-down" data-aos-delay="100">
          Comprehensive placement preparation designed to help students
          succeed in campus and off-campus recruitment drives.
        </p>

        <div className="placement-grid">

          <div className="placement-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Logical Reasoning</h3>

            <p>
              Improve analytical thinking, puzzles, seating arrangements,
              blood relations, coding-decoding, syllogisms and reasoning.
            </p>

           
          </div>

          <div className="placement-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Quantitative Aptitude</h3>

            <p>
              Master percentages, profit & loss, time & work,
              averages, probability, number systems and more.
            </p>

          
          </div>

          <div className="placement-card" data-aos="fade-up" data-aos-delay="400">
            <h3>Technical Preparation</h3>

            <p>
              C, C++, Java, Python, JavaScript, SQL, DBMS,
              OS, Computer Networks, OOPs and Coding Interview.
            </p>

            
          </div>

          <div className="placement-card" data-aos="fade-up" data-aos-delay="500">
            <h3>Company Specific Training</h3>

            <p>
              TCS, Infosys, Wipro, Cognizant, Accenture,
              Capgemini, Zoho, Amazon and many more.
            </p>

           
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default PlacementTraining;