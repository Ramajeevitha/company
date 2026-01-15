import "./MernService.css";
import BackToServices from "../components/BackToServices";

const GenAIService = () => {
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

        <h1 className="mern-title">Generative AI Solutions</h1>

        <p className="mern-subtitle">
          Building intelligent systems using modern Generative AI technologies.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>Chatbots & Virtual Assistants</li>
              <li>Text & Image Generation</li>
              <li>AI Content Automation</li>
              <li>Custom LLM Applications</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Gen AI Tech Stack</h3>
            <ul>
              <li>OpenAI / LLM APIs</li>
              <li>LangChain</li>
              <li>Vector Databases</li>
              <li>Prompt Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAIService;
