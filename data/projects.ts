import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'med-app',
    title: 'Dr. Consult',
    category: 'Mobile Product UI',
    image: 'https://picsum.photos/800/600?random=1',
    problem: 'Complex scheduling flow caused 40% drop-off.',
    solution: 'Simplified 4-step wizard with smart defaults.',
    outcome: '+22% Booking Conversion',
    fullDescription: 'Dr. Consult is a telemedicine platform connecting patients with specialists. The original app suffered from high churn during the booking process due to a convoluted form structure and lack of progress indication.',
    role: 'UI/UX Design & Prototyping',
    timeline: '8 Weeks',
    stack: ['Figma', 'React Native', 'Segment'],
    challenge: 'The primary challenge was reducing the cognitive load for elderly patients while gathering necessary medical history before the appointment. The legal requirements for data collection often conflicted with usability goals.',
    approach: 'We audited the existing flow, removed 30% of non-essential fields, and introduced a "one-thing-per-page" wizard pattern with clear progress tracking and large, accessible touch targets.',
    gallery: ['https://picsum.photos/800/600?random=11', 'https://picsum.photos/800/600?random=12'],
    serviceId: 'ui-ux'
  },
  {
    id: 'emb-gui',
    title: 'Industrial Controller',
    category: 'Embedded GUI (LVGL)',
    image: 'https://picsum.photos/800/600?random=2',
    problem: 'Operator error due to poor contrast in factory lighting.',
    solution: 'High-contrast accessible theme optimized for 480x272px.',
    outcome: 'Zero critical safety errors in beta',
    fullDescription: 'We designed and implemented the HMI for a heavy machinery control panel using LVGL. The environment is often dimly lit or has high glare, requiring a specialized high-contrast UI system.',
    role: 'Embedded UI Design & C Implementation',
    timeline: '12 Weeks',
    stack: ['LVGL', 'C++', 'SquareLine Studio'],
    challenge: 'Working with a 480x272px resistive touch screen meant touch targets had to be substantial. Memory constraints (256KB RAM) limited our use of bitmaps and complex animations.',
    approach: 'We developed a vector-based icon set and used LVGLs native styling engine to minimize asset size. A "Safety First" color system was established to highlight critical warnings instantly.',
    gallery: ['https://picsum.photos/800/600?random=21', 'https://picsum.photos/800/600?random=22'],
    serviceId: 'gui'
  },
  {
    id: 'brand',
    title: 'AeroDynamics',
    category: 'Brand Identity',
    image: 'https://picsum.photos/800/600?random=3',
    problem: 'Legacy brand looked outdated for a Series B startup.',
    solution: 'Futuristic visual system inspired by airflow data.',
    outcome: 'Successful $12M raise',
    fullDescription: 'AeroDynamics is an AI-driven logistics optimization platform. Their legacy branding did not reflect their cutting-edge technology, potentially hurting their Series B fundraising efforts.',
    role: 'Brand Identity & Visual System',
    timeline: '6 Weeks',
    stack: ['Adobe Illustrator', 'Cinema 4D', 'WebGL'],
    challenge: 'The client needed a visual language that felt "mathematical yet organic" to represent their AI algorithms. The system also needed to extend to a complex data visualization dashboard.',
    approach: 'We generated visual patterns based on actual fluid dynamics simulations. This data-driven art direction became the core of the brand, symbolizing their core value proposition: "Efficiency through Physics".',
    gallery: ['https://picsum.photos/800/600?random=31', 'https://picsum.photos/800/600?random=32'],
    serviceId: 'branding'
  }
];