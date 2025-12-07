import React from 'react';
import { Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo className="h-8 w-auto" />
            </div>
            <p className="text-naxit-muted max-w-sm mb-6">
              Native solutions for product-focused teams. We craft experiences that engineers can ship without the headache.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/naxitofficial/" },
                { icon: Instagram, href: "https://www.instagram.com/naxitofficial" },
                { icon: Facebook, href: "https://www.facebook.com/naxitofficial" },
                { icon: MessageCircle, href: "https://whatsapp.com/channel/0029VaCY8ulCHDyowtpSzx30" }
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-naxit-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-naxit-muted text-sm">
              <li><a href="#" className="hover:text-naxit-cyan transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-naxit-cyan transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-naxit-cyan transition-colors">Embedded GUI</a></li>
              <li><a href="#" className="hover:text-naxit-cyan transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-naxit-muted text-sm">
              <li><a href="#" className="hover:text-naxit-cyan transition-colors">About</a></li>
              <li><a href="#" className="hover:text-naxit-cyan transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-naxit-cyan transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-naxit-cyan transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <div>&copy; {new Date().getFullYear()} NAXIT Agency. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};