import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  Plus,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  FileCheck2,
  Lock,
  Edit3
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';
import { Certification } from '../types';

interface CertificationsViewProps {
  onOpenCertModal: (cert: Certification | null, isAddMode?: boolean) => void;
  customCertifications: Certification[];
}

export const CertificationsView: React.FC<CertificationsViewProps> = ({
  onOpenCertModal,
  customCertifications
}) => {
  const allCertificates = [...CERTIFICATIONS, ...customCertifications];

  return (
    <div className="space-y-12 pt-6 pb-16">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
          Credentials & Verifications
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Certifications & Professional Badges
        </h1>
        <p className="text-sm text-slate-300">
          Clean, expandable certificate slots ready for credential verification and image uploads
        </p>
      </div>

      {/* TOP ACTION BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Award className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-white">Certifications Registry</h3>
            <p className="text-xs text-slate-400">Total Verified / Active Slots: {allCertificates.length}</p>
          </div>
        </div>

        <button
          onClick={() => onOpenCertModal(null, true)}
          className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
        >
          <Plus className="w-4 h-4" /> Add / Upload New Certificate
        </button>
      </div>

      {/* CERTIFICATES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCertificates.map((cert) => (
          <TiltCard key={cert.id} className="flex flex-col justify-between h-full relative group">
            <div>
              {cert.image && (
                <button
                  onClick={() => onOpenCertModal(cert, false)}
                  className="block w-full mb-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950/50 aspect-[4/3]"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-cyan-950/60 text-cyan-300 text-[10px] font-mono font-semibold rounded-full border border-cyan-500/30">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-xs text-cyan-400 font-semibold mb-3">{cert.issuer}</p>

              <p className="text-xs text-slate-300 leading-relaxed mb-4 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                {cert.description}
              </p>
            </div>

            <div>
              <div className="space-y-1.5 mb-5">
                <p className="text-[10px] font-mono uppercase text-slate-400">Validated Skills</p>
                <div className="flex flex-wrap gap-1">
                  {cert.skillsLearned.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-800 text-slate-300 text-[10px] rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenCertModal(cert, false)}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-cyan-400" /> View Credential Details
              </button>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* CERTIFICATE PLACEHOLDER NOTICE */}
      <div className="p-8 rounded-3xl bg-slate-900/40 border border-dashed border-slate-800 text-center space-y-3">
        <Sparkles className="w-8 h-8 text-cyan-400 mx-auto" />
        <h3 className="text-lg font-bold text-white">Certificate Template Ready</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
          This certifications section is structured as a clean, ready-to-fill template. Ahmad Ali can easily append additional certifications or PDF certificate download links as new milestones are completed.
        </p>
      </div>
    </div>
  );
};
