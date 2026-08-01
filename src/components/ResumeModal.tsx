import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Mail, Phone, MapPin, Globe, CheckCircle2, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden my-auto"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Digital Curriculum Vitae — {PERSONAL_INFO.name}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" /> Print / Save PDF
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl bg-slate-800/60 hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900 text-slate-200" id="printable-cv">
            {/* CV Header */}
            <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
                <p className="text-cyan-400 font-semibold text-lg mt-1">{PERSONAL_INFO.title}</p>
                <p className="text-xs text-slate-400 mt-1 max-w-lg">{PERSONAL_INFO.tagline}</p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={`tel:${PERSONAL_INFO.phoneClean}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Saudi Arabia Remote Web Operations Specialist</span>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Professional Profile</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-slate-800/80">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Work Experience
              </h2>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="text-sm font-bold text-white">{exp.role} — <span className="text-cyan-300">{exp.company}</span></h3>
                      <span className="text-xs text-cyan-400 font-mono bg-cyan-950/50 px-2 py-0.5 rounded-md border border-cyan-500/20 w-fit">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-300">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="leading-normal">{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Overview */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Core Technical Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.key} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                    <h3 className="text-xs font-bold text-slate-200 mb-1.5">{cat.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s) => (
                        <span key={s.name} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-[11px] rounded font-mono">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
                <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Education
                </h2>
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <div key={idx} className="text-xs">
                    <p className="font-bold text-white">{edu.degree}</p>
                    <p className="text-slate-400">{edu.institution} ({edu.period})</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
                <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Languages</h2>
                <div className="space-y-1 text-xs">
                  {PERSONAL_INFO.languages.map((lang, idx) => (
                    <p key={idx} className="text-slate-300">
                      <span className="font-bold text-white">{lang.name}:</span> {lang.proficiency}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
