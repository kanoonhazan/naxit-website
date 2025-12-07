import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  icon?: React.ElementType;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon: Icon,
  className = '',
  ...props
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-pointer";

  const variants = {
    primary: "bg-cta-gradient text-white shadow-lg hover:shadow-naxit-violet/50 relative overflow-hidden group border border-transparent",
    secondary: "bg-transparent border border-naxit-primary text-white hover:bg-naxit-primary/10",
    ghost: "bg-transparent text-naxit-muted hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-white/20 skew-x-12 -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></span>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-4 h-4" />}
      </span>
    </motion.button>
  );
};