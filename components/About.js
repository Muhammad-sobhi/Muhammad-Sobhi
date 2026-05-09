'use client';

import React, { useEffect, useRef } from 'react';

const skills = [
  {
    category: 'Backend',
    icon: '⚡',
    items: ['Laravel', 'PHP', 'Node.js', 'RESTful APIs', 'Database Design', 'CodeIgniter'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React.js', 'JavaScript', 'HTML / CSS', 'Responsive Design', 'Next.js', 'UI/UX'],
  },
  {
    category: 'Tools & Others',
    icon: '🛠',
    items: ['Git & GitHub', 'WordPress', 'SQL / MySQL', 'Troubleshooting', 'Stripe API'],
  },
];

const stats = [
  { value: '8+',   label: 'Years Experience' },
  { value: '50+',  label: 'Projects Delivered' },
  { value: '3+',   label: 'Companies Worked' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('fade-in-up'), i * 70);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16 reveal" style={{ opacity: 0 }}>
          <p className="section-label mb-3">01. About Me</p>
          <div className="flex items-center gap-6">
            <h2 className="text-4xl sm:text-5xl font-black text-[var(--text-dark)]">
              About Me
            </h2>
            <div className="flex-1 h-px neu-pressed" style={{ maxWidth: '240px', height: '4px', borderRadius: '2px' }} />
          </div>
        </div>

        {/* Bio */}
        <div className="neu-card p-8 md:p-10 mb-20 reveal" style={{ opacity: 0 }}>
          <p className="text-lg leading-relaxed text-[var(--text-main)] font-medium">
            I&apos;m a Full Stack Web Developer with{' '}
            <span className="font-bold text-[var(--text-dark)]">8+ years of experience</span> building
            robust, scalable web applications. My expertise spans backend technologies
            like <span className="font-bold text-[var(--primary)]">Laravel &amp; PHP</span> and modern
            frontend frameworks like <span className="font-bold text-[var(--primary)]">React.js</span>.
            I&apos;ve delivered projects across e-commerce, landscaping, education, and
            SaaS — always focused on clean code and exceptional UX.
          </p>
        </div>

        {/* Skills heading */}
        <div className="mb-12 reveal" style={{ opacity: 0 }}>
          <p className="section-label mb-3">02. Skills</p>
          <h3 className="text-3xl font-bold text-[var(--text-dark)]">
            Technical Skills
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="neu-card p-8 reveal flex flex-col items-center text-center"
              style={{ opacity: 0 }}
            >
              <div className="neu-icon-btn mb-6 text-2xl !w-16 !h-16">
                {group.icon}
              </div>
              <h4 className="text-xl font-bold text-[var(--text-dark)] mb-6">
                {group.category}
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-[var(--text-main)] neu-pressed">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="neu-card p-6 text-center reveal"
              style={{ opacity: 0 }}
            >
              <div className="text-4xl font-black mb-2 text-[var(--primary)]">
                {s.value}
              </div>
              <div className="text-sm font-bold text-[var(--text-main)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
