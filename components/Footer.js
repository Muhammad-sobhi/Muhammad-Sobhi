'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-[var(--bg-color)]">
      {/* Neumorphic accent line */}
      <div className="absolute top-0 left-0 right-0 h-2 neu-pressed" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

          {/* Brand */}
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-black mb-6 text-[var(--primary)] font-mono tracking-tight">
              Muhammad Sobhi
            </h4>
            <p className="text-base leading-relaxed mb-8 text-[var(--text-main)] font-medium">
              Full Stack Web Developer crafting scalable, performant web applications
              with 8+ years of professional experience.
            </p>
            <div className="neu-badge flex items-center gap-2">
              <span className="w-2 h-2 rounded-full live-dot" />
              Available for new projects
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-sm font-bold mb-6 uppercase tracking-widest text-[var(--primary)] font-mono">
              Navigation
            </h5>
            <ul className="space-y-4">
              {[
                { label: '01. About', href: '#about' },
                { label: '02. Skills', href: '#about' },
                { label: '03. Work',  href: '#projects' },
                { label: 'Contact',   href: 'mailto:muhammadsobhi.24@gmail.com' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-base font-semibold text-[var(--text-main)] transition-colors hover:text-[var(--primary)] block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="text-sm font-bold mb-6 uppercase tracking-widest text-[var(--primary)] font-mono">
              Let&apos;s Connect
            </h5>
            <div className="flex gap-6 mb-8">
              {/* GitHub */}
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
              {/* LinkedIn */}
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
              {/* Email */}
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
            <p className="text-sm font-semibold text-[var(--text-main)]">
              muhammadsobhi.24@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-10 neu-pressed" />

        {/* Copyright */}
        <p className="text-center text-sm font-semibold text-[var(--text-main)]">
          Designed &amp; Built by <span className="text-[var(--primary)] font-bold">Muhammad Sobhi</span> · © {currentYear}
        </p>
      </div>
    </footer>
  );
}
