import React from 'react';
import { Card } from '../ui/Card';
import { Palette, Layout, Cpu, PenTool, ArrowRight, Globe, Layers } from 'lucide-react';
import { Service } from '../../types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services: Service[] = [
  {
    id: 'website',
    title: 'Website Development',
    description: 'Conversion-focused websites built to grow your business.',
    longDescription: 'Landing pages and business websites designed to get you discovered, capture leads, and drive action - optimized for speed, SEO, and performance from day one.',
    outcomes: ['Landing pages & business websites', 'Lead capture & contact flows', 'Analytics & performance tracking'],
    icon: Globe
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Design that engineers can ship without friction.',
    longDescription: 'We design user flows, interfaces, and design systems grounded in real user behavior and real development constraints - not just visuals that look good.',
    outcomes: ['User flows & journeys', 'High-fidelity wireframes & interfaces', 'Design systems with clean developer handoff'],
    icon: Layers
  },
  {
    id: 'embedded',
    title: 'Embedded Interfaces',
    description: 'Human-centric interfaces for machines.',
    longDescription: 'We design efficient, intuitive GUIs for embedded systems - balancing usability, performance, and hardware limitations across ESP32, Nextion, and LVGL environments.',
    outcomes: ['HMI & embedded UI design', 'Custom LVGL & Nextion interfaces', 'Hardware-aware, memory-efficient layouts'],
    icon: Cpu
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    description: 'Brands built to scale across digital touchpoints.',
    longDescription: 'We create clear, consistent brand systems that translate seamlessly across websites, products, and marketing - so your business looks sharp everywhere it shows up.',
    outcomes: ['Logo & visual identity systems', 'Design tokens & brand guidelines', 'Marketing assets, social kits & pitch decks'],
    icon: Palette
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