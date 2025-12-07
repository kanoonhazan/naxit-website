import React from 'react';
// Recharts removed in favor of custom CSS/Motion bars
import { Figma, Framer, Code, Cpu, Smartphone, Database } from 'lucide-react';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';

const data = [
  { name: 'Before', value: 40 },
  { name: 'NAXIT', value: 95 },
];

export const WhyNaxit: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-gradient-to-b from-naxit-bg to-black">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl font-bold mb-6">
              Design that reduces rework and <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-naxit-primary to-naxit-violet">accelerates release cycles.</span>
            </h2>
            <p className="text-naxit-muted text-lg mb-8">
              We understand the engineering constraints of embedded systems and web apps. We don't just hand off JPEGs; we hand off logic, tokens, and code-ready assets.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="p-4 rounded-xl bg-white/5 border-l-4 border-naxit-cyan"
              >
                <div className="text-3xl font-bold font-display text-white mb-1">2.5x</div>
                <div className="text-sm text-naxit-muted">Faster Handoff</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-4 rounded-xl bg-white/5 border-l-4 border-naxit-violet"
              >
                <div className="text-3xl font-bold font-display text-white mb-1">-40%</div>
                <div className="text-sm text-naxit-muted">Dev Rework</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="h-64 flex flex-col justify-center relative overflow-hidden bg-[#0a0f18] border-white/5" hoverEffect>
              <h3 className="text-center mb-8 text-sm font-mono tracking-widest text-gray-400 uppercase">ENGINEERING VELOCITY SCORE</h3>

              <div className="w-full max-w-md mx-auto space-y-6 px-4">

                {/* Before Bar */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-gray-400 font-medium">Before</span>
                    <span className="text-sm text-gray-400 font-bold">40%</span>
                  </div>
                  <div className="h-14 w-full bg-white/5 rounded-lg overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '40%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-[#374151] rounded-r-lg"
                    />
                  </div>
                </div>

                {/* NAXIT Bar */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-white font-bold">NAXIT</span>
                    <span className="text-sm text-white font-bold">95%</span>
                  </div>
                  <div className="h-14 w-full bg-white/5 rounded-lg overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#5b6bff] to-[#00d4ff] rounded-r-lg shadow-[0_0_20px_rgba(91,107,255,0.4)]"
                    />
                  </div>
                </div>

              </div>
            </Card>
          </motion.div>
        </div>

        {/* Logos / Tech Stack */}
        <div className="border-t border-white/5 pt-12">
          <p className="text-center text-sm text-naxit-muted mb-8 uppercase tracking-widest">Tools & Technologies we speak</p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80"
          >
            {/* Simple Icons representing the stack */}
            {[
              { Icon: Figma, name: 'Figma' },
              { Icon: Code, name: 'React' },
              { Icon: Smartphone, name: 'Nextion' },
              { Icon: Cpu, name: 'LVGL' },
              { Icon: Database, name: 'Sanity' },
              { Icon: Framer, name: 'Storybook' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 hover:text-naxit-cyan cursor-default"
              >
                <item.Icon size={32} />
                <span className="text-xs">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};