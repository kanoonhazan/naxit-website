import React, { useEffect } from 'react';
import { Project } from '../../types';
import { Button } from '../ui/Button';
import { ArrowLeft, Calendar, Code, Layers, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}


export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="pt-24 pb-20 min-h-screen bg-naxit-bg"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Navigation */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-naxit-muted hover:text-white transition-colors group"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-naxit-primary/20 transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="font-medium">Back to Projects</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-naxit-violet/10 border border-naxit-violet/30 text-naxit-violet text-sm font-semibold">
              {project.category}
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-naxit-muted leading-relaxed">
              {project.fullDescription || project.problem}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* Stats */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex-1 min-w-[140px]">
                <div className="text-naxit-muted text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Layers size={14} /> Role
                </div>
                <div className="font-semibold text-white">{project.role || 'Design & Dev'}</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex-1 min-w-[140px]">
                <div className="text-naxit-muted text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Calendar size={14} /> Timeline
                </div>
                <div className="font-semibold text-white">{project.timeline || '4 Weeks'}</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-naxit-bg/80 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Detail Content */}
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">

            {/* Challenge */}
            <section>
              <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-red-500 rounded-full"></span>
                The Challenge
              </h3>
              <p className="text-naxit-text/80 leading-relaxed text-lg">
                {project.challenge || project.problem}
              </p>
            </section>

            {/* Approach */}
            <section>
              <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-naxit-cyan rounded-full"></span>
                Our Approach
              </h3>
              <p className="text-naxit-text/80 leading-relaxed text-lg">
                {project.approach || project.solution}
              </p>
            </section>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <section>
                <h3 className="font-display text-2xl font-bold mb-6">Visuals</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-white/10 shadow-lg group">
                      <img
                        src={img}
                        alt={`Gallery ${i}`}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tech Stack */}
            <div className="p-6 rounded-2xl bg-naxit-card border border-white/5">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Code size={18} className="text-naxit-primary" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack?.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
                    {tech}
                  </span>
                )) || <span className="text-gray-500 text-sm">Design Only</span>}
              </div>
            </div>

            {/* Outcome */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-naxit-violet/10 to-naxit-primary/5 border border-naxit-violet/20">
              <h4 className="font-bold mb-2 text-white">The Outcome</h4>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-naxit-violet to-naxit-cyan mb-2">
                {project.outcome}
              </div>
              <p className="text-sm text-naxit-muted">
                Measurable impact delivered upon project completion.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center p-6">
              <p className="text-sm text-gray-400 mb-4">Interested in similar results?</p>
              <Button className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Start a Conversation
              </Button>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
