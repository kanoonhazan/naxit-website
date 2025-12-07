import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    projectType: 'UI/UX Design',
    message: ''
  });

  // Check for success redirect
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setSubmitted(true);
    }
  }, []);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-naxit-violet/10 via-naxit-bg to-naxit-cyan/5 pointer-events-none" />

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-naxit-violet/20 shadow-2xl"
        >

          {!submitted ? (
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">Got a project that needs <span className="text-naxit-primary">native-level</span> thinking?</h2>
                <p className="text-naxit-muted mb-8">
                  Fill out the form to request an estimate or schedule a free 20-minute scoping call. We usually reply within 48 hours.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img src="https://picsum.photos/100/100?random=10" alt="Founder" className="w-12 h-12 rounded-full border-2 border-naxit-cyan" />
                    <div>
                      <div className="font-bold text-white">Alex Chen</div>
                      <div className="text-xs text-naxit-muted">Technical Lead & Founder</div>
                    </div>
                  </div>
                  <blockquote className="text-sm italic text-gray-400 border-l-2 border-naxit-primary pl-4">
                    "We promise no account manager fluff. You'll speak directly with a builder."
                  </blockquote>
                </div>
              </div>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                {/* Web3Forms Configuration */}
                {/* User must replace this value with their Access Key from https://web3forms.com/ */}
                <input type="hidden" name="access_key" value="576c7a2a-6e5f-4c5c-816c-83cf1913a6c5" />

                <input type="hidden" name="subject" value="New Estimate Request - NAXIT" />
                <input type="hidden" name="redirect" value="http://localhost:3000/work?success=true" />
                <input type="hidden" name="from_name" value="NAXIT Website" />

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-naxit-primary transition-colors focus:bg-black/50"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-naxit-primary transition-colors focus:bg-black/50"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-naxit-primary transition-colors focus:bg-black/50"
                      placeholder="+1 (555) 000-0000"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Project Type</label>
                  <div className="relative">
                    <select
                      name="project_type"
                      className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-naxit-primary transition-colors appearance-none focus:bg-black/50"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option>UI/UX Design</option>
                      <option>Brand Identity</option>
                      <option>Embedded GUI (Nextion/LVGL)</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-3 top-3.5 pointer-events-none text-gray-400">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Brief Description / Client Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-naxit-primary transition-colors focus:bg-black/50"
                    placeholder="Tell us about your project goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full mt-4" icon={Send}>
                  Request Estimate
                </Button>
                <p className="text-xs text-center text-gray-500 mt-2">NDA available upon request.</p>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
              <p className="text-naxit-muted max-w-md mx-auto">
                Thanks for reaching out. We've sent a confirmation email to your inbox. We'll be in touch shortly to schedule your call.
              </p>
              <Button variant="secondary" className="mt-8" onClick={() => {
                setSubmitted(false);
                window.history.replaceState({}, '', '/');
              }}>
                Send another message
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};