import React, { useState } from 'react';
import { SERVICES } from '../data/resumeData';
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  Workflow,
  Bot,
  Zap
} from 'lucide-react';

interface ServicesProps {
  onOpenCalculator?: () => void;
  onBookConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookConsultation }) => {
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-24 bg-[#F8F8F8] relative overflow-hidden text-[#222222] border-t border-[#7B7B7B]/20">
      {/* Background Subtle Watermark Text */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.04] text-center w-full">
        <span className="font-syne text-[10rem] sm:text-[14rem] font-extrabold uppercase tracking-widest text-[#222222] block leading-none">
          SERVICE
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#222222]">
              /SERVICE
            </h2>
            <p className="text-[#7B7B7B] text-xs sm:text-sm mt-2 max-w-lg">
              Specialized automation architecture, custom API orchestration, and AI-driven workflow transformation.
            </p>
          </div>
        </div>

        {/* Expandable Accordion / Row Cards */}
        <div className="space-y-4">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            if (isExpanded) {
              return (
                <div
                  key={service.id}
                  className="bg-[#FFFFFF] border border-[#7B7B7B]/30 rounded-3xl p-6 sm:p-8 relative transition-all duration-300 shadow-xl animate-fade-in"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-[#F8F8F8] text-[#7B7B7B] hover:text-[#222222] transition-colors z-20 border border-[#7B7B7B]/20"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Details */}
                    <div className="lg:col-span-7">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F8F8] border border-[#7B7B7B]/30 text-[#222222] text-[10px] font-mono font-bold uppercase mb-4">
                        <Zap className="w-3 h-3 text-[#222222]" />
                        <span>{service.stat} {service.statLabel}</span>
                      </div>

                      <h3 className="font-syne text-2xl sm:text-4xl font-extrabold text-[#222222] uppercase tracking-tight mb-4">
                        {service.title}
                      </h3>

                      <p className="text-[#7B7B7B] text-sm sm:text-base leading-relaxed mb-6">
                        {service.fullDesc}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#222222] bg-[#F8F8F8] px-3.5 py-2.5 rounded-2xl border border-[#7B7B7B]/20">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#222222] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills & Request Button */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#7B7B7B]/20">
                        <div className="flex flex-wrap gap-1.5">
                          {service.toolsUsed.map((tool, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-full bg-[#F8F8F8] text-[10px] font-mono text-[#7B7B7B] border border-[#7B7B7B]/20">
                              {tool}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={onBookConsultation}
                          className="px-6 py-2.5 rounded-full bg-[#222222] text-white font-bold text-xs hover:bg-[#333333] transition-all flex items-center gap-2 shadow-md"
                        >
                          <span>Get Started</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right Graphic Feature Card Preview */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="relative w-full max-w-sm bg-[#F8F8F8] border border-[#7B7B7B]/30 p-6 rounded-3xl shadow-md text-center transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#7B7B7B]/30 flex items-center justify-center text-[#222222] mx-auto mb-4 shadow-sm">
                          <Workflow className="w-6 h-6" />
                        </div>
                        <h4 className="text-sm font-bold text-[#222222] font-mono mb-1">
                          Autonomous Node Architecture
                        </h4>
                        <p className="text-xs text-[#7B7B7B] mb-4">
                          End-to-End Orchestration & Exception Handling
                        </p>
                        
                        {/* Mini Node Flow Graphic */}
                        <div className="space-y-2 bg-[#FFFFFF] p-3 rounded-2xl border border-[#7B7B7B]/20 text-left shadow-sm">
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#222222]">
                            <span className="flex items-center gap-1.5"><Bot className="w-3 h-3 text-[#222222]" /> Trigger & Webhook</span>
                            <span className="text-[#222222] font-bold">200 OK</span>
                          </div>
                          <div className="w-full bg-[#F8F8F8] h-1.5 rounded-full overflow-hidden border border-[#7B7B7B]/20">
                            <div className="bg-[#222222] h-full w-4/5 animate-pulse" />
                          </div>
                          <div className="flex items-center justify-between text-[9px] text-[#7B7B7B]">
                            <span>n8n / Make Engine</span>
                            <span>Latency: 120ms</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.id}
                onClick={() => toggleExpand(service.id)}
                className="bg-[#FFFFFF] hover:bg-white border border-[#7B7B7B]/20 hover:border-[#222222]/40 rounded-3xl px-6 py-6 sm:py-8 cursor-pointer transition-all duration-300 flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-xs font-mono text-[#7B7B7B] font-bold">
                    0{SERVICES.indexOf(service) + 1}
                  </span>
                  <h3 className="font-syne text-xl sm:text-3xl font-extrabold text-[#222222] uppercase tracking-tight group-hover:text-[#7B7B7B] transition-colors">
                    {service.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-[#7B7B7B] hidden md:inline-block">
                    {service.stat} {service.statLabel}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F8F8F8] group-hover:bg-[#222222] text-[#222222] group-hover:text-white flex items-center justify-center transition-all border border-[#7B7B7B]/20">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

