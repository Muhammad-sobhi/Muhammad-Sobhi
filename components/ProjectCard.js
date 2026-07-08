'use client';

import React from 'react';

export default function ProjectCard({ project }) {
  const isLive   = project.liveUrl  && project.liveUrl  !== '#';
  const hasGithub = project.githubUrl && project.githubUrl !== '#';

  return (
    <div className="neu-card overflow-hidden flex flex-col h-full p-6">
      {/* Header Area */}
      <div className="relative h-48 flex items-center justify-center neu-pressed rounded-2xl mb-6 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover absolute inset-0"
          />
        ) : (
          <span className="text-6xl z-10 select-none drop-shadow-md">
            {project.icon}
          </span>
        )}

        {/* Featured pill */}
        {project.featured && (
          <div className="absolute top-4 left-4 neu-badge">
            ★ Featured
          </div>
        )}

        {/* Status */}
        <div className="absolute top-4 right-4">
          {project.status === 'Live' ? (
            <span className="neu-badge flex items-center gap-2">
              <span className="w-2 h-2 rounded-full live-dot" />
              Live
            </span>
          ) : project.status === 'In Progress' ? (
            <span className="neu-badge" style={{ color: '#0ea5e9' }}>
              In Progress
            </span>
          ) : (
            <span className="neu-badge" style={{ color: '#64748b' }}>
              Completed
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-[var(--text-dark)]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base leading-relaxed mb-6 flex-grow text-[var(--text-main)] font-medium">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full text-xs font-bold text-[var(--text-main)] neu-pressed">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {isLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 neu-btn-primary !py-3 !text-sm"
            >
              View Live →
            </a>
          ) : (
            <span className="flex-1 neu-pressed !py-3 !text-sm rounded-full text-center font-bold text-[var(--text-main)] flex items-center justify-center">
              Coming Soon
            </span>
          )}

          {hasGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 neu-btn !py-3 !text-sm"
            >
              GitHub
            </a>
          ) : (
            <span className="flex-1 neu-pressed !py-3 !text-sm rounded-full text-center font-bold text-[var(--text-main)] flex items-center justify-center">
              Private
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
