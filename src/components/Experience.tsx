import React, { useState } from 'react';
import { WORK_EXPERIENCE, PERSONAL_INFO } from '../data/resumeData';
import { Calendar, MapPin, GraduationCap, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('exp-1');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-24 bg-[#F8F8F8] relative overflow-hidden text-[#222222] border-t border-[#7B7B7B]/20">
      {/* Background Subtle Watermark Text */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.04] text-center w-full">
        <span className="font-syne text-[8rem] sm:text-[13rem] font-extrabold uppercase tracking-widest text-[#222222] block leading-none">
          CAREER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-xl mx-auto">
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#222222]">
            /WORK EXPERIENCE
          </h2>
          <p className="text-[#7B7B7B] text-xs sm:text-sm mt-2">
            Proven track record of engineering scalable automation architecture and AI workflow solutions for enterprise clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Experience Timeline Column */}
          <div className="lg:col-span-8 space-y-6">
            {WORK_EXPERIENCE.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-[#FFFFFF] border transition-all duration-300 rounded-3xl overflow-hidden shadow-sm ${
                    isExpanded ? 'border-[#222222]/40 bg-[#FFFFFF]' : 'border-[#7B7B7B]/20 hover:border-[#222222]/30'
                  }`}
                >
                  {/* Card Header Bar */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="p-1.5 rounded-xl bg-[#F8F8F8] text-[#222222] border border-[#7B7B7B]/20">
                          <Building2 className="w-4 h-4" />
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#222222] font-mono">{item.role}</h3>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-[#7B7B7B]">{item.company}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-left sm:text-right">
                        <div className="flex items-center gap-1.5 text-xs text-[#7B7B7B] font-mono">
                          <Calendar className="w-3.5 h-3.5 text-[#222222]" />
                          <span>{item.period}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center gap-1.5 text-[11px] text-[#7B7B7B] mt-0.5">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>

                      <div className="p-2 rounded-full bg-[#F8F8F8] border border-[#7B7B7B]/20 text-[#222222]">
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-[#222222]" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics Chips */}
                  <div className="px-6 sm:px-8 pb-4 flex flex-wrap gap-2 border-b border-[#7B7B7B]/20">
                    {item.metrics.map((metric, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F8F8] text-[#222222] border border-[#7B7B7B]/30 text-[11px] font-mono font-medium">
                        <Sparkles className="w-3 h-3 text-[#222222]" />
                        <span>{metric}</span>
                      </span>
                    ))}
                  </div>

                  {/* Expandable Content Body */}
                  {isExpanded && (
                    <div className="p-6 sm:p-8 bg-[#F8F8F8] space-y-4 animate-fade-in">
                      <h4 className="text-xs font-bold text-[#7B7B7B] uppercase tracking-wider font-mono">
                        Key Responsibilities & Achievements
                      </h4>
                      <div className="space-y-2.5">
                        {item.description.map((desc, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222222]">
                            <CheckCircle2 className="w-4 h-4 text-[#222222] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{desc}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#7B7B7B]/20">
                        <h4 className="text-xs font-bold text-[#7B7B7B] uppercase tracking-wider font-mono mb-2">
                          Technologies Deployed
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-full bg-[#FFFFFF] text-[#222222] border border-[#7B7B7B]/20 text-xs font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Education & Summary Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Education Card */}
            <div className="bg-[#FFFFFF] border border-[#7B7B7B]/20 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#F8F8F8] text-[#222222] border border-[#7B7B7B]/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#222222] font-mono">Education</h3>
                  <p className="text-xs text-[#7B7B7B]">Academic Foundation</p>
                </div>
              </div>
              <div className="bg-[#F8F8F8] p-4 rounded-2xl border border-[#7B7B7B]/20">
                <p className="text-sm font-bold text-[#222222] mb-1">
                  {PERSONAL_INFO.education.degree}
                </p>
                <p className="text-xs font-semibold text-[#7B7B7B]">
                  {PERSONAL_INFO.education.school}
                </p>
                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#FFFFFF] text-[#222222] border border-[#7B7B7B]/30 text-[10px] font-mono">
                  Information Technology Graduate
                </span>
              </div>
            </div>

            {/* Core Methodology Card */}
            <div className="bg-[#FFFFFF] border border-[#7B7B7B]/20 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-sm font-bold text-[#222222] font-mono mb-3 uppercase tracking-wider">
                Automation Methodology
              </h3>
              <ul className="space-y-3 text-xs text-[#7B7B7B]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#222222] mt-1.5 shrink-0" />
                  <span><strong className="text-[#222222]">Requirements Mapping:</strong> Documenting every manual click, trigger condition, and output format.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#222222] mt-1.5 shrink-0" />
                  <span><strong className="text-[#222222]">Fault-Tolerant Build:</strong> Implementing self-healing retry loops, fallback webhooks, and error logs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#222222] mt-1.5 shrink-0" />
                  <span><strong className="text-[#222222]">AI Enhancement:</strong> Injecting structured LLM parsing for human-like decision making.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

