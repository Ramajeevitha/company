import "./MernService.css";
import BackToServices from "../components/BackToServices";

const DeepLearningService = () => {
  return (
    <section className="mern">
      {/* Background Video */}
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

        <h1 className="mern-title">Deep Learning Solutions</h1>

        <p className="mern-subtitle">
          Building intelligent deep learning models that learn from data and
          deliver accurate, scalable, and real‑world AI solutions.
        </p>

        <div className="mern-content">
          <div className="mern-card">
            <h3>What We Build</h3>
            <ul>
              <li>Neural Network Models</li>
              <li>Image & Video Recognition Systems</li>
              <li>Natural Language Processing Models</li>
              <li>Speech & Voice Recognition</li>
              <li>Predictive & Recommendation Engines</li>
            </ul>
          </div>

          <div className="mern-card">
            <h3>Our Deep Learning Stack</h3>
            <ul>
              <li>TensorFlow & Keras</li>
              <li>PyTorch</li>
              <li>Convolutional & Recurrent Neural Networks</li>
              <li>Transformers & Attention Models</li>
              <li>GPU‑accelerated Training</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepLearningService;
