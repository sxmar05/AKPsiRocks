import React from 'react';
import '../App.css';

function LandingPage({ navigateToAbout }) {
  return (
    <div className="landing-page">
      <div className="gradient-background blue-gradient">
        <div className="content-container">
          <div className="app-icons-section">
            <div className="app-icons-grid">
              <div className="app-icon">
                <div className="icon-circle">
                  <span className="icon-text">A</span>
                </div>
              </div>
              <div className="app-icon">
                <div className="icon-circle">
                  <span className="icon-heart">♥</span>
                </div>
              </div>
              <div className="app-icon">
                <div className="icon-circle">
                  <span className="icon-text">🎧</span>
                </div>
              </div>
              <div className="app-icon">
                <div className="icon-circle">
                  <span className="icon-text">🧠</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="intro-section">
            <h1 className="intro-title">
              Hi, i'm Sneha, a UX designer
            </h1>
            <h2 className="intro-subtitle">
              and a student at UTD
            </h2>
          </div>
          
          <div className="projects-section">
            <div className="project-grid">
              <div className="project-item" onClick={navigateToAbout}>
                <div className="project-box">
                  <span className="project-text">dsa project</span>
                </div>
              </div>
              <div className="project-item">
                <div className="project-box">
                  <div className="case-study-icon">
                    <span>📍</span>
                  </div>
                  <span className="project-text">case study</span>
                </div>
              </div>
              <div className="project-item">
                <div className="project-box">
                  <span className="project-text">oop project</span>
                </div>
              </div>
              <div className="project-item">
                <div className="project-box">
                  <div className="chef-icon">
                    <span>👨‍🍳</span>
                  </div>
                  <span className="project-text">business plan</span>
                </div>
              </div>
              <div className="project-item">
                <div className="project-box">
                  <span className="project-text">acm</span>
                </div>
              </div>
              <div className="project-item">
                <div className="project-box">
                  <span className="project-text">fintech</span>
                </div>
              </div>
              <div className="project-item">
                <div className="project-box">
                  <span className="project-text">just for fun!</span>
                </div>
              </div>
            </div>
            
            <div className="navigation-path">
              <svg width="200" height="320" viewBox="0 0 200 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 40 C 100 100, 150 150, 170 280" stroke="white"  fill="none" />
                <text x="170" y="290" fill="white">←</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;