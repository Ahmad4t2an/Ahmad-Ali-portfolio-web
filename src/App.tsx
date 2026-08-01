import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigationTab, AccentColor, Project, Certification } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThreeBackground } from './components/ThreeBackground';
import { ProjectPreviewModal } from './components/ProjectPreviewModal';
import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { SkillsView } from './views/SkillsView';
import { ExperienceView } from './views/ExperienceView';
import { ProjectsView } from './views/ProjectsView';
import { CertificationsView } from './views/CertificationsView';
import { GallerySection } from './views/GallerySection';
import { ContactView } from './views/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [accentColor, setAccentColor] = useState<AccentColor>('cyan');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Modals state
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [certModal, setCertModal] = useState<{
    isOpen: boolean;
    cert: Certification | null;
    isAddMode: boolean;
  }>({
    isOpen: false,
    cert: null,
    isAddMode: false
  });

  const [customCertifications, setCustomCertifications] = useState<Certification[]>([]);

  // Soft Web Audio API feedback on click if sound is enabled
  const playSoftClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch {
      // Ignore audio policy restrictions
    }
  };

  const handleSelectTab = (tab: NavigationTab) => {
    playSoftClickSound();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddCustomCert = (newCert: Certification) => {
    setCustomCertifications((prev) => [newCert, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
      {/* Sophisticated Dark Ambient Radial Blobs */}
      <div className="blob fixed -top-24 -right-24" />
      <div className="blob fixed -bottom-24 -left-24" />

      {/* 3D WebGL Background Canvas */}
      <ThreeBackground accentColor={accentColor} />

      {/* Main Glass Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        accentColor={accentColor}
        onChangeAccent={(color) => {
          playSoftClickSound();
          setAccentColor(color);
        }}
        onOpenResume={() => setIsResumeOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      {/* Main Page View Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-[85vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && (
              <HomeView
                onSelectTab={handleSelectTab}
                accentColor={accentColor}
                onOpenProjectPreview={(p) => setPreviewProject(p)}
                onOpenResume={() => setIsResumeOpen(true)}
              />
            )}

            {activeTab === 'about' && (
              <AboutView onOpenResume={() => setIsResumeOpen(true)} />
            )}

            {activeTab === 'skills' && <SkillsView />}

            {activeTab === 'experience' && <ExperienceView />}

            {activeTab === 'projects' && (
              <ProjectsView onOpenProjectPreview={(p) => setPreviewProject(p)} />
            )}

            {activeTab === 'certifications' && (
              <CertificationsView
                onOpenCertModal={(cert, isAddMode = false) => {
                  setCertModal({ isOpen: true, cert, isAddMode });
                }}
                customCertifications={customCertifications}
              />
            )}

            {activeTab === 'gallery' && <GallerySection />}

            {activeTab === 'contact' && <ContactView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Modals */}
      <ProjectPreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />

      <CertificateModal
        certificate={certModal.cert}
        isAddMode={certModal.isAddMode}
        onClose={() => setCertModal({ isOpen: false, cert: null, isAddMode: false })}
        onAddCertificate={handleAddCustomCert}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
