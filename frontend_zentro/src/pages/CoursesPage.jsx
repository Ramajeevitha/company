import { useNavigate } from "react-router-dom";
import "./CoursesPage.css";

const softwareCourses = [
  "Full Stack Web Development",
  "Frontend Development",
  "Backend Development",
  "Cyber Security and Management",
  "SQL & Database Management",
  "Languages : C, JavaScript,Python, Java",
  "DSA : JavaScript , Java",
];

const hardwareCourses = [
  "IoT Fundamentals",
  "PCB Designing",
  "Embedded Systems",
  "Arduino Programming",
  "Raspberry Pi Projects",
  "Desktop Hardware & Troubleshooting",
  "Technical Support Training",
];

const CoursesPage = () => {
  const navigate = useNavigate();

  return (
    <section className="courses-page">
      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>

      <div className="courses-container">
        <div className="courses-header">
          <span className="course-tag">Professional Training</span>

          <h1>Build Your Career With Industry Ready Courses</h1>

          <p>
            Learn from real-world projects, practical sessions, and experienced
            mentors. Whether you're interested in Software Development or
            Hardware Technologies, we provide hands-on training that prepares
            you for the industry.
          </p>
        </div>

        <div className="course-section">
          <div className="course-column">
            <h2>💻 Software Courses</h2>

            <div className="course-grid">
              {softwareCourses.map((course, index) => (
                <div
                  className="course-card"
                  key={index}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          <div className="course-column">
            <h2>⚙️ Hardware Courses</h2>

            <div className="course-grid">
              {hardwareCourses.map((course, index) => (
                <div
                  className="course-card"
                  key={index}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="courses-contact-box">
          <h3>Ready to Start Your Learning Journey?</h3>

          <p>
            Whether you're looking to master software development or gain
            practical hardware skills, we're here to help you build a successful
            career with hands-on training and expert guidance.
          </p>
        </div>
        {/* Certificate Section */}

        <div className="certificate-section">
          <div className="certificate-image">
            <img src="/assets/certificate.png" alt="Uyaron Certificate" />
          </div>

          <div className="certificate-content">
            <span className="certificate-tag">
              Industry Recognized Certificate
            </span>

            <h2>Earn a Professional Course Completion Certificate</h2>

            <p>
              Every learner who successfully completes our training program
              receives an official Uyaron Course Completion Certificate. Our
              certificates validate your practical skills, project experience,
              and industry-ready knowledge, helping you strengthen your resume
              and stand out during internships and placement opportunities.
            </p>

            <ul className="certificate-list">
              <li>✔ Industry-Oriented Curriculum</li>
              <li>✔ Hands-on Project Experience</li>
              <li>✔ Resume & Portfolio Enhancement</li>
              <li>✔ Placement Preparation Support</li>
              <li>✔ Lifetime Learning Community</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
