'use client';
import React, { useEffect, useState } from 'react';
//import Image from 'next/image';
import Link from 'next/link';
import '../page.css';
import './page.css';
import ProfileOverlay from '../components/ProfileOverlay';

export default function About() {
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
    <div className="ipad-content-scroll about-page">
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
      
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-bio">
          <div className="about-image">
            <img src="/profile.jpg" alt="Sneha Maram" />
          </div>
          <div className="about-text">
            <p>Hey there! I'm Sneha Maram, a curious creator based in Richardson, TX with a love for all things tech, storytelling, and expression. </p>
            <p>I'm currently diving deep into the world of computer science, blending logic with creativity wherever I can. Whether it's building seamless user experiences or exploring full-stack projects, I love bringing ideas to life in ways that connect with people.</p>
            <p>Beyond the screen, you'll usually find me teaching dance (yes, it's one of my biggest joys!), exploring new foods with friends, or getting lost in a good movie or music playlist. I'm all about discovering new perspectives through art, culture, or a really solid beat.</p>
          </div>
        </div>
        
        <div className="about-skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">UI Design</div>
            <div className="skill-item">User Research</div>
            <div className="skill-item">Prototyping</div>
            <div className="skill-item">Wireframing</div>
            <div className="skill-item">Figma</div>
            <div className="skill-item">HTML/CSS</div>
          </div>
        </div>
      </div>
      
      <div className="sticky-footer">
        <Link href="https://instagram.com" className="footer-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#ffffff"/>
          </svg>
        </Link>
        <Link href="mailto:snehamaram9@gmail.com" className="footer-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" fill="#ffffff"/>
          </svg>
        </Link>
        <Link href="/resume.pdf" className="footer-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" fill="#ffffff"/>
          </svg>
        </Link>
        <Link href="https://www.linkedin.com/in/snehamaram/" className="footer-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#ffffff"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
