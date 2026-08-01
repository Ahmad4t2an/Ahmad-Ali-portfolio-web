import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Globe,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';

export const ExperienceView: React.FC = () => {
  return (
    <div className="space-y-12 pt-6 pb-16">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
          Professional Career Journey
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Work Experience & Web Operations History
        </h1>
        <p className="text-sm text-slate-300">
          Remote corporate operations for Saudi Arabia & regional e-commerce engineering
        </p>
      </div>

      {/* ANIMATED VERTICAL TIMELINE */}
      <div className="relative max-w-4xl mx-auto pl-4 sm:pl-8 space-y-12">
        {/* Vertical Glow Line */}
        <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 shadow-lg shadow-cyan-500/50" />

        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="relative pl-8 sm:pl-12"
          >
            {/* Illuminated Node Sphere */}
            <div className="absolute -left-3 sm:-left-3 top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Experience Card */}
            <TiltCard className="p-6 sm:p-8 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${exp.badgeColor}`}>
                      {exp.isRemote ? 'Remote Role' : 'On-Site / Agency'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {exp.period}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white">{exp.role}</h2>
                  <p className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 mt-0.5">
                    <Globe className="w-3.5 h-3.5" /> {exp.company}
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300 font-normal">{exp.location}</span>
                  </p>
                </div>
              </div>

              {/* Achievements Bullets */}
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="pt-2">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technologies & Operations Tools
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-800/80 text-slate-200 text-xs font-mono rounded-lg border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
