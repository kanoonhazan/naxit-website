// Fix: Import React to resolve namespace error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  icon: React.ElementType;
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  outcome: string;
  // Detail page fields
  fullDescription?: string;
  role?: string;
  timeline?: string;
  stack?: string[];
  challenge?: string;
  approach?: string;
  gallery?: string[];
  serviceId?: string; // Links project to a specific service
  isFeatured?: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}