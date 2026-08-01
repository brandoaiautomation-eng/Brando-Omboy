import React, { useState } from 'react';
import { PROJECTS } from '../data/resumeData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Workflow, Sparkles, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  onBookConsultation: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onBookConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Zapier Works', 'Make.com Works'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : activeCategory === 'Zapier Works'
    ? PROJECTS.filter((p) => p.platform === 'Zapier')
    : PROJECTS.filter((p) => p.platform === 'Make.com');

  return (
    <section id="works" className="py-24 bg-[#F8F8F8] relative overflow-hidden text-[#222222] border-t border-[#7B7B7B]/20">
      {/* Background Subtle Watermark Text */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.04] text-center w-full">
        <span className="font-syne text-[10rem] sm:text-[14rem] font-extrabold uppercase tracking-widest text-[#222222] block leading-none">
          PORTFOLIO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Slashed Title Header */}
        <div className="text-center mb-10">
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-[#222222]">
            /PREVIOUS WORKS & CASE STUDIES
          </h2>
          <p className="text-[#7B7B7B] text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Explore live production case studies across Zapier and Make.com automation workflows.
          </p>
        </div>

        {/* Filter Controls & Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#FFFFFF] p-1.5 rounded-full border border-[#7B7B7B]/30 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#222222] text-white shadow-sm'
                    : 'text-[#7B7B7B] hover:text-[#222222]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View All Work / Book Call Button */}
          <button
            onClick={onBookConsultation}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-white border border-[#7B7B7B]/30 text-xs font-semibold text-[#222222] transition-all group shadow-sm"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight className="w-4 h-4 text-[#7B7B7B] group-hover:text-[#222222] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-[#FFFFFF] border border-[#7B7B7B]/20 rounded-3xl overflow-hidden hover:border-[#222222]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Visual Image / Architecture Frame */}
                <div className="relative aspect-[16/10] bg-[#F8F8F8] overflow-hidden p-3 flex items-center justify-center border-b border-[#7B7B7B]/20">
                  {project.previewImage ? (
                    <div className="w-full h-full relative rounded-2xl overflow-hidden border border-[#7B7B7B]/20 bg-[#FFFFFF] shadow-sm">
                      <img
                        src={project.previewImage}
                        alt={`${project.title} Preview`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback if LH3 direct image link is restricted
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          if (target.nextElementSibling) {
                            (target.nextElementSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback container if image fails to load */}
                      <div className="hidden w-full h-full bg-[#FFFFFF] p-4 flex-col justify-between relative">
                        <div className="flex items-center justify-between z-10">
                          <span className="px-3 py-1 rounded-full bg-[#222222] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                            {project.platform}
                          </span>
                          <span className="text-[10px] font-mono text-[#222222] bg-[#F8F8F8] border border-[#7B7B7B]/30 px-2.5 py-0.5 rounded-full font-bold">
                            {project.metrics[0]?.value || 'Automated'}
                          </span>
                        </div>
                        <div className="my-auto flex items-center justify-center gap-2">
                          <div className="p-3 rounded-xl bg-[#F8F8F8] border border-[#7B7B7B]/30 text-[#222222] shadow-sm">
                            <Workflow className="w-6 h-6" />
                          </div>
                          <div className="w-8 h-[2px] bg-[#222222]/30" />
                          <div className="p-3 rounded-xl bg-[#F8F8F8] border border-[#7B7B7B]/30 text-[#222222] shadow-sm">
                            <Sparkles className="w-6 h-6" />
                          </div>
                        </div>
                        <p className="text-[11px] text-[#7B7B7B] font-mono line-clamp-1 z-10">
                          {project.workflowNodes.length} Node Pipeline • {project.category}
                        </p>
                      </div>

                      {/* Overlay badges over image */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-[#222222]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                          {project.platform}
                        </span>
                        <span className="text-[10px] font-mono text-[#222222] bg-white/90 backdrop-blur-md border border-[#7B7B7B]/30 px-2.5 py-1 rounded-full font-bold shadow-md">
                          {project.metrics[0]?.value || 'Automated'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Background Mock Visual Container */
                    <div className="w-full h-full bg-[#FFFFFF] rounded-2xl p-4 border border-[#7B7B7B]/20 flex flex-col justify-between relative group-hover:border-[#222222]/40 transition-colors shadow-sm">
                      <div className="flex items-center justify-between z-10">
                        <span className="px-3 py-1 rounded-full bg-[#222222] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                          {project.platform}
                        </span>
                        <span className="text-[10px] font-mono text-[#222222] bg-[#F8F8F8] border border-[#7B7B7B]/30 px-2.5 py-0.5 rounded-full font-bold">
                          {project.metrics[0]?.value || 'Automated'}
                        </span>
                      </div>

                      {/* Mock Workflow Node Graphic */}
                      <div className="my-auto flex items-center justify-center gap-2">
                        <div className="p-3 rounded-xl bg-[#F8F8F8] border border-[#7B7B7B]/30 text-[#222222] shadow-sm group-hover:scale-110 transition-transform">
                          <Workflow className="w-6 h-6" />
                        </div>
                        <div className="w-8 h-[2px] bg-[#222222]/30" />
                        <div className="p-3 rounded-xl bg-[#F8F8F8] border border-[#7B7B7B]/30 text-[#222222] shadow-sm group-hover:scale-110 transition-transform">
                          <Sparkles className="w-6 h-6" />
                        </div>
                      </div>

                      <p className="text-[11px] text-[#7B7B7B] font-mono line-clamp-1 z-10">
                        {project.workflowNodes.length} Node Pipeline • {project.category}
                      </p>
                    </div>
                  )}

                  {/* Hover Floating Arrow Overlay */}
                  <div className="absolute inset-0 bg-[#222222]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20">
                    <div className="w-12 h-12 rounded-full bg-[#222222] text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#222222] mb-2 group-hover:text-[#7B7B7B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#7B7B7B] text-xs leading-relaxed mb-6 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="bg-[#F8F8F8] p-2.5 rounded-2xl border border-[#7B7B7B]/20">
                        <span className="text-xs font-bold text-[#222222] font-mono block">{m.value}</span>
                        <span className="text-[10px] text-[#7B7B7B] truncate block">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags Footer & Direct Drive Link */}
              <div className="px-6 pb-6 pt-2 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-[#F8F8F8] text-[10px] font-mono text-[#222222] border border-[#7B7B7B]/20 font-semibold">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-1 rounded-full bg-[#F8F8F8] text-[10px] font-mono text-[#7B7B7B] border border-[#7B7B7B]/20">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {project.driveLink && (
                  <a
                    href={project.driveLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-2 px-3 rounded-xl bg-[#F8F8F8] hover:bg-[#EFEFEF] border border-[#7B7B7B]/30 text-[#222222] text-[11px] font-mono font-bold flex items-center justify-between transition-colors group/link"
                  >
                    <span>View Drive Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#7B7B7B] group-hover/link:text-[#222222]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onBookConsultation={onBookConsultation}
        />

      </div>
    </section>
  );
};

