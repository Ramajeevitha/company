import { useEffect, useRef, useState } from "react";
import "./About.css";
import Team from "./Team";
import Mission from "./Mission";

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;

        let start = 0;
        const duration = 1800;
        const increment = end / (duration / 16);

        const updateCounter = () => {
          start += increment;

          if (start >= end) {
            setCount(end);
            return;
          }

          setCount(Math.floor(start));
          requestAnimationFrame(updateCounter);
        };

        requestAnimationFrame(updateCounter);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [end]);

  return (
    <h4 ref={counterRef}>
      {count}
      {suffix}
    </h4>
  );
};

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-glow about-glow-1"></div>
        <div className="about-glow about-glow-2"></div>

        <div className="about-overlay">
          <h2 className="about-title">About Us</h2>

          <p className="about-subtitle">
            Zentro is a technology-driven company delivering modern web
            solutions and industry-focused courses that help businesses grow and
            individuals build practical, job-ready technical skills.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Who We Are</h3>
              <p>
                We are a passionate team of developers, designers, and mentors
                focused on creating impactful digital products and practical
                learning experiences.
              </p>
            </div>

            <div className="about-card">
              <h3>What We Do</h3>
              <p>
                We build websites, web applications, UI/UX systems, digital
                solutions, and provide industry-focused training programs in
                Software and Hardware technologies.
              </p>
            </div>

            <div className="about-card">
              <h3>Why Choose Us</h3>
              <p>
                We combine real project expertise with high-quality learning,
                helping businesses get scalable solutions and learners gain
                practical skills that matter in today's technology industry.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="about-stats">
            <div className="stat-card">
              <Counter end={30} suffix="+" />
              <span>Projects Delivered</span>
            </div>

            <div className="stat-card">
              <Counter end={20} suffix="+" />
              <span>Technologies Covered</span>
            </div>

            <div className="stat-card">
              <Counter end={100} suffix="%" />
              <span>Client Satisfaction</span>
            </div>
          </div>

          {/* MSME Card */}
          <div className="msme-card">
            <div className="msme-badge">
              <span>Government of India</span>
            </div>

            <h3>MSME Registered Company</h3>

            <p>
              Zentro is officially registered under the Ministry of Micro,
              Small and Medium Enterprises (MSME), Government of India. Our
              registration reflects our commitment to delivering trusted,
              professional, and high-quality technology solutions and training
              services.
            </p>

            <div className="msme-number">
              <strong>Udyam Registration No.</strong>
              <span>UDYAM-TN-26-0097136</span>
            </div>
          </div>
        </div>
      </section>

      <Mission />
      <Team />
    </>
  );
};

export default About;