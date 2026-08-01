import React from 'react';
import { ProjectItem } from '../types';
import {
  X,
  FileText,
  Workflow,
  CheckSquare,
  Database,
  Mail,
  Bot,
  Zap,
  RefreshCw,
  Lock,
  UserPlus,
  CheckCircle,
  Shield,
  Send,
  HelpCircle,
  Bell,
  Sparkles,
  MessageSquare,
  BarChart,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onBookConsultation }) => {
  if (!project) return null;

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-5 h-5 text-[#222222]" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-[#222222]" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5 text-[#222222]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#222222]" />;
      case 'Mail': return <Mail className="w-5 h-5 text-[#222222]" />;
      case 'Bot': return <Bot className="w-5 h-5 text-[#222222]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#222222]" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-[#222222]" />;
      case 'Lock': return <Lock className="w-5 h-5 text-[#222222]" />;
      case 'UserPlus': return <UserPlus className="w-5 h-5 text-[#222222]" />;
      case 'CheckCircle': return <CheckCircle className="w-5 h-5 text-[#222222]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#222222]" />;
      case 'Send': return <Send className="w-5 h-5 text-[#222222]" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-[#222222]" />;
      case 'Bell': return <Bell className="w-5 h-5 text-[#222222]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#222222]" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#222222]" />;
      case 'BarChart': return <BarChart className="w-5 h-5 text-[#222222]" />;
      default: return <Workflow className="w-5 h-5 text-[#222222]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#222222]/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#FFFFFF] border border-[#7B7B7B]/20 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-[#222222]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#7B7B7B] hover:text-[#222222] bg-[#F8F8F8] hover:bg-[#EFEFEF] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="mb-6">
          <span className="px-3 py-1 rounded-full bg-[#F8F8F8] border border-[#7B7B7B]/30 text-[#222222] text-xs font-mono font-bold inline-block mb-3 uppercase">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222222] font-sans tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Case Study Image Banner */}
        {project.previewImage && (
          <div className="mb-6 relative rounded-2xl overflow-hidden border border-[#7B7B7B]/20 bg-[#F8F8F8] group max-h-[300px]">
            <img
              src={project.previewImage}
              alt={`${project.title} Banner`}
              referrerPolicy="no-referrer"
              className="w-full h-[240px] sm:h-[280px] object-cover object-top"
              onError={(e) => {
                e.currentTarget.parentElement!.style.display = 'none';
              }}
            />
            {project.driveLink && (
              <a
                href={project.driveLink}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[#222222]/90 hover:bg-[#222222] backdrop-blur-md text-white text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-lg transition-all"
              >
                <span>View Full Resolution on Drive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        )}

        {/* Results Metrics Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="bg-[#F8F8F8] p-4 rounded-2xl border border-[#7B7B7B]/20">
              <p className="text-2xl font-bold text-[#222222] font-mono">{m.value}</p>
              <p className="text-xs text-[#7B7B7B] font-medium">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Workflow Diagram */}
        <div className="mb-8 bg-[#F8F8F8] p-5 rounded-2xl border border-[#7B7B7B]/20">
          <h4 className="text-xs font-bold text-[#7B7B7B] uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
            <Workflow className="w-4 h-4 text-[#222222]" />
            <span>Automated Architecture Node Pipeline</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
            {project.workflowNodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#7B7B7B]/20 flex flex-col items-center text-center relative group hover:border-[#222222]/40 transition-colors shadow-sm">
                  <div className="p-2.5 rounded-xl bg-[#F8F8F8] border border-[#7B7B7B]/20 mb-2">
                    {getNodeIcon(node.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-[#7B7B7B] uppercase tracking-widest mb-1">
                    Step 0{index + 1} • {node.type}
                  </span>
                  <p className="text-xs font-bold text-[#222222] leading-snug">{node.name}</p>
                </div>

                {index < project.workflowNodes.length - 1 && (
                  <div className="hidden md:flex items-center justify-center -mx-2 z-10">
                    <ArrowRight className="w-4 h-4 text-[#222222] animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Full Overview */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-[#7B7B7B] uppercase tracking-wider font-mono mb-2">
            Technical Implementation Overview
          </h4>
          <p className="text-[#222222] text-sm leading-relaxed bg-[#F8F8F8] p-4 rounded-2xl border border-[#7B7B7B]/20">
            {project.fullDescription}
          </p>
        </div>

        {/* Technologies Badges & Google Drive Case Study Link */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-[#7B7B7B] uppercase tracking-wider font-mono mb-2">
            Tools & Integration Protocols
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-[#F8F8F8] text-[#222222] border border-[#7B7B7B]/30 text-xs font-mono font-bold">
                {tech}
              </span>
            ))}
          </div>

          {project.driveLink && (
            <div className="bg-[#F8F8F8] p-4 rounded-2xl border border-[#7B7B7B]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-[#222222] font-mono">Full Case Study File & Blueprint</p>
                <p className="text-[11px] text-[#7B7B7B]">View technical documentation, workflow logic, and diagrams on Google Drive.</p>
              </div>
              <a
                href={project.driveLink}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-4 py-2.5 rounded-xl bg-[#222222] hover:bg-[#333333] text-white text-xs font-bold font-mono inline-flex items-center gap-2 transition-all shadow-sm group"
              >
                <span>Open Google Drive Case Study</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          )}
        </div>

        {/* CTA Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#7B7B7B]/20">
          <p className="text-xs text-[#7B7B7B]">
            Need a similar custom pipeline for your operations?
          </p>
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#222222] hover:bg-[#333333] transition-colors shadow-md"
          >
            Build Custom Pipeline
          </button>
        </div>

      </div>
    </div>
  );
};

