import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Layers,
  Database,
  Briefcase,
  CloudUpload,
  Search,
  Sparkles,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';

export const SkillsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeCategory !== 'all' && cat.key !== activeCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <div className="space-y-12 pt-6 pb-16">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
          Technical Stack & Capabilities
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Frontend, Mobile, Full-Stack & Operations Stack
        </h1>
        <p className="text-sm text-slate-300">
          Comprehensive skill inventory cultivated over 45+ real client deployments
        </p>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 backdrop-blur-xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
            }`}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skill (e.g. React)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* SKILL CARDS GRID */}
      <div className="space-y-10">
        {filteredCategories.map((cat) => {
          if (!cat) return null;
          return (
            <div key={cat.key} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <h2 className="text-lg font-bold text-white">{cat.title}</h2>
                <span className="text-xs text-slate-500 font-mono">({cat.skills.length})</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <TiltCard key={skill.name} className="p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{skill.name}</span>
                        </h3>
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>

                      {skill.description && (
                        <p className="text-xs text-slate-400 leading-normal mb-3">
                          {skill.description}
                        </p>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800/80">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* AI & DEVELOPMENT WORKFLOW HIGHLIGHT */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/20 flex items-center gap-1.5 w-fit">
            <Sparkles className="w-3.5 h-3.5" /> High Productivity Edge
          </span>
          <h3 className="text-xl font-bold text-white">AI-Assisted Web Engineering</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ahmad Ali integrates modern AI prompt-to-code iteration, automated bug diagnostics, and refactoring techniques to build robust web portals in fraction of traditional build times.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 text-center shrink-0 w-full sm:w-auto">
          <span className="text-2xl font-extrabold text-cyan-400 font-mono">3x Faster</span>
          <p className="text-[10px] text-slate-400">Deployment Velocity</p>
        </div>
      </section>
    </div>
  );
};
