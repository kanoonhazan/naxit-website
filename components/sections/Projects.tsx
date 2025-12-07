import React from 'react';
import { Card } from '../ui/Card';
import { ArrowUpRight } from 'lucide-react';
import { useProjects } from '../../context/ProjectContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const Projects: React.FC = () => {
  const { projects } = useProjects();
  // Show only featured projects
  const featuredProjects = projects.filter(p => p.isFeatured);

  return (
    <section id="work" className="py-24 bg-naxit-bg">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="font-display text-4xl font-bold mb-2">Featured Projects</h2>
            <p className="text-naxit-muted">Solving complex problems with clean interfaces.</p>
          </div>
          <Link to="/work" className="hidden md:flex items-center gap-2 text-naxit-primary hover:text-white transition-colors font-medium">
            View all case studies <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              variants={cardVariants}
              className="p-0 overflow-hidden group cursor-pointer border-0 ring-1 ring-white/10 hover:ring-naxit-violet/50 transition-all duration-300"
            >
              <Link to={`/project/${project.id}`} className="h-full block">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-naxit-bg via-transparent to-transparent opacity-80 z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs border border-white/10 text-white">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 relative z-20 -mt-12 bg-naxit-bg">
                  <h3 className="text-2xl font-bold font-display mb-4 text-white group-hover:text-naxit-cyan transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-4 text-sm text-gray-400">
                    <div>
                      <strong className="block text-naxit-muted text-xs uppercase tracking-wide mb-1">Problem</strong>
                      {project.problem}
                    </div>
                    <div>
                      <strong className="block text-naxit-muted text-xs uppercase tracking-wide mb-1">Outcome</strong>
                      <span className="text-naxit-primary font-semibold">{project.outcome}</span>
                    </div>
                    <div className="pt-2 text-naxit-cyan text-xs font-bold uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                      View Case Study <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </motion.div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/work" className="flex items-center gap-2 mx-auto text-naxit-primary font-medium">
            View all case studies <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};