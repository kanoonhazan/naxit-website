import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Compass, Rocket, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface Step {
    number: string;
    title: string;
    description: string;
    details: string;
    icon: React.ElementType;
    color: string;
    gradient: string;
}

const steps: Step[] = [
    {
        number: '01',
        title: 'Learn',
        description: 'We start by understanding the real problem — not just the request.',
        details: 'We review your business goals, technical constraints, users, and existing systems to define what success actually looks like.',
        icon: Search,
        color: 'indigo',
        gradient: 'from-indigo-500 to-blue-500'
    },
    {
        number: '02',
        title: 'Strategy',
        description: 'Decisions before design. Direction before execution.',
        details: 'We map user flows, define system boundaries, choose the right technologies, and align brand direction — so every design decision has a reason.',
        icon: Compass,
        color: 'blue',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        number: '03',
        title: 'Design & Build',
        description: 'Design that developers can ship without friction.',
        details: 'We iterate fast, validate early, and deliver structured, developer-ready assets — logic, components, and tokens, not just visuals.',
        icon: Rocket,
        color: 'cyan',
        gradient: 'from-cyan-500 to-teal-500'
    },
    {
        number: '04',
        title: 'Launch & Iterate',
        description: 'Launch is not the finish line.',
        details: 'We track performance, gather feedback, and refine where it matters — improving outcomes, not just aesthetics.',
        icon: TrendingUp,
        color: 'purple',
        gradient: 'from-purple-500 to-pink-500'
    }
];

export const HowWeWork: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: '-100px' });

    // Auto-progress through steps
    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 5000); // 5 seconds per step

        return () => clearInterval(interval);
    }, [isInView]);

    // Calculate progress percentage based on active step
    const progressPercentage = ((activeStep + 1) / steps.length) * 100;

    const handlePrevious = () => {
        setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    };

    const handleNext = () => {
        setActiveStep((prev) => (prev + 1) % steps.length);
    };

    return (
        <section id="process" className="py-24 bg-gradient-to-b from-black via-naxit-bg to-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-naxit-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-naxit-cyan/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="font-display text-4xl font-bold mb-4">
                        How We Work
                    </h2>
                    <p className="text-xl text-white/80 mb-6 font-medium">
                        Predictable process. Measurable progress.
                    </p>
                    <p className="text-lg text-naxit-muted leading-relaxed">
                        People don't buy services — they buy clarity and control.
                        Our process is designed to reduce uncertainty, align teams early, and keep delivery moving without surprises.
                    </p>
                </motion.div>

                {/* Horizontal Timeline */}
                <div ref={containerRef} className="relative max-w-7xl mx-auto">

                    {/* Horizontal Progress Line Container */}
                    <div className="relative mb-16">
                        {/* Background Line */}
                        <div className="absolute top-8 left-0 right-0 h-[2px] bg-white/5 rounded-full">
                            {/* Animated Progress Line */}
                            <motion.div
                                animate={{ width: `${progressPercentage}%` }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-naxit-primary via-naxit-cyan to-purple-500 relative rounded-full"
                            >
                                {/* Animated pulse at the end */}
                                <motion.div
                                    className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-naxit-cyan"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [1, 0.5, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-naxit-primary/40 via-naxit-cyan/40 to-purple-500/40 blur-sm rounded-full" />
                            </motion.div>
                        </div>

                        {/* Step Nodes */}
                        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
                            {steps.map((step, index) => {
                                const isActive = index === activeStep;
                                const isPassed = index < activeStep;

                                return (
                                    <div
                                        key={index}
                                        className="relative flex flex-col items-center cursor-pointer"
                                        onClick={() => setActiveStep(index)}
                                    >
                                        {/* Node */}
                                        <motion.div
                                            animate={{
                                                scale: isActive ? 1.15 : 1,
                                                opacity: isActive || isPassed ? 1 : 0.5
                                            }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                            className="relative w-16 h-16 mb-4"
                                        >
                                            {/* Active glow ring - only for active step */}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute inset-0 rounded-full border-2 border-naxit-cyan"
                                                    animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                />
                                            )}

                                            {/* Icon Container */}
                                            <motion.div
                                                animate={{
                                                    rotate: isActive ? 360 : 0,
                                                }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                                className={`w-full h-full rounded-full bg-gradient-to-br ${step.gradient} p-0.5 shadow-lg transition-shadow duration-300 ${isActive ? 'shadow-naxit-cyan/50' : 'shadow-transparent'
                                                    }`}
                                            >
                                                <div className="w-full h-full bg-naxit-bg rounded-full flex items-center justify-center">
                                                    <step.icon className={`w-7 h-7 transition-colors duration-300 ${isActive ? 'text-white' : isPassed ? 'text-white/80' : 'text-white/40'
                                                        }`} />
                                                </div>
                                            </motion.div>
                                        </motion.div>

                                        {/* Step Number Badge */}
                                        <motion.div
                                            animate={{
                                                opacity: isActive ? 1 : isPassed ? 0.7 : 0.4,
                                                scale: isActive ? 1.1 : 1
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={`text-xs font-mono tracking-wider ${isActive ? 'text-naxit-cyan' : 'text-naxit-cyan/60'
                                                }`}
                                        >
                                            STEP {step.number}
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Active Step Card with Navigation Arrows */}
                    <div className="relative max-w-5xl mx-auto flex items-center gap-4 md:gap-8">
                        {/* Left Arrow */}
                        <motion.button
                            whileHover={{ scale: 1.1, x: -4 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePrevious}
                            className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-naxit-primary/50 transition-all duration-300 shadow-lg hover:shadow-naxit-primary/20"
                        >
                            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                        </motion.button>

                        {/* Active Step Card */}
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="flex-1"
                        >
                            <motion.div
                                className="group relative bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl"
                            >
                                {/* Background shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                                />

                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].gradient} opacity-5`} />

                                <div className="relative">
                                    {/* Icon and Title */}
                                    <div className="flex items-start gap-6 mb-6">
                                        <motion.div
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${steps[activeStep].gradient} p-0.5 shadow-xl shadow-naxit-cyan/30`}
                                        >
                                            <div className="w-full h-full bg-naxit-bg rounded-[14px] flex items-center justify-center">
                                                {React.createElement(steps[activeStep].icon, { className: 'w-10 h-10 text-white' })}
                                            </div>
                                        </motion.div>

                                        <div className="flex-1">
                                            <div className="text-sm font-mono text-naxit-cyan/70 mb-2 tracking-wider">
                                                STEP {steps[activeStep].number}
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-naxit-cyan mb-4">
                                                {steps[activeStep].title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium leading-relaxed">
                                        {steps[activeStep].description}
                                    </p>

                                    {/* Details */}
                                    <p className="text-base md:text-lg text-naxit-muted leading-relaxed">
                                        {steps[activeStep].details}
                                    </p>

                                    {/* Decorative corner accent */}
                                    <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${steps[activeStep].gradient} opacity-10 rounded-tl-full`} />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Arrow */}
                        <motion.button
                            whileHover={{ scale: 1.1, x: 4 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNext}
                            className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-naxit-primary/50 transition-all duration-300 shadow-lg hover:shadow-naxit-primary/20"
                        >
                            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                        </motion.button>
                    </div>
                </div>

                {/* Result Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-20 relative"
                >
                    <div className="inline-block relative">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-naxit-primary/20 to-naxit-cyan/20 blur-xl rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <p className="relative text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-naxit-primary via-naxit-cyan to-purple-500 px-8 py-4">
                            Result: Fewer surprises. Faster decisions. Confident launches.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
