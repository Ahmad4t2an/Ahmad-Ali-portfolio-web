import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Globe2,
  Briefcase,
  CheckCircle2,
  Award,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Code2,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';

interface AboutViewProps {
  onOpenResume: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenResume }) => {
  return (
    <div className="space-y-16 pt-6 pb-16">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
          About Ahmad Ali
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Frontend Developer with a Passion for Performance & 3D Interactive Design
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Based in Bahawalpur, Pakistan • Remote Web Operations for Saudi Arabia & Global Brands
        </p>
      </div>

      {/* MAIN PROFILE SUMMARY CARD */}
      <TiltCard className="p-8 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Code2 className="w-6 h-6" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-white">Full Professional Profile</h2>
                <p className="text-xs text-slate-400">Ahmad Ali — Frontend Web Developer</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" /> Download / Print Digital CV
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" /> Direct Inquiry
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Quick Facts
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Name:</span>
                <span className="font-bold text-white">{PERSONAL_INFO.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Location:</span>
                <span className="font-bold text-white">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Experience:</span>
                <span className="font-bold text-cyan-400">1+ Years Hands-On</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Completed Projects:</span>
                <span className="font-bold text-white">45+ Websites & Apps</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Key Remote Partner:</span>
                <span className="font-bold text-cyan-300">Prime Logistics (Saudi Arabia)</span>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>

      {/* EDUCATION & LANGUAGES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* EDUCATION */}
        <TiltCard className="p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <GraduationCap className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">Academic Education</h3>
              <p className="text-xs text-slate-400">Formal Qualifications</p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {PERSONAL_INFO.education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                  <span className="text-xs text-cyan-400 font-mono bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-semibold">{edu.institution}</p>
                <p className="text-xs text-slate-400 mt-2">{edu.details}</p>
              </div>
            ))}
          </div>
        </TiltCard>

        {/* LANGUAGES */}
        <TiltCard className="p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Globe2 className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">Languages & Communication</h3>
              <p className="text-xs text-slate-400">Fluency for Remote Client Work</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {PERSONAL_INFO.languages.map((lang, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{lang.name}</h4>
                  <p className="text-xs text-slate-400">{lang.proficiency}</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            ))}
          </div>
        </TiltCard>
      </div>

      {/* CORE WORK PILLARS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
          Key Engineering Principles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-mono font-bold text-xs">
              01
            </span>
            <h3 className="text-sm font-bold text-white">Mobile-First Standard</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every interface is crafted for flawless scaling across small smartphone displays up to ultra-wide desktop displays.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-mono font-bold text-xs">
              02
            </span>
            <h3 className="text-sm font-bold text-white">AI-Assisted Efficiency</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Utilizing modern AI tools to accelerate coding speed, write unit tests, and resolve cross-browser quirks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-mono font-bold text-xs">
              03
            </span>
            <h3 className="text-sm font-bold text-white">3D & Micro-Interactions</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enhancing corporate branding with smooth Framer Motion and WebGL 3D interactive canvases.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-mono font-bold text-xs">
              04
            </span>
            <h3 className="text-sm font-bold text-white">Rapid CI/CD Deployment</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fast, reliable hosting setup on Vercel and GitHub Pages with zero operational downtime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
