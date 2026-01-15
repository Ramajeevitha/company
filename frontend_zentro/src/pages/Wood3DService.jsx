import "./MernService.css";
import BackToServices from "../components/BackToServices";

const Wood3DService = () => {
  return (
    <section className="wood3d">
       <video
        className="mern-video"
        src="/vdoo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="wood3d-overlay">
        <BackToServices />

        <h1 className="wood3d-title">
          Wood Router & 3D Printing Design
        </h1>

        <p className="wood3d-subtitle">
          Precision design solutions for CNC wood routing and 3D printing using
          industry‑standard tools and professional workflows.
        </p>

        <div className="wood3d-content">
          <div className="wood3d-card">
            <h3>What We Design</h3>
            <ul>
              <li>CNC Wood Router Designs</li>
              <li>Furniture & Panel Engraving</li>
              <li>3D Printing Models</li>
              <li>Photo & Logo Engraving</li>
              <li>Custom Industrial Designs</li>
            </ul>
          </div>

          <div className="wood3d-card">
            <h3>Design Software We Use</h3>
            <ul>
              <li>ArtCAM Pro 9.1 – Wood Router Design</li>
              <li>RD Works V8 – CNC & Laser Control</li>
              <li>PhotoGrav – Photo Engraving</li>
              <li>3D Modeling for Print‑Ready Designs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wood3DService;
