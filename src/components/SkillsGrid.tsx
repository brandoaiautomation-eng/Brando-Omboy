import React, { useState } from 'react';
import { TECHNICAL_SKILLS } from '../data/resumeData';
import { Cpu, Bot, Zap, Cloud, BarChart3, Database, Check } from 'lucide-react';

export const SkillsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Workflow Automation',
    'AI & LLM',
    'Integrations',
    'Cloud & Productivity',
    'Analytics & Data',
    'Databases & Tools'
  ];

  const filteredSkills = selectedCategory === 'All'
    ? TECHNICAL_SKILLS
    : TECHNICAL_SKILLS.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Workflow Automation': return <Zap className="w-4 h-4 text-[#222222]" />;
      case 'AI & LLM': return <Bot className="w-4 h-4 text-[#222222]" />;
      case 'Integrations': return <Cpu className="w-4 h-4 text-[#222222]" />;
      case 'Cloud & Productivity': return <Cloud className="w-4 h-4 text-[#222222]" />;
      case 'Analytics & Data': return <BarChart3 className="w-4 h-4 text-[#222222]" />;
      default: return <Database className="w-4 h-4 text-[#222222]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#F8F8F8] relative overflow-hidden text-[#222222] border-t border-[#7B7B7B]/20">
      {/* Background Subtle Watermark Text */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.04] text-center w-full">
        <span className="font-syne text-[8rem] sm:text-[13rem] font-extrabold uppercase tracking-widest text-[#222222] block leading-none">
          TECH STACK
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-xl mx-auto">
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#222222]">
            /TECHNICAL SKILLS
          </h2>
          <p className="text-[#7B7B7B] text-xs sm:text-sm mt-2">
            Enterprise low-code platforms, custom API webhooks, AI agent frameworks, and cloud databases.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === cat
                  ? 'bg-[#222222] text-white shadow-md'
                  : 'bg-[#FFFFFF] text-[#7B7B7B] border border-[#7B7B7B]/30 hover:text-[#222222] hover:bg-white'
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#7B7B7B]/20 rounded-2xl p-4 hover:border-[#222222]/30 transition-all hover:bg-white group shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-xl bg-[#F8F8F8] border border-[#7B7B7B]/20">
                  {getCategoryIcon(skill.category)}
                </span>
                <span className="text-[10px] font-mono text-[#222222] bg-[#F8F8F8] px-2.5 py-0.5 rounded-full border border-[#7B7B7B]/30 font-bold">
                  {skill.level}
                </span>
              </div>
              <p className="text-sm font-bold text-[#222222] font-mono group-hover:text-[#7B7B7B] transition-colors mt-2">
                {skill.name}
              </p>
              <p className="text-[10px] text-[#7B7B7B] font-medium uppercase tracking-wider mt-1">
                {skill.category}
              </p>
            </div>
          ))}
        </div>

        {/* ATS Keywords & Competencies Pill Cluster */}
        <div className="mt-16 bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#7B7B7B]/20 shadow-sm">
          <h3 className="text-xs font-bold text-[#7B7B7B] uppercase tracking-widest font-mono mb-4 text-center">
            Core Competencies & Keywords
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {[
              'Workflow Automation', 'Business Process Management', 'Intelligent Automation',
              'Digital Transformation', 'AI Automation', 'n8n Specialist', 'Make.com Expert',
              'Zapier Orchestration', 'Power Automate', 'Systems Integration', 'API Development',
              'GoHighLevel Analyst', 'AI Agents', 'OpenAI API', 'Claude AI', 'Process Optimization',
              'Data Automation', 'OAuth 2.0', 'Webhook Architecture', 'Agile & Scrum'
            ].map((kw, i) => (
              <span key={i} className="px-3.5 py-1.5 rounded-full bg-[#F8F8F8] text-[#222222] border border-[#7B7B7B]/20 font-mono text-[11px] flex items-center gap-1.5 font-medium">
                <Check className="w-3 h-3 text-[#222222]" />
                <span>{kw}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

