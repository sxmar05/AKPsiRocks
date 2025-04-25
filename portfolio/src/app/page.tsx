'use client';
import React, { useEffect, useState } from 'react';
import './page.css';
import ProfileOverlay from './components/ProfileOverlay';

// Import SVGs as React components
import HeadphoneIcon from './components/headphon.svg';
import BrainIcon from './components/brain.svg';
import HeartIcon from './components/heart.svg';
import PencilIcon from './components/pencil.svg';

export default function Home() {
  const [time, setTime] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'America/Chicago',
        })
      );
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ipad-content-scroll">
      <div className="ipad-notch" />
      <div 
        className="ipad-status-bar"
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <span className="ipad-status-time">{time}</span>
        <div className="ipad-status-icons">
          <span className="ipad-status-signal" />
          <span className="ipad-status-wifi" />
          <span className="ipad-status-battery" />
        </div>
        
        {showOverlay && <ProfileOverlay />}
      </div>
      
      <div className="intro-section">
        <div className="app-icons">
          <div className="icon">
            <HeadphoneIcon />
          </div>
          <div className="icon">
            <BrainIcon />
          </div>
          <div className="icon">
            <HeartIcon />
          </div>
          <div className="icon">
            <PencilIcon />
          </div>
        </div>
        <div className="intro-text">
          <h2>Hi, I'm Sneha,</h2>
          <h2>a UX designer</h2>
          <p>...and a student at UTD</p>
        </div>
      </div>
      
      <section className="projects-section">
        <h2>projects</h2>
        <div className="project-cards">
  <a href="https://github.com/sxmar05/calculator.git " target="_blank" rel="noopener noreferrer" className="project-card">
    <div className="project-image">
      <img src="/dsa-project.png" alt="DSA Project" />
    </div>
    <h3>Stack Calculator</h3>
  </a>
  
  <a href="https://github.com/sxmar05/restaurant-operations.git" target="_blank" rel="noopener noreferrer" className="project-card">
    <div className="project-image">
      <img src="/oop-project.png" alt="OOP Project" />
    </div>
    <h3>Restaurant Operations</h3>
  </a>
  
  <a href="https://www.canva.com/design/DAGh7vDBezY/ismyBiIN1AYt_1-guLXojQ/edit?utm_content=DAGh7vDBezY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" className="project-card">
    <div className="project-image">
      <img src="/chef-carousel.png" alt="Chef's Carousel" />
    </div>
    <h3>Chef's Carousel</h3>
  </a>
  
  <a href="https://nomad-green.vercel.app/ " target="_blank" rel="noopener noreferrer" className="project-card">
    <div className="project-image">
      <img src="/nomad.png" alt="Nomad" />
    </div>
    <h3>Nomad</h3>
  </a>
</div>

      </section>
    </div>
  );
}
