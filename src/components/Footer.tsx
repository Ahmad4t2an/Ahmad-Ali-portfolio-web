import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart, Sparkles, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NavigationTab } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  onSelectTab: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-16 pb-12 overflow-hidden z-10">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" onClick={() => onSelectTab('home')} />

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Specialized in engineering fast, mobile-first, 3D animated web platforms and e-commerce storefronts for global logistics, fashion, and technology leaders.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-colors"
                title="WhatsApp Direct Chat"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => onSelectTab('home')} className="text-left text-gray-400 hover:text-white transition-colors">Home</button>
              <button onClick={() => onSelectTab('about')} className="text-left text-gray-400 hover:text-white transition-colors">About Me</button>
              <button onClick={() => onSelectTab('skills')} className="text-left text-gray-400 hover:text-white transition-colors">Skills & Stack</button>
              <button onClick={() => onSelectTab('experience')} className="text-left text-gray-400 hover:text-white transition-colors">Experience</button>
              <button onClick={() => onSelectTab('projects')} className="text-left text-gray-400 hover:text-white transition-colors">Projects (12)</button>
              <button onClick={() => onSelectTab('certifications')} className="text-left text-gray-400 hover:text-white transition-colors">Certifications</button>
              <button onClick={() => onSelectTab('gallery')} className="text-left text-gray-400 hover:text-white transition-colors">UI Gallery</button>
              <button onClick={() => onSelectTab('contact')} className="text-left text-gray-400 hover:text-white transition-colors">Contact</button>
            </div>
          </div>

          {/* Direct Location & Contacts */}
          <div className="md:col-span-3 space-y-4">
            <div className="space-y-1">
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Current Location</div>
              <div className="text-sm font-semibold text-white">Bahawalpur, Pakistan <span className="text-blue-500">•</span> Remote</div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Email</div>
              <div className="text-sm font-semibold text-white">{PERSONAL_INFO.email}</div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Phone</div>
              <div className="text-sm font-semibold text-white">{PERSONAL_INFO.phone}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
          <p>
            Ahmad Ali &copy; 2026. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1 text-gray-400 normal-case tracking-normal">
            Engineered with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> using React, Tailwind & 3D WebGL
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all text-xs font-semibold normal-case tracking-normal"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
