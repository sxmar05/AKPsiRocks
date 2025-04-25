'use client';
import React, { useEffect, useState } from 'react';
import './page.css';

export default function Home() {
  const [time, setTime] = useState('');
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
      <div className="ipad-status-bar">
        <span className="ipad-status-time">{time}</span>
        <div className="ipad-notch" />
        <div className="ipad-status-icons">
          <span className="ipad-status-signal" />
          <span className="ipad-status-wifi" />
          <span className="ipad-status-battery" />
        </div>
      </div>
      <div className="centered-intro">
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
      </div>
      <section className="projects-section">
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
      </section>
    </div>
  );
}
