import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Briefcase,
  ChevronRight,
  Code2,
  CheckCircle2,
  Download
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { Hero3DCanvas } from '../components/Hero3DCanvas';
import { TiltCard } from '../components/TiltCard';
import { NavigationTab, AccentColor, Project } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: NavigationTab) => void;
  accentColor: AccentColor;
  onOpenProjectPreview: (project: Project) => void;
  onOpenResume: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  accentColor,
  onOpenProjectPreview,
  onOpenResume
}) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="space-y-24 pt-8 pb-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 text-blue-400 font-semibold tracking-widest text-xs uppercase">
              <span className="w-8 h-[1px] bg-blue-500"></span> Available for Remote Work
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold leading-[0.95] tracking-tight text-white">
                I'm <span className="text-gradient">Ahmad Ali</span>,<br />
                Frontend Developer.
              </h1>
            </div>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal max-w-xl">
              Building fast, responsive, and AI-assisted digital experiences with high-end agency polish.
            </p>

            {/* Direct Quick Contact Specs */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onSelectTab('projects')}
                className="px-8 py-4 bg-white text-black font-bold rounded-xl text-sm hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectTab('contact')}
                className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded-xl text-sm font-bold text-white transition-all"
              >
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-4 rounded-xl bg-white/5 text-gray-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Resume CV</span>
              </button>
            </div>

            {/* Skill Pills */}
            <div className="pt-4 flex gap-2.5 flex-wrap">
              <div className="skill-pill">React</div>
              <div className="skill-pill">TypeScript</div>
              <div className="skill-pill">Next.js</div>
              <div className="skill-pill">Framer Motion</div>
              <div className="skill-pill">Tailwind CSS</div>
              <div className="skill-pill">Node.js</div>
            </div>
          </motion.div>

          {/* Right 3D Animated Object Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-cyan-500/10 via-slate-900/40 to-slate-950/80 rounded-3xl p-2 border border-slate-800/80 backdrop-blur-xl shadow-2xl overflow-hidden">
              <Hero3DCanvas accentColor={accentColor} />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-950/90 border border-slate-800 text-center backdrop-blur-md">
                <p className="text-[11px] font-mono text-cyan-400 font-semibold">
                  Interactive 3D WebGL Engine
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Drag or hover cursor to rotate 3D crystal core
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS TICKER GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <TiltCard key={idx} className="p-5 text-center">
            <h3 className="text-3xl sm:text-4xl font-black text-gradient">
              {stat.value}
            </h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-2">{stat.label}</p>
          </TiltCard>
        ))}
      </section>

      {/* FEATURED PROJECTS SPOTLIGHT */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              Live Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Featured Client Engineering Projects
            </h2>
          </div>
          <button
            onClick={() => onSelectTab('projects')}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group"
          >
            <span>Explore All 12 Projects</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <TiltCard key={project.id} className="flex flex-col justify-between h-full">
              <div>
                <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-5 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md text-cyan-300 text-xs font-semibold rounded-lg border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-slate-800 text-slate-300 text-[10px] font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                  <button
                    onClick={() => onOpenProjectPreview(project)}
                    className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    Interactive Preview
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors shadow-md shadow-cyan-500/20"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* QUICK WORK PRINCIPLES */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden backdrop-blur-xl">
        <div className="max-w-3xl space-y-4">
          <span className="px-3.5 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/20">
            Why Work With Ahmad Ali?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Speed, AI Workflows, and Saudi Remote Operations
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            1+ years of experience delivering 45+ projects across logistics, fashion e-commerce, and healthcare. Proven remote reliability for Saudi Arabian corporate clients like Prime Logistics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Pixel-Perfect Mobile Responsiveness</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Fast Vercel & GitHub Deployments</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>AI-Accelerated Quality Assurance</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Cross-Browser & Low Latency Code</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
