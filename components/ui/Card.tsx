import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variants?: Variants;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false, ...props }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, borderColor: 'rgba(0, 230, 255, 0.4)', boxShadow: '0 10px 30px -10px rgba(0, 230, 255, 0.2)' } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`glass-panel p-6 rounded-2xl border border-white/5 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};