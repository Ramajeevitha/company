import { useNavigate } from "react-router-dom";
import BackToServices from "../components/BackToServices";
import "./PlacementTraining.css";

const PlacementTraining = () => {
  const navigate = useNavigate();

  return (
    <section className="placement-page">
      <div className="placement-overlay">

        <BackToServices
          to="/"
          scrollTo=""
          text="← Back to Services"
        />

        <h1 className="placement-title">
          Placement Training
        </h1>

        <p className="placement-subtitle">
          Comprehensive placement preparation designed to help students
          succeed in campus and off-campus recruitment drives.
        </p>

        <div className="placement-grid">

          <div className="placement-card">
            <h3>Logical Reasoning</h3>

            <p>
              Improve analytical thinking, puzzles, seating arrangements,
              blood relations, coding-decoding, syllogisms and reasoning.
            </p>

           
          </div>

          <div className="placement-card">
            <h3>Quantitative Aptitude</h3>

            <p>
              Master percentages, profit & loss, time & work,
              averages, probability, number systems and more.
            </p>

          
          </div>

          <div className="placement-card">
            <h3>Technical Preparation</h3>

            <p>
              C, C++, Java, Python, JavaScript, SQL, DBMS,
              OS, Computer Networks, OOPs and Coding Interview.
            </p>

            
          </div>

          <div className="placement-card">
            <h3>Company Specific Training</h3>

            <p>
              TCS, Infosys, Wipro, Cognizant, Accenture,
              Capgemini, Zoho, Amazon and many more.
            </p>

           
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlacementTraining;