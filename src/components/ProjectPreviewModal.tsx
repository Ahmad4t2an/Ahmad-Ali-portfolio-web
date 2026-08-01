import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Monitor, Smartphone, Tablet, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({ project, onClose }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeError, setIframeError] = useState(false);

  if (!project) return null;

  const deviceWidths = {
    desktop: 'w-full max-w-5xl h-[520px]',
    tablet: 'w-[640px] max-w-full h-[520px]',
    mobile: 'w-[360px] max-w-full h-[560px]'
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/60">
            <div className="flex items-center gap-3 min-w-0">
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Sparkles className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-white truncate">{project.title}</h3>
                <p className="text-xs text-slate-400 truncate">{project.category} Architecture Preview</p>
              </div>
            </div>

            {/* Device View Controls */}
            {project.liveUrl && (
              <div className="hidden md:flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                    deviceView === 'desktop' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" /> Desktop
                </button>
                <button
                  onClick={() => setDeviceView('tablet')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                    deviceView === 'tablet' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" /> Tablet
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                    deviceView === 'mobile' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" /> Mobile
                </button>
              </div>
            )}

            <div className="flex items-center gap-2 shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 sm:gap-2 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <span className="hidden sm:inline">Visit Live Site</span>
                  <span className="sm:hidden">Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/60 hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left/Main Column: Device Preview or High-Res Image */}
            <div className="lg:col-span-8 flex flex-col items-center justify-center bg-slate-950/80 rounded-2xl p-4 border border-slate-800/80 relative min-h-[360px]">
              {project.liveUrl && !iframeError ? (
                <div className={`transition-all duration-300 mx-auto rounded-xl overflow-hidden border border-slate-700/60 bg-black shadow-2xl relative ${deviceWidths[deviceView]}`}>
                  <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="truncate text-slate-300 font-mono text-[11px] ml-2">
                      {project.liveUrl}
                    </span>
                  </div>
                  <iframe
                    src={project.liveUrl}
                    title={project.title}
                    onError={() => setIframeError(true)}
                    className="w-full h-[calc(100%-33px)] border-0"
                  />
                </div>
              ) : (
                <div className="w-full h-full min-h-[320px] relative rounded-xl overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
                    <div>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30">
                        {project.category}
                      </span>
                      <h4 className="text-xl font-bold text-white mt-2">{project.title}</h4>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Project Details & Technical Highlights */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                {project.metrics && (
                  <div className="mt-4 p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 text-xs font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {project.highlights && project.highlights.length > 0 && (
                  <div className="mt-5">
                    <h5 className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-2">
                      Key Highlights
                    </h5>
                    <ul className="space-y-2">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <h5 className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-3">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-800 text-slate-200 text-xs font-mono rounded-lg border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="mt-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-500/20"
                    >
                      Open Live Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
