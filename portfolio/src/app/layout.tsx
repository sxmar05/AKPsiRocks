"use client";
import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="ipad-outer-bg">
          <div className="ipad-frame">
            <div className="ipad-inner">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
