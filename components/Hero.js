'use client';

import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div
        className="relative z-10 text-center max-w-4xl mx-auto"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
      >
        {/* Avatar */}
        <div className="mb-10 flex justify-center fade-in-up">
          <div className="w-32 h-32 rounded-full neu-card flex items-center justify-center text-4xl font-black text-[var(--primary)]">
            MS
          </div>
        </div>

        {/* Intro badge */}
        <div className="flex justify-center mb-6 fade-in-up fade-delay-1">
          <span className="neu-badge">
            Hi, my name is
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl font-black mb-4 fade-in-up fade-delay-2 tracking-tight"
          style={{ color: 'var(--text-dark)' }}
        >
          Muhammad Sobhi
        </h1>

        {/* Subtitle */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 fade-in-up fade-delay-2 text-gradient leading-tight">
          Full Stack Developer.
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg mb-12 leading-relaxed max-w-2xl mx-auto fade-in-up fade-delay-3 font-medium text-[var(--text-main)]">
          I&apos;ve been building for the web for <span className="font-bold text-[var(--text-dark)]">8+ years</span>.
          Specializing in <span className="font-bold text-[var(--text-dark)]">Laravel</span>,{' '}
          <span className="font-bold text-[var(--text-dark)]">React.js</span>, and{' '}
          <span className="font-bold text-[var(--text-dark)]">RESTful APIs</span> — with a focus on
          performance, clean architecture, and exceptional UX.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up fade-delay-4">
          <a
            href="#projects"
            className="neu-btn-primary"
          >
            Check out my work!
          </a>
          <a
            href="https://github.com/Muhammad-sobhi"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-btn"
          >
            GitHub Profile
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-16 fade-in-up fade-delay-4">
          <a
            href="https://github.com/Muhammad-sobhi"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="neu-icon-btn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/muhammad-mamdouh-b19a02315"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="neu-icon-btn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.789 0-9.709h3.554v1.375c.429-.664 1.196-1.608 2.905-1.608 2.122 0 3.714 1.383 3.714 4.357v5.585zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.949.771-1.704 1.956-1.704 1.184 0 1.914.755 1.939 1.704 0 .946-.755 1.704-1.98 1.704zm1.581 11.597H3.765V9.558h3.153v10.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="mailto:muhammadsobhi.24@gmail.com"
            title="Email"
            className="neu-icon-btn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
