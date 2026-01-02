import React, { useState, useEffect, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
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
        details: 'We map user flows, define system boundaries, choose the right technologies, and align brand direction — so every decision has a reason.',
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
    const containerRef = useRef<HTMLDivElement>(null);



    const handlePrevious = () => {
        setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    };

    const handleNext = () => {
        setActiveStep((prev) => (prev + 1) % steps.length);
    };

    // Handle swipe gestures on mobile
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const swipeThreshold = 50;
        if (info.offset.x > swipeThreshold) {
            handlePrevious();
        } else if (info.offset.x < -swipeThreshold) {
            handleNext();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section
            id="process"
            className="py-16 md:py-24 bg-gradient-to-b from-black via-naxit-bg to-black relative overflow-hidden"
            aria-label="How We Work Process"
        >
            {/* Background Effects */}
            <div className="absolute top-1/4 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-naxit-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-naxit-cyan/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        How We Work
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-4 md:mb-6 font-medium">
                        Predictable process. Measurable progress.
                    </p>
                    <p className="text-base md:text-lg text-naxit-muted leading-relaxed">
                        People don't buy services — they buy clarity and control.
                        Our process is designed to reduce uncertainty, align teams early, and keep delivery moving without surprises.
                    </p>
                </motion.div>

                {/* Horizontal Timeline */}
                <div ref={containerRef} className="relative max-w-7xl mx-auto">



                    {/* Active Step Card with Navigation Arrows */}
                    <div className="relative max-w-5xl mx-auto flex items-center gap-2 sm:gap-4 md:gap-8">
                        {/* Left Arrow */}
                        <motion.button
                            whileHover={{ scale: 1.1, x: -4 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePrevious}
                            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-naxit-primary/50 transition-all duration-300 shadow-lg hover:shadow-naxit-primary/20 touch-manipulation"
                            aria-label="Previous step"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                        </motion.button>

                        {/* Active Step Card */}
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={handleDragEnd}
                            className="flex-1 cursor-grab active:cursor-grabbing"
                        >
                            <motion.div
                                className="group relative bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl"
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
                                    <div className="flex items-start gap-4 md:gap-6 mb-4 md:mb-6">
                                        <motion.div
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${steps[activeStep].gradient} p-0.5 shadow-xl shadow-naxit-cyan/30`}
                                        >
                                            <div className="w-full h-full bg-naxit-bg rounded-[10px] md:rounded-[14px] flex items-center justify-center">
                                                {React.createElement(steps[activeStep].icon, { className: 'w-8 h-8 md:w-10 md:h-10 text-white' })}
                                            </div>
                                        </motion.div>

                                        <div className="flex-1">
                                            <div className="text-xs md:text-sm font-mono text-naxit-cyan/70 mb-1 md:mb-2 tracking-wider">
                                                STEP {steps[activeStep].number}
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-naxit-cyan mb-2 md:mb-4">
                                                {steps[activeStep].title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 md:mb-6 font-medium leading-relaxed">
                                        {steps[activeStep].description}
                                    </p>

                                    {/* Details */}
                                    <p className="text-sm sm:text-base md:text-lg text-naxit-muted leading-relaxed">
                                        {steps[activeStep].details}
                                    </p>

                                    {/* Decorative corner accent */}
                                    <div className={`absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tl ${steps[activeStep].gradient} opacity-10 rounded-tl-full`} />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Arrow */}
                        <motion.button
                            whileHover={{ scale: 1.1, x: 4 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNext}
                            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-naxit-primary/50 transition-all duration-300 shadow-lg hover:shadow-naxit-primary/20 touch-manipulation"
                            aria-label="Next step"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                        </motion.button>
                    </div>

                    {/* Mobile hint */}
                    <p className="text-center text-xs text-naxit-muted mt-4 md:hidden">
                        Swipe left or right to navigate
                    </p>
                </div>

                {/* Result Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12 md:mt-20 relative"
                >
                    <div className="inline-block relative">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-naxit-primary/20 to-naxit-cyan/20 blur-xl rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <p className="relative text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-naxit-primary via-naxit-cyan to-purple-500 px-6 sm:px-8 py-4">
                            Result: Fewer surprises. Faster decisions. Confident launches.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
