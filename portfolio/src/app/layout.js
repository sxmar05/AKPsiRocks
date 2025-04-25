"use client";
import { useEffect, useState } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/Chicago'
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="ipad-container">
          <div className="ipad-status-bar">
            <div className="time">{currentTime}</div>
            <div className="notch"></div>
            <div className="status-icons">
              <div className="signal"></div>
              <div className="wifi"></div>
              <div className="battery">
                <div className="battery-level"></div>
              </div>
            </div>
          </div>
          <div className="ipad-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
