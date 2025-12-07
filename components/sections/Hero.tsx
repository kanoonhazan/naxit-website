import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
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
            Design that <span className="text-transparent bg-clip-text bg-gradient-to-r from-naxit-violet via-naxit-primary to-naxit-cyan">engineers can ship</span> — fast.
          </h1>

          <p className="text-lg lg:text-xl text-naxit-muted max-w-xl leading-relaxed">
            From brand systems to embedded GUIs (Nextion, LVGL), we’re the bridge between product teams and production. No fluff, just native-ready assets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get a project estimate
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

        {/* Visual Content - Abstract UI Interface */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Decorative shapes simulating layers */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/10"
            />

            {/* Main Device Mockup Area */}
            <div className="absolute inset-4 bg-naxit-card rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
              {/* Fake UI Header */}
              <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>

              {/* Fake UI Body */}
              <div className="p-6 relative flex-1">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1/3 h-24 rounded-xl bg-white/5 animate-pulse" />
                    <div className="w-2/3 space-y-3">
                      <div className="h-4 w-3/4 bg-white/10 rounded" />
                      <div className="h-4 w-1/2 bg-white/10 rounded" />
                      <div className="h-8 w-1/3 bg-naxit-primary/20 rounded mt-2" />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="p-4 rounded-xl bg-gradient-to-br from-naxit-card to-black border border-naxit-violet/30 absolute top-1/2 right-8 shadow-xl backdrop-blur-md"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-1 bg-naxit-violet rounded">
                        <Play size={12} className="text-white" />
                      </div>
                      <span className="text-xs font-mono text-naxit-violet">System.Render()</span>
                    </div>
                    <div className="h-1 w-24 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-naxit-cyan"
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};