import React, { useState } from 'react';
import LandingPage from './pages/Land.js';
import AboutPage from './pages/About.js';
// import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="app-container">
      <div className="iphone-frame">
        <div className="iphone-status-bar">
          <div className="time">9:41</div>
          <div className="status-icons">
            <div className="network-signal">●●●●</div>
            <div className="wifi">●</div>
            <div className="battery">●</div>
          </div>
        </div>
        
        {currentPage === 'landing' ? (
          <LandingPage navigateToAbout={() => setCurrentPage('about')} />
        ) : (
          <AboutPage navigateToLanding={() => setCurrentPage('landing')} />
        )}
      </div>
    </div>
  );
}

export default App;