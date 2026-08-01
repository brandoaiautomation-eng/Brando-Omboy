import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Mail, Phone, MapPin, Linkedin, Globe, CheckCircle2, Copy, Check, Calendar, ArrowUpRight, ExternalLink, Clock, Sparkles } from 'lucide-react';

interface ContactProps {
  onOpenCalculator?: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const calendlyUrl = "https://calendly.com/brandoaiautomation/30min";

  return (
    <section id="contact" className="py-24 bg-[#F8F8F8] relative overflow-hidden text-[#222222] border-t border-[#7B7B7B]/20">
      {/* Background Subtle Watermark Text */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.04] text-center w-full">
        <span className="font-syne text-[8rem] sm:text-[13rem] font-extrabold uppercase tracking-widest text-[#222222] block leading-none">
          SCHEDULE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#7B7B7B]/30 text-xs font-mono font-bold text-[#222222] mb-3 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#222222]" />
            <span>30-MIN AUTOMATION DISCOVERY CALL</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#222222]">
            /BOOK A CALL
          </h2>
          <p className="text-[#7B7B7B] text-xs sm:text-sm mt-2">
            Select a convenient time on the calendar below to map your workflows, audit manual bottlenecks, and discuss custom automation architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Calendly Calendar Column */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#7B7B7B]/20 rounded-3xl p-4 sm:p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#7B7B7B]/20 px-2">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-[#F8F8F8] border border-[#7B7B7B]/20 text-[#222222]">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#222222] font-mono">1-on-1 Strategy Session</h3>
                  <p className="text-[11px] text-[#7B7B7B]">30 Minutes • Video Call</p>
                </div>
              </div>

              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#222222] hover:bg-[#333333] text-white text-xs font-bold transition-all shadow-sm group"
              >
                <span>Open in Calendly</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              </a>
            </div>

            {/* Embedded Calendly Frame */}
            <div className="w-full rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#7B7B7B]/20 min-h-[680px]">
              <iframe
                src={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1`}
                width="100%"
                height="680"
                frameBorder="0"
                title="Schedule 30-Min Discovery Call with Brando Omboy"
                className="w-full min-h-[680px] rounded-2xl"
              />
            </div>
          </div>

          {/* Direct Details Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* What to Expect Card */}
            <div className="bg-[#FFFFFF] border border-[#7B7B7B]/20 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#222222] font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>What We'll Cover on the Call</span>
              </div>
              <ul className="space-y-3 text-xs text-[#222222]">
                <li className="flex items-start gap-3 bg-[#F8F8F8] p-3 rounded-2xl border border-[#7B7B7B]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#222222] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-mono text-xs">Process & Workflow Audit</strong>
                    <span className="text-[#7B7B7B] text-[11px] leading-relaxed">Map manual tasks, repetitive triggers, and operational bottlenecks.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-[#F8F8F8] p-3 rounded-2xl border border-[#7B7B7B]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#222222] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-mono text-xs">Tech Stack Selection</strong>
                    <span className="text-[#7B7B7B] text-[11px] leading-relaxed">Compare n8n, Make, Zapier, GHL, and AI LLM integrations for your setup.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-[#F8F8F8] p-3 rounded-2xl border border-[#7B7B7B]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#222222] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-mono text-xs">Implementation Roadmap</strong>
                    <span className="text-[#7B7B7B] text-[11px] leading-relaxed">Clear timeline, projected cost savings, and architecture plan.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-[#FFFFFF] border border-[#7B7B7B]/20 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-[#222222] font-mono">Direct Contact Details</h3>
              
              <div className="space-y-3 text-xs">
                
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8F8F8] border border-[#7B7B7B]/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#FFFFFF] text-[#222222] border border-[#7B7B7B]/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#7B7B7B] uppercase font-mono">Email Address</p>
                      <p className="font-mono font-bold text-[#222222] text-xs">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 text-[#7B7B7B] hover:text-[#222222] bg-[#FFFFFF] rounded-xl border border-[#7B7B7B]/20"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#222222]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F8F8F8] border border-[#7B7B7B]/20">
                  <div className="p-2.5 rounded-xl bg-[#FFFFFF] text-[#222222] border border-[#7B7B7B]/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#7B7B7B] uppercase font-mono">Phone / WhatsApp</p>
                    <p className="font-mono font-bold text-[#222222] text-xs">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F8F8F8] border border-[#7B7B7B]/20">
                  <div className="p-2.5 rounded-xl bg-[#FFFFFF] text-[#222222] border border-[#7B7B7B]/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#7B7B7B] uppercase font-mono">Base Location</p>
                    <p className="font-mono font-bold text-[#222222] text-xs">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

              </div>

              {/* Profiles & Links */}
              <div className="pt-4 border-t border-[#7B7B7B]/20 flex flex-col gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-full bg-[#F8F8F8] hover:bg-white border border-[#7B7B7B]/20 text-xs font-mono text-[#222222] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#222222]" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#7B7B7B] group-hover:text-[#222222]" />
                </a>

                <a
                  href={PERSONAL_INFO.onlineJobs}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-full bg-[#F8F8F8] hover:bg-white border border-[#7B7B7B]/20 text-xs font-mono text-[#222222] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#222222]" />
                    <span>OnlineJobs.ph Profile</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#7B7B7B] group-hover:text-[#222222]" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

