import React from 'react';
import '../App.css';

function AboutPage({ navigateToLanding }) {
  return (
    <div className="about-page">
      <div className="gradient-background purple-gradient">
        <div className="about-content">
          <div className="about-header">
            <div className="greeting-box">
              <h1>Nice to meet you! I'm Sneha!</h1>
            </div>
          </div>
          
          <div className="about-text">
            <p>
              Hey there! I'm Sneha Maram, a curious creator based in Richardson, TX with a love for all things tech, storytelling, and expression.
            </p>
            <p>
              I'm currently diving deep into the world of computer science, blending logic with creativity wherever I can. Whether it's building seamless user experiences or exploring full-stack projects, I love bringing ideas to life in ways that connect with people.
            </p>
            <p>
              Beyond the screen, you'll usually find me teaching dance (yes, it's one of my biggest joys!), exploring new foods with friends, or getting lost in a good movie or music playlist. I'm all about discovering new perspectives through art, culture, or a really solid beat.
            </p>
          </div>
          
          <div className="profile-section">
            <div className="profile-image" onClick={navigateToLanding}>
              {/* Profile image would go here */}
            </div>
            
            <div className="social-links">
              <div className="social-link">
                <div className="social-icon">
                  <span>📷</span>
                </div>
                <span className="social-text">instagram</span>
              </div>
              <div className="social-link">
                <div className="social-icon">
                  <span>✉️</span>
                </div>
                <span className="social-text">email</span>
              </div>
              <div className="social-link">
                <div className="social-icon">
                  <span>in</span>
                </div>
                <span className="social-text">linkedin</span>
              </div>
            </div>
          </div>
          
          <div className="footer-message">
            <div className="message-box">
              <p>I am always open to chat! Feel free to reach out through any of the links above!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;