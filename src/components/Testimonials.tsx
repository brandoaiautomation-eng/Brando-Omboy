import React from 'react';
import { TESTIMONIALS } from '../data/resumeData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#F8F8F8] relative overflow-hidden text-[#222222] border-t border-[#7B7B7B]/20">
      {/* Background Subtle Watermark Text */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.04] text-center w-full">
        <span className="font-syne text-[8rem] sm:text-[13rem] font-extrabold uppercase tracking-widest text-[#222222] block leading-none">
          FEEDBACK
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-xl mx-auto">
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#222222]">
            /WHAT CLIENTS SAY
          </h2>
          <p className="text-[#7B7B7B] text-xs sm:text-sm mt-2">
            Feedback from agency founders, directors, and operational leaders who scaled their businesses with Brando's automations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FFFFFF] border border-[#7B7B7B]/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#222222]/30 transition-all shadow-sm relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#7B7B7B]/20 pointer-events-none group-hover:text-[#222222]/20 transition-colors" />

              <div>
                {/* Rating Stars & Project Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#222222] text-[#222222]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-[#222222] bg-[#F8F8F8] px-2.5 py-0.5 rounded-full border border-[#7B7B7B]/30 flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Review</span>
                  </span>
                </div>

                {/* Content */}
                <p className="text-[#222222] text-xs sm:text-sm leading-relaxed italic mb-8">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#7B7B7B]/20 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#7B7B7B]/30 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-sm font-bold text-[#222222] font-mono">{t.name}</h3>
                  <p className="text-xs text-[#7B7B7B] font-medium">{t.role}</p>
                  <p className="text-[10px] text-[#7B7B7B]">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

