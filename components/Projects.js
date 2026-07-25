'use client';

import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'That Tree Guy',
    description:
      'Professional landscaping & tree services website for a Canadian client. Features service showcases, quote request forms, gallery, and strong local SEO — driving real leads.',
    technologies: ['Laravel', 'React.js', 'Next.js', 'Tailwind CSS', 'MySql'],
    status: 'Live',
    liveUrl: 'https://thattreeguyts.com/',
    githubUrl: null,
    icon: '🌳',
    video: '/Muhammad-Sobhi/videos/ThatTreeGuy.mp4',
    featured: true,
  },
  {
    id: 9,
    title: 'Atelier Sophia',
    description:
      'Bridal boutique ERP system — Laravel 11 REST API with Sanctum auth, Next.js 16 server-rendered dashboard with React 19 and Tailwind v4. Manages the full gown rental lifecycle with an appointment calendar, bride journey tracking, and gown lifecycle management.',
    technologies: ['Laravel', 'Next.js', 'React.js', 'Tailwind CSS', 'MySQL', 'RESTful APIs'],
    status: 'Live',
    liveUrl: 'https://sophiadresses.cloud/',
    githubUrl: null,
    icon: '👗',
    featured: true,
  },
  {
    id: 2,
    title: 'PilaTea Project',
    description:
      'Pilates studio management platform — Laravel 11 API, React 19 admin panel, Next.js 14 public site. Features event booking, memberships, on-site tea ordering, email marketing, finance/expense tracking, and instructor management.',
    technologies: ['Laravel', 'React.js','Next.js', 'MySQL', 'RESTful APIs', 'Tailwind CSS'],
    status: 'Completed',
    liveUrl: null,
    githubUrl: null,
    icon: '🍵',
    video: '/Muhammad-Sobhi/videos/PilaTea.mp4',
    featured: true,
  },
  {
    id: 3,
    title: 'ERP-Workshop',
    description:
      'Full-stack ERP for manufacturing — Laravel backend, Next.js frontend. Covers procurement, inventory, production with BOM costing, sales invoicing, and financial tracking with wallet-based expense reconciliation. Arabic-first RTL UI.',
    technologies: ['Laravel', 'Next.js', 'MySQL', 'RESTful APIs','Tailwind CSS'],
    status: 'Completed',
    liveUrl: null,
    githubUrl: null,
    icon: '⚙️',
    video: '/Muhammad-Sobhi/videos/ERP-Workshop.mp4',
    featured: true,
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with product catalog, shopping cart, and secure checkout built with Laravel backend and React.js frontend.',
    technologies: ['Laravel', 'React.js', 'MySQL', 'Stripe API'],
    status: 'In Progress',
    liveUrl: null,
    githubUrl: null,
    icon: '🛍️',
    featured: false,
  },
  {
    id: 5,
    title: 'Blog Management System',
    description:
      'WordPress-based CMS with custom plugins and themes. Multi-author support, comment management, and advanced SEO optimization.',
    technologies: ['WordPress', 'PHP', 'MySQL', 'Custom CSS'],
    status: 'In Progress',
    liveUrl: null,
    githubUrl: null,
    icon: '📝',
    featured: false,
  },
  {
    id: 6,
    title: 'Task Management App',
    description:
      'Collaborative task management app with real-time updates. Create projects, assign tasks, and track progress with live notifications.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
    status: 'In Progress',
    liveUrl: null,
    githubUrl: null,
    icon: '✅',
    featured: false,
  },
  {
    id: 7,
    title: 'API Documentation Portal',
    description:
      'Interactive docs platform for RESTful APIs. Includes request/response examples, auth guides, and live code snippets.',
    technologies: ['JavaScript', 'HTML/CSS', 'API Design', 'Markdown'],
    status: 'In Progress',
    liveUrl: null,
    githubUrl: null,
    icon: '📚',
    featured: false,
  },
  {
    id: 8,
    title: 'CRM System',
    description:
      'Customer relationship management system. Manage contacts, track sales pipelines, and automate follow-ups with email integration.',
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Email API'],
    status: 'In Progress',
    liveUrl: null,
    githubUrl: null,
    icon: '👥',
    featured: false,
  },
];

export default function Projects() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-20 reveal" style={{ opacity: 0 }}>
          <p className="section-label mb-3">03. Work</p>
          <div className="flex items-center gap-6">
            <h2 className="text-4xl sm:text-5xl font-black text-[var(--text-dark)]">
              Featured Projects
            </h2>
            <div className="flex-1 h-px neu-pressed" style={{ maxWidth: '240px', height: '4px', borderRadius: '2px' }} />
          </div>
          <p className="mt-6 text-lg font-medium text-[var(--text-main)] max-w-2xl">
            A curated showcase of work across various technologies and industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="reveal" style={{ opacity: 0 }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 reveal text-center md:text-left flex flex-col items-center" style={{ opacity: 0 }}>
          <p className="text-base mb-8 font-semibold text-[var(--text-main)]">
            More projects coming soon — editing in progress
          </p>
          <a
            href="https://github.com/Muhammad-sobhi"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-btn"
            className="neu-btn-primary"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
