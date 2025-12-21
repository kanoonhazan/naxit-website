import React from 'react';
import { TrendingUp, Users, Box, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface Outcome {
    icon: React.ElementType;
    title: string;
    description: string;
    details: string[];
}

const outcomes: Outcome[] = [
    {
        icon: TrendingUp,
        title: 'More Qualified Leads',
        description: 'Your website and funnels are designed to guide users toward action — not just attract visits.',
        details: [
            'Conversion-focused design',
            'Strategic CTAs placement',
            'Lead capture optimization'
        ]
    },
    {
        icon: Users,
        title: 'Stronger Engagement',
        description: 'Clear flows and intentional UX keep users moving forward instead of dropping off.',
        details: [
            'Intuitive user journeys',
            'Reduced bounce rates',
            'Higher time on page'
        ]
    },
    {
        icon: Box,
        title: 'Product Clarity',
        description: 'Interfaces that teams understand, developers maintain, and users trust — across web and embedded systems.',
        details: [
            'Developer-ready assets',
            'Maintainable code structure',
            'Cross-platform consistency'
        ]
    },
    {
        icon: Sparkles,
        title: 'Lasting Brand Recall',
        description: 'Consistent identity and design systems that make your business recognizable across every touchpoint.',
        details: [
            'Cohesive brand identity',
            'Design system scalability',
            'Multi-channel presence'
        ]
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

export const TechEdge: React.FC = () => {
    return (
        <section className="py-24 bg-naxit-bg relative overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-naxit-primary via-naxit-cyan to-naxit-violet" />

            <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="font-display text-4xl font-bold mb-4">
                        Outcomes You Can <span className="text-naxit-cyan">Expect</span>
                    </h2>
                    <p className="text-naxit-muted text-lg">
                        Real results, not decorative deliverables. Instead of listing features, here's what changes after working with NAXIT:
                    </p>
                </motion.div>

                {/* Outcomes Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {outcomes.map((outcome, index) => (
                        <Card
                            key={index}
                            hoverEffect
                            variants={itemVariants}
                            className="flex flex-col h-full group"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-naxit-primary/20 transition-colors duration-300">
                                <outcome.icon className="w-6 h-6 text-naxit-primary group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 font-display">{outcome.title}</h3>

                            {/* Description */}
                            <p className="text-sm text-naxit-muted mb-6 flex-grow">{outcome.description}</p>

                            {/* Details List */}
                            <ul className="space-y-2">
                                {outcome.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center text-xs text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-naxit-cyan mr-2"></span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
