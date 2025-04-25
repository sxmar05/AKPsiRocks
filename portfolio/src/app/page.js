"use client";
import { useRef } from 'react';
import './page.css';

export default function Home() {
  const projectsRef = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-content">
      <div className="intro-section">
        <div className="app-icons">
          <div className="icon"><span>A</span></div>
          <div className="icon"><span>♥</span></div>
          <div className="icon"><span>🎧</span></div>
          <div className="icon"><span>🧠</span></div>
        </div>
        <div className="intro-text">
          <h1>Hi, I'm Sneha,</h1>
          <h2>a UX designer</h2>
          <p>...and a student at UTD</p>
        </div>
      </div>
      
      <div className="projects-section" ref={projectsRef} id="projects">
        <h2>projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-image">
              <img src="/dsa-project.png" alt="DSA Project" />
            </div>
            <h3>DSA Project</h3>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/oop-project.png" alt="OOP Project" />
            </div>
            <h3>OOP Project</h3>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/chef-carousel.png" alt="Chef's Carousel" />
            </div>
            <h3>Chef's Carousel</h3>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="/nomad.png" alt="Nomad" />
            </div>
            <h3>Nomad</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
