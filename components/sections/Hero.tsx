import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Palette, Sparkles, Globe, Monitor, Layers, Code2, Cpu, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  // Radial Layout Anchors (Non-Negotiable Geometry)
  const ANCHORS = {
    branding: { x: '22%', y: '22%' },
    website: { x: '78%', y: '22%' },
    uiux: { x: '22%', y: '78%' },
    embedded: { x: '78%', y: '78%' },
    core: { x: '50%', y: '50%' }
  };

  const SAFE_RADIUS = 35; // % for particle containment
  return (
    <section id="hero" className="relative min-h-screen flex pt-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-naxit-violet/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-naxit-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-12 lg:px-16 grid lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-naxit-cyan font-medium">
            <span className="w-2 h-2 rounded-full bg-naxit-primary animate-pulse"></span>
            Accepting new projects for Q4
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500">Digital Systems Partner</span> for Small & Medium Businesses
          </h1>

          <p className="text-lg lg:text-xl text-naxit-muted max-w-xl leading-relaxed">
            We design brands, build websites, craft intuitive user experiences, and develop embedded interfaces — strategically combined to solve real business problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Build your digital system
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
              See case studies
            </Button>
          </div>

          <p className="text-sm text-naxit-muted flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Free 20-min strategy call · NDA available
          </p>
        </motion.div>

        {/* Visual System - Radial Architecture */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-w-[550px] lg:-ml-24 lg:-mt-24 mx-auto">

            {/* SVG Connection Lines - layer-lines (z-10) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Line: Branding → Core */}
              <motion.line
                x1={ANCHORS.branding.x} y1={ANCHORS.branding.y}
                x2={ANCHORS.core.x} y2={ANCHORS.core.y}
                stroke="url(#grad1)" strokeWidth="3" filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.6, 0.9, 0.6] }}
                transition={{
                  pathLength: { duration: 2, delay: 1 },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              {/* Line: Website → Core */}
              <motion.line
                x1={ANCHORS.website.x} y1={ANCHORS.website.y}
                x2={ANCHORS.core.x} y2={ANCHORS.core.y}
                stroke="url(#grad2)" strokeWidth="3" filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.6, 0.9, 0.6] }}
                transition={{
                  pathLength: { duration: 2, delay: 1.3 },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
              />

              {/* Line: UI/UX → Core */}
              <motion.line
                x1={ANCHORS.uiux.x} y1={ANCHORS.uiux.y}
                x2={ANCHORS.core.x} y2={ANCHORS.core.y}
                stroke="url(#grad3)" strokeWidth="3" filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.6, 0.9, 0.6] }}
                transition={{
                  pathLength: { duration: 2, delay: 1.6 },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
              />

              {/* Line: Embedded → Core */}
              <motion.line
                x1={ANCHORS.embedded.x} y1={ANCHORS.embedded.y}
                x2={ANCHORS.core.x} y2={ANCHORS.core.y}
                stroke="url(#grad4)" strokeWidth="3" filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.6, 0.9, 0.6] }}
                transition={{
                  pathLength: { duration: 2, delay: 1.9 },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
              />
            </svg>

            {/* Service Cards - layer-cards (z-20) */}

            {/* Card: Branding */}
            <motion.div
              style={{ left: ANCHORS.branding.x, top: ANCHORS.branding.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-40 h-36 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl border border-indigo-500/30 shadow-2xl overflow-hidden group z-20"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.6)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              />
              <div className="relative p-4 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-indigo-500/20 rounded-lg border border-indigo-500/30">
                    <Palette className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-3 bg-gradient-to-r from-indigo-500/60 to-purple-500/40 rounded-full" />
                    <Sparkles className="w-3 h-3 text-indigo-400/60" />
                  </div>
                  <div className="w-16 h-2 bg-gradient-to-r from-indigo-400/40 to-transparent rounded-full" />
                  <div className="flex gap-1.5 mt-3">
                    {[0, 0.3, 0.6].map((delay, i) => (
                      <motion.div
                        key={i}
                        className={`w-6 h-6 rounded-lg bg-gradient-to-br ${i === 0 ? 'from-indigo-500 to-indigo-600' :
                          i === 1 ? 'from-purple-500 to-purple-600' :
                            'from-pink-500 to-pink-600'
                          } shadow-lg`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card: Website */}
            <motion.div
              style={{ left: ANCHORS.website.x, top: ANCHORS.website.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-44 h-40 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden group z-20"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.6)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
              />
              <div className="relative p-4 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex gap-1">
                    {[0.6, 0.4, 0.2].map((opacity, i) => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full bg-blue-500`} style={{ opacity }} />
                    ))}
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-full bg-white/5 rounded-sm" />
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {[0, 0.5, 1].map((delay, i) => (
                      <motion.div
                        key={i}
                        className="h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-lg relative overflow-hidden"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay }}
                      >
                        {i === 0 && <Monitor className="w-4 h-4 text-blue-400/60 absolute top-1 left-1" />}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card: UI/UX */}
            <motion.div
              style={{ left: ANCHORS.uiux.x, top: ANCHORS.uiux.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-36 h-40 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden group z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.6)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
              <div className="relative p-4 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                    <Layers className="w-5 h-5 text-cyan-400" />
                  </div>
                  <Code2 className="w-4 h-4 text-cyan-400/40" />
                </div>
                <div className="space-y-3 flex-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + i * 0.3 }}
                    >
                      <motion.div
                        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${i === 1 ? 'border-cyan-500/60 bg-cyan-500/20' : 'border-cyan-500/40'
                          }`}
                        animate={i === 1 ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {i === 1 && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                      </motion.div>
                      <motion.div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-1/3"
                          animate={{ x: ['-100%', '300%'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card: Embedded */}
            <motion.div
              style={{ left: ANCHORS.embedded.x, top: ANCHORS.embedded.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-40 h-32 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden group z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.6)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2.5 }}
              />
              <div className="relative p-4 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <Cpu className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-5 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-1 bg-purple-500/30 rounded"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-12 bg-gradient-to-r from-purple-500/25 via-violet-500/15 to-transparent rounded-lg relative overflow-hidden border border-purple-500/20">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 flex items-end gap-1">
                      {[40, 70, 30, 90, 50, 60].map((height, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-purple-400/60 rounded-sm"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: 2 + i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Central Core System - layer-core (z-30) - SINGLE UNIFIED HUB */}
            <motion.div
              style={{ left: ANCHORS.core.x, top: ANCHORS.core.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-40 h-40 z-30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Outer glow layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-cyan-500/30 to-indigo-500/20 rounded-full blur-3xl" />
              <div className="absolute inset-6 bg-gradient-to-br from-blue-400/50 via-cyan-400/40 to-indigo-400/30 rounded-full blur-2xl" />

              {/* Rotating orbital ring */}
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-dashed border-cyan-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Junction hub with rotating ring */}
              <motion.div
                className="absolute inset-10 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full border-2 border-white/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner core with icon */}
              <div className="absolute inset-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/50 shadow-2xl">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Energy ripples */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`ripple-${i}`}
                  className="absolute inset-0 border-2 border-cyan-400/40 rounded-full"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
                />
              ))}
            </motion.div>

            {/* Flowing Particles - layer-fx (z-40) */}
            {[
              { from: ANCHORS.branding, color: 'indigo', delay: 3 },
              { from: ANCHORS.website, color: 'blue', delay: 3.5 },
              { from: ANCHORS.uiux, color: 'cyan', delay: 4 },
              { from: ANCHORS.embedded, color: 'purple', delay: 4.5 }
            ].map((particle, idx) => (
              <motion.div
                key={idx}
                className={`absolute w-3 h-3 rounded-full bg-${particle.color}-400 blur-sm shadow-lg shadow-${particle.color}-500/50 z-40`}
                style={{ left: particle.from.x, top: particle.from.y }}
                animate={{
                  x: [0, `${parseFloat(ANCHORS.core.x) - parseFloat(particle.from.x)}%`],
                  y: [0, `${parseFloat(ANCHORS.core.y) - parseFloat(particle.from.y)}%`],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: particle.delay }}
              />
            ))}

            {/* Contained Ambient Sparkles - layer-fx (z-40) */}
            {[...Array(6)].map((_, i) => {
              const angle = (i / 6) * 360 * (Math.PI / 180);
              const radius = SAFE_RADIUS * 0.7; // Stay well within safe zone
              return (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-1 h-1 bg-cyan-400/80 rounded-full z-40"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * radius}%)`,
                    top: `calc(50% + ${Math.sin(angle) * radius}%)`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                />
              );
            })}

          </div>
        </motion.div>
      </div>
    </section>
  );
};