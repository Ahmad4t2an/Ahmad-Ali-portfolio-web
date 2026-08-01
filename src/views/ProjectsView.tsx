import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Search,
  Sparkles,
  Eye,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';
import { Project } from '../types';

interface ProjectsViewProps {
  onOpenProjectPreview: (project: Project) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onOpenProjectPreview }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Logistics', 'E-Commerce', 'Healthcare', 'Mobile App', 'Agency', 'Services', 'Education', 'Consulting'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 pt-6 pb-16">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
          Deployed Portfolio Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          12 Real Client Websites, Storefronts & Web Apps
        </h1>
        <p className="text-sm text-slate-300">
          Click any card to inspect the interactive device preview or visit the live deployment URL directly
        </p>
      </div>

      {/* SEARCH AND CATEGORY FILTER */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <TiltCard key={project.id} className="flex flex-col justify-between h-full">
            <div>
              {/* Project Cover Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-4 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-cyan-300 text-[11px] font-semibold rounded-lg border border-cyan-500/30">
                  {project.category}
                </span>

                <button
                  onClick={() => onOpenProjectPreview(project)}
                  className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/90 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md hover:bg-cyan-500 hover:text-slate-950 shadow-lg"
                  title="Quick View Modal"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-slate-800/80 text-slate-300 text-[10px] font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
                <button
                  onClick={() => onOpenProjectPreview(project)}
                  className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors text-center"
                >
                  Preview
                </button>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20 shrink-0"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="px-3 py-2 bg-slate-900 text-slate-500 text-xs font-mono rounded-xl border border-slate-800 shrink-0">
                    Client Portal
                  </span>
                )}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
          <p className="text-slate-400 text-sm">No projects matching "{searchQuery}" in category "{selectedCategory}".</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-bold text-cyan-400 underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
