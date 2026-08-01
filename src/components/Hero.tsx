import React, { useState } from 'react';
import { PERSONAL_INFO, QUICK_STATS } from '../data/resumeData';
import brandoPortrait from '../assets/images/brando_hero_portrait_1785324785771.jpg';
import {
  Mail,
  Linkedin,
  Globe,
  ArrowUpRight,
  Zap,
  Clock,
  ShieldCheck,
  Workflow,
  Copy,
  Check,
  Bot
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenCalculator?: () => void;
}

const DRIVE_IMAGE_URL = 'https://lh3.googleusercontent.com/d/1l5Jbr1wGj2D70sI_VyWWM0x_2cJdLyJa';
const DRIVE_IMAGE_FALLBACK = 'https://drive.google.com/uc?export=view&id=1l5Jbr1wGj2D70sI_VyWWM0x_2cJdLyJa';

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [imgSrc, setImgSrc] = useState(DRIVE_IMAGE_URL);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#222222]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#222222]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#222222]" />;
      default:
        return <Workflow className="w-5 h-5 text-[#222222]" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F8F8F8] text-[#222222] flex flex-col justify-between">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7B7B7B12_1px,transparent_1px),linear-gradient(to_bottom,#7B7B7B12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        
        {/* Massive Editorial Headline */}
        <div className="text-center relative select-none pt-4">
          <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight uppercase leading-none text-[#222222]">
            <span className="text-stroke-light tracking-wider">BRANDO</span>{' '}
            <span className="text-[#222222]">OMBOY</span>
          </h1>
        </div>

        {/* Center Portrait with Overlapping Hero Content Grid */}
        <div className="relative mt-[-1.5rem] sm:mt-[-3rem] md:mt-[-4.5rem] z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left Content Column */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 pt-4 lg:pt-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#7B7B7B] font-bold mb-2">
                // AUTOMATION SPECIALIST
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight leading-tight mb-3">
                Workflow & AI Automation Specialist
              </h2>
              <p className="text-sm text-[#7B7B7B] leading-relaxed mb-6 max-w-sm">
                Designing autonomous n8n, Make.com & AI agent systems that convert manual bottlenecks into hands-free business growth.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
                <button
                  id="hero-collaborate-btn"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#222222] hover:bg-[#333333] px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 group"
                >
                  <span>Let's collaborate</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  id="hero-works-pill-btn"
                  onClick={() => onNavigate('works')}
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#222222] bg-[#FFFFFF] hover:bg-white/80 border border-[#7B7B7B]/30 px-5 py-3 rounded-full transition-all shadow-sm"
                >
                  <span>Selected Work</span>
                </button>
              </div>
            </div>

            {/* Center Portrait Image Frame */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
                {/* Subtle border shadow ring */}
                <div className="absolute -inset-1 rounded-full bg-[#7B7B7B]/20 opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Round Profile Frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#222222]/20 bg-[#FFFFFF] shadow-2xl">
                  <img
                    src={imgSrc}
                    alt="Brando Emmanuel A. Omboy"
                    className="w-full h-full object-cover object-[50%_15%] group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      if (imgSrc === DRIVE_IMAGE_URL) {
                        setImgSrc(DRIVE_IMAGE_FALLBACK);
                      } else if (imgSrc === DRIVE_IMAGE_FALLBACK) {
                        setImgSrc(brandoPortrait);
                      }
                    }}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Node Tag Badge */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#222222] text-white border border-[#222222] shadow-lg flex items-center gap-2 whitespace-nowrap z-20">
                  <Bot className="w-3.5 h-3.5 text-[#F8F8F8]" />
                  <span className="text-xs font-bold text-white font-mono">{PERSONAL_INFO.shortName}</span>
                  <span className="text-[10px] text-[#7B7B7B] font-mono font-medium">• n8n & AI</span>
                </div>
              </div>
            </div>

            {/* Right Side Social & Action Pills Stack */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-2.5 order-3 pt-4 lg:pt-12">
              <a
                id="hero-linkedin-pill"
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-[200px] flex items-center justify-between px-4 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-white border border-[#7B7B7B]/30 text-xs font-semibold text-[#222222] transition-all shadow-sm hover:border-[#222222] group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-[#222222]" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7B7B7B] group-hover:text-[#222222] transition-colors" />
              </a>

              <a
                id="hero-onlinejobs-pill"
                href={PERSONAL_INFO.onlineJobs}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-[200px] flex items-center justify-between px-4 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-white border border-[#7B7B7B]/30 text-xs font-semibold text-[#222222] transition-all shadow-sm hover:border-[#222222] group"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#222222]" />
                  <span>OnlineJobs.ph</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7B7B7B] group-hover:text-[#222222] transition-colors" />
              </a>

              <button
                id="hero-copy-email-pill"
                onClick={copyEmail}
                className="w-full max-w-[200px] flex items-center justify-between px-4 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-white border border-[#7B7B7B]/30 text-xs font-semibold text-[#222222] transition-all shadow-sm hover:border-[#222222] group"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#222222]" />
                  <span className="truncate">{copied ? 'Copied!' : 'Email'}</span>
                </div>
                {copied ? <Check className="w-3.5 h-3.5 text-[#222222]" /> : <Copy className="w-3.5 h-3.5 text-[#7B7B7B]" />}
              </button>
            </div>

          </div>
        </div>

        {/* Quick Highlights Stats Bar */}
        <div id="quick-stats-grid" className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto w-full">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#7B7B7B]/20 rounded-2xl p-4 sm:p-5 hover:border-[#222222]/30 transition-all shadow-sm flex items-center gap-4"
            >
              <div className="p-2.5 rounded-xl bg-[#F8F8F8] border border-[#7B7B7B]/20 flex-shrink-0">
                {getStatIcon(stat.icon)}
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#222222] font-mono tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-[#7B7B7B] font-medium line-clamp-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

