import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, Image as ImageIcon, Tag } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = ['All', '3D Corporate', 'E-Commerce UI', 'Dashboards', 'Mobile Web'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="space-y-12 pt-6 pb-16">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
          UI/UX Showcase & Screenshots
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Responsive Interface Gallery
        </h1>
        <p className="text-sm text-slate-300">
          Pixel-perfect layout compositions, 3D components, and mobile design details
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-900/60 p-2 rounded-2xl border border-slate-800 w-fit mx-auto backdrop-blur-md">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === cat
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALLERY BENTO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl cursor-pointer"
            onClick={() => setActiveLightbox(item)}
          >
            {/* Image Container with Hover Zoom */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-cyan-300 text-[10px] font-semibold rounded-lg border border-cyan-500/30">
                {item.category}
              </span>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.caption}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {item.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-cyan-950/80 text-cyan-300 text-[10px] font-mono rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-950/80 hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{activeLightbox.title}</h3>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30">
                    {activeLightbox.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">{activeLightbox.caption}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
