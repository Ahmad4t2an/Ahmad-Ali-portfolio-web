import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, CheckCircle2, Plus, Sparkles, ExternalLink } from 'lucide-react';
import { Certification } from '../types';

interface CertificateModalProps {
  certificate: Certification | null;
  onClose: () => void;
  onAddCertificate?: (newCert: Certification) => void;
  isAddMode?: boolean;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
  onAddCertificate,
  isAddMode = false
}) => {
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    date: '2026',
    description: '',
    skillsLearned: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.issuer) return;

    const newCert: Certification = {
      id: `cert-${Date.now()}`,
      title: formData.title,
      issuer: formData.issuer,
      date: formData.date || '2026',
      status: 'Completed',
      isPlaceholder: false,
      description: formData.description || 'Verified Certification Credential',
      skillsLearned: formData.skillsLearned
        ? formData.skillsLearned.split(',').map((s) => s.trim())
        : ['Frontend Web Development', 'React']
    };

    if (onAddCertificate) {
      onAddCertificate(newCert);
    }
    onClose();
  };

  if (!certificate && !isAddMode) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/60 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isAddMode ? (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Plus className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Add New Certificate</h3>
                  <p className="text-xs text-slate-400">Add or edit credentials for Ahmad Ali's portfolio</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    Certificate Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AWS Certified Developer"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                      Issuer / Academy *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Google / Coursera"
                      value={formData.issuer}
                      onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                      Year / Date
                    </label>
                    <input
                      type="text"
                      placeholder="2026"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief summary of skills mastered during certification..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    Skills Covered (Comma Separated)
                  </label>
                  <input
                    type="text"
                    placeholder="React, TypeScript, CSS Grid, SEO"
                    value={formData.skillsLearned}
                    onChange={(e) => setFormData({ ...formData, skillsLearned: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-3 bg-slate-800 text-slate-300 font-semibold rounded-xl hover:bg-slate-700 text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-sm shadow-lg shadow-cyan-500/20"
                  >
                    Save Certificate
                  </button>
                </div>
              </form>
            </div>
          ) : (
            certificate && (
              <div className="max-h-[85vh] overflow-y-auto pr-1">
                <div className="flex items-center gap-3 mb-6 pr-10">
                  <span className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Award className="w-8 h-8" />
                  </span>
                  <div className="min-w-0">
                    <span className="px-2.5 py-0.5 bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold rounded-full uppercase tracking-wider">
                      {certificate.status}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 break-words">{certificate.title}</h3>
                    <p className="text-xs text-slate-400">
                      Issued by <span className="text-cyan-400 font-semibold">{certificate.issuer}</span> • {certificate.date}
                    </p>
                  </div>
                </div>

                {certificate.image && (
                  <div className="mb-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/50">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}

                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-5 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Verify Credential
                  </a>
                )}

                <div className="space-y-4 text-sm text-slate-300">
                  <p className="leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                    {certificate.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Key Skills & Knowledge Validated
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {certificate.skillsLearned.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-cyan-500/20"
                  >
                    Close Certificate View
                  </button>
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
