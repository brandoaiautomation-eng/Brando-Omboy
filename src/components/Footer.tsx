import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ArrowUp, Mail, Linkedin, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#222222] border-t border-[#7B7B7B]/30 pt-16 pb-12 text-[#7B7B7B] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#7B7B7B]/30">
          
          {/* Logo & Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-syne font-extrabold text-xl tracking-wider text-white">
                <span className="text-stroke-light">BRANDO</span> OMBOY
              </span>
            </div>
            <p className="text-slate-300 text-xs max-w-sm leading-relaxed">
              Workflow Automation Specialist specializing in n8n, Make.com, Zapier, GoHighLevel, Microsoft Power Automate, and AI Workflow Solutions.
            </p>
            <p className="text-[11px] text-slate-400 font-mono">
              📍 {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider mb-3">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('experience')} className="hover:text-white transition-colors">
                    Experience
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('works')} className="hover:text-white transition-colors">
                    Previous Works
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('skills')} className="hover:text-white transition-colors">
                    Tech Stack
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider mb-3">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-white" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href={PERSONAL_INFO.onlineJobs} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-white" />
                    <span>OnlineJobs.ph</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-white" />
                    <span>Direct Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-3 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="px-5 py-2.5 rounded-full bg-[#333333] hover:bg-[#444444] border border-[#7B7B7B]/40 text-white transition-all flex items-center gap-2 font-mono text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Brando Emmanuel A. Omboy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Engineered for Maximum Operational Efficiency</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

