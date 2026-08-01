import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Sparkles,
  Palette,
  FileText,
  Volume2,
  VolumeX,
  Code2,
  PhoneCall
} from 'lucide-react';
import { NavigationTab, AccentColor } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  accentColor: AccentColor;
  onChangeAccent: (color: AccentColor) => void;
  onOpenResume: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

const NAV_ITEMS: { id: NavigationTab; label: string; badge?: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects', badge: '12' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' }
];

const ACCENT_COLORS: { id: AccentColor; label: string; bgClass: string }[] = [
  { id: 'cyan', label: 'Electric Cyan', bgClass: 'bg-cyan-500' },
  { id: 'violet', label: 'Quantum Violet', bgClass: 'bg-purple-500' },
  { id: 'emerald', label: 'Matrix Emerald', bgClass: 'bg-emerald-500' },
  { id: 'amber', label: 'Solar Amber', bgClass: 'bg-amber-500' }
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  accentColor,
  onChangeAccent,
  onOpenResume,
  soundEnabled,
  onToggleSound
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: NavigationTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-slate-950/40 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Status */}
        <div className="flex items-center gap-3">
          <Logo
            size="md"
            onClick={() => handleNavClick('home')}
          />
          <span className="hidden md:inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse mr-1.5" />
            Available for Remote Work
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white font-bold bg-white/15 border border-white/20 shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      isActive
                        ? 'bg-blue-500 text-white font-mono'
                        : 'bg-white/10 text-gray-300 font-mono'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls (Theme, Resume, Sound, Mobile Menu) */}
        <div className="flex items-center gap-2">
          {/* Theme Color Selector Toggle */}
          <div className="relative">
            <button
              onClick={() => setThemePickerOpen(!themePickerOpen)}
              title="Change Theme Accent"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
            >
              <Palette className="w-4 h-4 text-cyan-400" />
            </button>

            <AnimatePresence>
              {themePickerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-44 p-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 space-y-1"
                >
                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Accent Glow
                  </div>
                  {ACCENT_COLORS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onChangeAccent(c.id);
                        setThemePickerOpen(false);
                      }}
                      className={`w-full px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                        accentColor === c.id
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${c.bgClass}`} />
                        {c.label}
                      </span>
                      {accentColor === c.id && <Sparkles className="w-3 h-3 text-cyan-400" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sound FX Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute Interface Audio' : 'Enable Audio Feedback'}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors hidden sm:flex"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Digital CV Modal Button */}
          <button
            onClick={onOpenResume}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-cyan-500/50 text-xs font-bold flex items-center gap-1.5 transition-all hidden sm:flex"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>CV</span>
          </button>

          {/* Contact Me / Hire Me CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="accent-gradient px-5 py-2 rounded-full font-bold text-xs text-white shadow-lg shadow-blue-500/20 hover:opacity-95 transition-all flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hire Me</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white xl:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl px-4 pt-3 pb-6"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-950/30 text-current font-mono">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 bg-slate-900 text-slate-200 border border-slate-800 text-xs font-bold rounded-xl flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" /> View Digital CV
              </button>

              <button
                onClick={onToggleSound}
                className="px-4 py-2 bg-slate-900 text-slate-200 border border-slate-800 text-xs font-bold rounded-xl flex items-center gap-2"
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-4 h-4 text-cyan-400" /> Audio On
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-slate-500" /> Audio Muted
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
