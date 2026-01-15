import "./MernService.css";
import BackToServices from "../components/BackToServices";

const AIService = () => {
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
        <BackToServices />

        <h1 className="mern-title">AI & Machine Learning Solutions</h1>

        <p className="mern-subtitle">
          Building intelligent systems that automate, analyze, and scale your business.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>AI‑powered Web Applications</li>
              <li>Machine Learning Models</li>
              <li>Chatbots & Virtual Assistants</li>
              <li>Predictive Analytics</li>
              <li>Automation Systems</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our AI Tech Stack</h3>
            <ul>
              <li>Python & TensorFlow</li>
              <li>PyTorch & Scikit‑learn</li>
              <li>OpenAI APIs</li>
              <li>Data Processing Pipelines</li>
              <li>Cloud AI Deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIService;