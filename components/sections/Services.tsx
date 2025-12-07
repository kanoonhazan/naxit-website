import React from 'react';
import { Card } from '../ui/Card';
import { Palette, Layout, Cpu, PenTool, ArrowRight } from 'lucide-react';
import { Service } from '../../types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services: Service[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Research-led interfaces that convert. We design logic, not just pretty screens.',
    outcomes: ['User Flows & Journeys', 'High-fidelity Wireframes', 'Interactive Prototypes'],
    icon: Layout
  },
  {
    id: 'branding',
    title: 'Brand Systems',
    description: 'Identity & visual systems that scale across digital and physical touchpoints.',
    outcomes: ['Logo & Identity', 'Design Tokens', 'Usage Guidelines'],
    icon: Palette
  },
  {
    id: 'gui',
    title: 'Embedded GUI',
    description: 'Specialized designs for low-resource hardware. Nextion & LVGL experts.',
    outcomes: ['HMI Interface Design', 'Memory Optimization', 'Hardware Integration'],
    icon: Cpu
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    description: 'On-brand visuals for marketing, social, and investor pitch decks.',
    outcomes: ['Marketing Assets', 'Social Media Kits', 'Pitch Decks'],
    icon: PenTool
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-naxit-bg relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl font-bold mb-4">Everything you need to <span className="text-naxit-cyan">go to market</span></h2>
          <p className="text-naxit-muted text-lg">We handle the full visual stack, from the logo on your website to the pixels on your hardware.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <Card
              key={service.id}
              hoverEffect
              variants={itemVariants}
              className="flex flex-col h-full group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-naxit-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-naxit-primary group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
              <p className="text-sm text-naxit-muted mb-6 flex-grow">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-center text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-naxit-cyan mr-2"></span>
                    {outcome}
                  </li>
                ))}
              </ul>

              <Link to={`/services/${service.id}`} className="flex items-center text-sm font-medium text-naxit-primary mt-auto cursor-pointer group-hover:gap-2 transition-all">
                View example <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};