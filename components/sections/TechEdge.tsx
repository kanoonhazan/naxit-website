import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const TechEdge: React.FC = () => {
  return (
    <section className="py-24 bg-naxit-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-cta-gradient" />

      <div className="container mx-auto px-8 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold mb-6">We speak <span className="text-naxit-cyan">Developer</span></h2>
          <p className="text-naxit-muted text-lg mb-8">
            Most designers throw screens over the wall. We build the wall.
            Our handoff process is automated, tokenized, and ready for production.
          </p>

          <motion.ul
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {[
              'Figma variables mapped to Tailwind Config',
              'Export-ready assets for Nextion HMI',
              'C-array generation for LVGL images',
              'Storybook documentation for React components'
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 p-0.5 rounded-full bg-naxit-violet/20 text-naxit-violet">
                  <Check size={14} />
                </div>
                <span className="text-gray-300">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Continuous floating animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl font-mono text-xs md:text-sm"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
              <span className="text-gray-400">tailwind.config.js</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
            </div>
            <div className="p-6 text-gray-300 overflow-x-auto">
              <pre>
                <code><span className="text-purple-400">module</span>.<span className="text-blue-400">exports</span> = {'{'}
                  <span className="text-green-400">theme</span>: {'{'}
                  <span className="text-green-400">extend</span>: {'{'}
                  <span className="text-green-400">colors</span>: {'{'}
                  <span className="text-gray-500">// Tokens synced from Figma</span>
                  <span className="text-blue-300">primary</span>: <span className="text-yellow-300">'{'{'}naxit.tokens.primary{'}'}'</span>,
                  <span className="text-blue-300">accent</span>: <span className="text-yellow-300">'{'{'}naxit.tokens.accent{'}'}'</span>,
                  {'}'},
                  <span className="text-green-400">borderRadius</span>: {'{'}
                  <span className="text-blue-300">xl</span>: <span className="text-yellow-300">'12px'</span>
                  {'}'}
                  {'}'}
                  {'}'}
                  {'}'}</code>
              </pre>
            </div>
            <div className="px-4 py-2 bg-[#161b22] border-t border-gray-800 text-gray-500 flex justify-between">
              <span>Ln 14, Col 22</span>
              <span>UTF-8</span>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 bg-naxit-primary text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg"
            animate={{ rotate: [3, 6, 3], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Ready for Handoff
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};