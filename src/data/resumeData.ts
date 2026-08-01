import { ExperienceItem, ProjectItem, ServiceItem, TechSkill, TestimonialItem } from '../types';

export const PERSONAL_INFO = {
  fullName: 'BRANDO EMMANUEL A. OMBOY',
  shortName: 'BRANDO OMBOY',
  title: 'Workflow Automation Specialist',
  subtitle: 'Business Process Automation | AI-Powered Workflow Solutions',
  location: 'Davao City, Philippines',
  phone: '+63 927 617 4631',
  email: 'bbrandoomboy@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/brando-omboy-bbb27b184',
  onlineJobs: 'https://https://www.onlinejobs.ph/jobseekers/info/214628',
  education: {
    degree: 'Bachelor of Science in Information Technology',
    school: 'University of Mindanao'
  },
  summary: `Results-oriented Workflow Automation Specialist with experience designing, implementing, and optimizing end-to-end business process automation solutions that improve efficiency, scalability, compliance, and operational performance. Expertise in workflow orchestration, process optimization, AI-powered automation, systems integration, API development, and low-code/no-code platforms.`
};

export const QUICK_STATS = [
  { value: '70%', label: 'Manual Effort Reduction', icon: 'Zap' },
  { value: '80%', label: 'Process Cycle Time Speedup', icon: 'Clock' },
  { value: '90%+', label: 'Integration Error Reduction', icon: 'ShieldCheck' },
  { value: '100+', label: 'Automated Workflows Built', icon: 'Workflow' }
];

export const TECHNICAL_SKILLS: TechSkill[] = [
  // Workflow Automation
  { name: 'n8n', category: 'Workflow Automation', level: 'Expert' },
  { name: 'Make.com', category: 'Workflow Automation', level: 'Expert' },
  { name: 'Zapier', category: 'Workflow Automation', level: 'Expert' },
  { name: 'GoHighLevel', category: 'Workflow Automation', level: 'Expert' },
  { name: 'Power Automate', category: 'Workflow Automation', level: 'Advanced' },

  // AI & LLM
  { name: 'OpenAI API', category: 'AI & LLM', level: 'Expert' },
  { name: 'Claude AI / Code', category: 'AI & LLM', level: 'Expert' },
  { name: 'Google Gemini', category: 'AI & LLM', level: 'Advanced' },
  { name: 'Microsoft Copilot', category: 'AI & LLM', level: 'Advanced' },
  { name: 'AI Agents & Prompt Engineering', category: 'AI & LLM', level: 'Expert' },

  // Integrations
  { name: 'REST APIs & Webhooks', category: 'Integrations', level: 'Expert' },
  { name: 'JSON & XML Parsing', category: 'Integrations', level: 'Expert' },
  { name: 'OAuth 2.0 & API Auth', category: 'Integrations', level: 'Expert' },
  { name: 'Postman', category: 'Integrations', level: 'Advanced' },

  // Cloud & Productivity
  { name: 'Microsoft 365 & SharePoint', category: 'Cloud & Productivity', level: 'Expert' },
  { name: 'Microsoft Teams & Slack', category: 'Cloud & Productivity', level: 'Expert' },
  { name: 'Google Workspace', category: 'Cloud & Productivity', level: 'Expert' },

  // Analytics & Data
  { name: 'Google Sheets Automation', category: 'Analytics & Data', level: 'Expert' },
  { name: 'Looker Studio & KPI Dashboards', category: 'Analytics & Data', level: 'Advanced' },
  { name: 'SQL (PostgreSQL, MySQL, SQL Server)', category: 'Databases & Tools', level: 'Intermediate' },
  { name: 'MongoDB', category: 'Databases & Tools', level: 'Intermediate' },
  { name: 'Git & GitHub', category: 'Databases & Tools', level: 'Intermediate' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'workflow-bpa',
    title: 'Workflow Orchestration & Business Process Automation',
    shortDesc: 'Eliminate manual bottlenecks with custom end-to-end multi-step automations across operations, HR, finance, and support.',
    fullDesc: 'Architecting robust, self-healing automation workflows using n8n, Make.com, Zapier, and Power Automate. We map existing manual business steps, create fault-tolerant error handlers, automated escalation paths, and execution logs that run 24/7.',
    iconName: 'Workflow',
    deliverables: [
      'End-to-End Business Process Mapping & SOP Analysis',
      'n8n / Make.com / Zapier Custom Flow Architecture',
      'Multi-Stage Approval Routing & Notification Triggers',
      'Automated Exception Handling & Error Alerts'
    ],
    toolsUsed: ['n8n', 'Make.com', 'Zapier', 'Power Automate'],
    stat: 'Up to 70%',
    statLabel: 'Reduction in Manual Tasks'
  },
  {
    id: 'ai-automation',
    title: 'AI-Powered Intelligent Document & Workflow Processing',
    shortDesc: 'Embed LLM intelligence (OpenAI, Claude, Gemini) into business pipelines for document extraction, smart routing, and decisions.',
    fullDesc: 'Transform unstructured PDFs, emails, receipts, and client requests into structured database records using specialized AI prompts and Agentic execution patterns. Includes confidence validation and human-in-the-loop overrides.',
    iconName: 'Bot',
    deliverables: [
      'Automated Document OCR & Data Extraction',
      'Custom Prompt Engineering & AI Agent Routing',
      'Sentiment Analysis & Intelligent Categorization',
      'AI-Powered Content & Email Auto-Response Systems'
    ],
    toolsUsed: ['OpenAI API', 'Claude AI', 'Google Gemini', 'n8n AI Agents'],
    stat: '75%',
    statLabel: 'Review Time Saved'
  },
  {
    id: 'api-integrations',
    title: 'Custom API & Systems Integration',
    shortDesc: 'Seamlessly bridge disparate software platforms via REST APIs, Webhooks, OAuth 2.0, and CRM/ERP data synchronization.',
    fullDesc: 'Building custom middleware and webhook hooks that keep customer records, financial ledgers, and operational tools synchronized in real-time without duplicate manual data entry.',
    iconName: 'Cpu',
    deliverables: [
      'Bi-Directional CRM & ERP Data Sync',
      'Custom Webhook Receivers & API Endpoints',
      'OAuth 2.0 Secure Token Management',
      'Data Cleansing & Format Normalization'
    ],
    toolsUsed: ['REST APIs', 'Webhooks', 'OAuth 2.0', 'Postman', 'JSON'],
    stat: '90%+',
    statLabel: 'Reduction in Data Errors'
  },
  {
    id: 'ghl-crm',
    title: 'GoHighLevel & Sales Pipeline Automation',
    shortDesc: 'Maximize lead conversions and client retention with automated GoHighLevel marketing funnels, SMS/Email, and KPI tracking.',
    fullDesc: 'Specialized GoHighLevel architecture for agencies and businesses. Creating automated lead capturing, appointment booking triggers, snapshot configurations, and custom reporting dashboards for client performance.',
    iconName: 'TrendingUp',
    deliverables: [
      'GoHighLevel Custom Workflow & Snapshot Setup',
      'Automated Multi-Channel Lead Nurturing (SMS, Email)',
      'Pipeline Stage Triggers & Sales Task Allocation',
      'Real-Time KPI Dashboards & Performance Analytics'
    ],
    toolsUsed: ['GoHighLevel', 'APIs', 'Webhooks', 'Looker Studio'],
    stat: '80%',
    statLabel: 'Faster SLA Lead Response'
  },
  {
    id: 'employee-hr',
    title: 'Enterprise Employee Lifecycle & HR Automation',
    shortDesc: 'Streamline onboarding, offboarding, equipment provisioning, and approval requests with Microsoft 365 & SharePoint.',
    fullDesc: 'Complete digital HR transformation replacing paper and email chains with automated SharePoint list triggers, Teams notifications, multi-level manager approvals, and IT account provisioning requests.',
    iconName: 'UserCheck',
    deliverables: [
      'Automated Employee Onboarding & Offboarding Workflows',
      'Multi-Department Approval & Audit Logs',
      'IT Account & Equipment Request Provisioning',
      'SharePoint & Teams Integrated Portal'
    ],
    toolsUsed: ['Microsoft 365', 'Power Automate', 'SharePoint Online', 'Teams'],
    stat: '60%',
    statLabel: 'Faster HR Cycle Time'
  },
  {
    id: 'automation-audit',
    title: 'Automation Governance, SOPs & ROI Audit',
    shortDesc: 'In-depth analysis of your current operational bottlenecks, complete with automation roadmap, SOP documentation, and ROI model.',
    fullDesc: 'Comprehensive business audit examining team time allocation, repetitive friction points, and legacy software sprawl. Delivers clear execution plans, technical documentation, user training, and SLA monitoring standards.',
    iconName: 'FileCheck',
    deliverables: [
      'Process Bottleneck & Cost-Saving Audit',
      'Architecture Diagrams & Technical Documentation',
      'Standard Operating Procedures (SOPs) & User Training',
      'Automation Health Monitoring & Alerting Setup'
    ],
    toolsUsed: ['Agile', 'Scrum', 'Flowcharts', 'Looker Studio'],
    stat: '100%',
    statLabel: 'Audit Visibility'
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Workflow Automation Specialist',
    company: 'Freelance | LinkedIn & OnlineJobs.ph',
    period: 'January 2025 – Present',
    location: 'Davao City, Philippines (Remote)',
    description: [
      'Designed, developed, and deployed scalable workflow automation solutions that reduced manual processing efforts by up to 70%.',
      'Automated critical business processes across operations, finance, HR, customer support, sales, and compliance departments.',
      'Built enterprise automation workflows using Microsoft Power Automate, n8n, Make.com, and Zapier.',
      'Implemented AI-powered workflow solutions utilizing OpenAI and Claude Code to automate document processing, content generation, data extraction, and decision support.',
      'Conducted workflow analysis, requirements gathering, process mapping, and solution design sessions with global stakeholders.',
      'Created automated approval workflows, escalation procedures, and real-time notification systems.',
      'Developed reporting dashboards and automated data pipelines to improve operational visibility and business intelligence.',
      'Led automation governance initiatives including workflow standards, monitoring, auditing, and change management processes.'
    ],
    technologies: ['n8n', 'Make.com', 'Zapier', 'Power Automate', 'OpenAI API', 'Claude AI', 'APIs', 'SharePoint', 'Teams', 'Google Workspace'],
    metrics: ['70% Manual Workload Drop', 'Reduced Operational Costs', 'Zero-Downtime Pipeline Setup']
  },
  {
    id: 'exp-2',
    role: 'GoHighLevel Automation Analyst',
    company: 'Freelance | SpikeMedia',
    period: 'November 2025 – Present',
    location: 'Remote',
    description: [
      'Analyzed business processes and identified automation opportunities across multiple agency departments.',
      'Developed workflow automations that improved operational efficiency and reduced client processing delays.',
      'Built automated integrations between custom business applications using APIs and workflow orchestration platforms.',
      'Performed rigorous workflow testing, troubleshooting, deployment support, and 24/7 production monitoring.',
      'Collaborated directly with business units to ensure custom automation solutions aligned with strategic requirements.',
      'Produced KPI reports and automation performance metrics for leadership teams.'
    ],
    technologies: ['GoHighLevel', 'APIs', 'Webhooks', 'Make.com', 'n8n', 'Looker Studio', 'Google Sheets Automation'],
    metrics: ['Automated Agency Lead Routing', 'SLA Response Time Improvement', 'Custom Pipeline Metrics']
  }
];

export const PROJECTS: ProjectItem[] = [
  // Zapier Case Studies
  {
    id: 'zapier-1',
    title: 'AI Content Repurposing',
    category: 'Zapier Case Study',
    platform: 'Zapier',
    driveLink: 'https://drive.google.com/file/d/16dHVwjns35TgA4KqDWDb6w5lFwKp7JBo/view?usp=sharing',
    previewImage: 'https://lh3.googleusercontent.com/d/16dHVwjns35TgA4KqDWDb6w5lFwKp7JBo',
    technologies: ['Zapier', 'OpenAI API', 'Social Media APIs', 'Google Docs'],
    metrics: [
      { label: 'Repurposing Speedup', value: '10x Faster' },
      { label: 'Distribution', value: '100% Automated' },
      { label: 'Formatting Effort', value: 'Zero Manual' }
    ],
    summary: 'Automated Zapier workflow that ingests long-form articles/transcripts, generates social media posts & newsletters via OpenAI, and distributes content across channels.',
    fullDescription: 'Engineered an end-to-end AI content repurposing pipeline built on Zapier. When a new blog post or long-form document is published, Zapier automatically sends the text to OpenAI for intelligent summarization, key takeaway extraction, and channel-specific post generation for LinkedIn, Twitter, and email newsletters.',
    workflowNodes: [
      { id: '1', name: 'New Article / Document Ingest', type: 'trigger', icon: 'FileText' },
      { id: '2', name: 'Zapier Orchestration Hook', type: 'action', icon: 'Zap' },
      { id: '3', name: 'OpenAI Content Repurposing', type: 'ai', icon: 'Bot' },
      { id: '4', name: 'Multi-Channel Distribution', type: 'action', icon: 'Send' }
    ]
  },
  {
    id: 'zapier-2',
    title: 'ASANA CRM Lead Engagement Workflow',
    category: 'Zapier Case Study',
    platform: 'Zapier',
    driveLink: 'https://drive.google.com/file/d/1f5yCaM1nKOioNTG9S31S7KFgVEkgs0zI/view?usp=sharing',
    previewImage: 'https://lh3.googleusercontent.com/d/1f5yCaM1nKOioNTG9S31S7KFgVEkgs0zI',
    technologies: ['Zapier', 'Asana', 'CRM Automation', 'Email Marketing'],
    metrics: [
      { label: 'Lead Response SLA', value: '< 1 Minute' },
      { label: 'CRM Synchronization', value: '100% Real-Time' },
      { label: 'Missed Follow-ups', value: '0%' }
    ],
    summary: 'Connects inbound webform leads to Asana CRM project boards, assigns team members, triggers automated engagement emails, and updates pipeline status.',
    fullDescription: 'Built a lead engagement and task automation workflow in Zapier. Inbound lead form submissions instantly generate structured tasks in Asana CRM project boards, assign account managers based on lead size or territory, trigger personalized welcome emails, and maintain real-time deal stage tracking.',
    workflowNodes: [
      { id: '1', name: 'Inbound Webform Lead Capture', type: 'trigger', icon: 'UserPlus' },
      { id: '2', name: 'Zapier Lead Routing Logic', type: 'action', icon: 'Zap' },
      { id: '3', name: 'Asana CRM Task & Board Sync', type: 'database', icon: 'CheckSquare' },
      { id: '4', name: 'Automated Lead Engagement Email', type: 'action', icon: 'Mail' }
    ]
  },
  {
    id: 'zapier-3',
    title: 'Automated Leads Enrichment',
    category: 'Zapier Case Study',
    platform: 'Zapier',
    driveLink: 'https://drive.google.com/file/d/1j9nBWfLlwiolBARpAcnSr-4Tl6g7yocM/view?usp=sharing',
    previewImage: 'https://lh3.googleusercontent.com/d/1j9nBWfLlwiolBARpAcnSr-4Tl6g7yocM',
    technologies: ['Zapier', 'Lead Enrichment APIs', 'Webhooks', 'CRM'],
    metrics: [
      { label: 'Enrichment Rate', value: '95%+' },
      { label: 'Profile Lookup', value: 'Instant' },
      { label: 'Data Accuracy', value: 'Verified' }
    ],
    summary: 'Ingests basic contact emails, queries third-party enrichment APIs for firmographic and demographic details, and updates CRM records automatically.',
    fullDescription: 'Designed an automated lead enrichment workflow on Zapier. When a lead submits an email address, Zapier triggers API queries to pull full firmographic data (job title, company size, industry, revenue, social profiles) and automatically appends enriched attributes to the CRM record with automated lead scoring.',
    workflowNodes: [
      { id: '1', name: 'Inbound Raw Lead Webhook', type: 'trigger', icon: 'Zap' },
      { id: '2', name: 'Enrichment API Data Fetch', type: 'action', icon: 'RefreshCw' },
      { id: '3', name: 'Profile Normalizer & Scorer', type: 'action', icon: 'Workflow' },
      { id: '4', name: 'CRM Enriched Record Sync', type: 'database', icon: 'Database' }
    ]
  },

  // Make.com Case Studies
  {
    id: 'make-1',
    title: 'Integration Calendly, Google Sheets and Slack',
    category: 'Make.com Case Study',
    platform: 'Make.com',
    driveLink: 'https://drive.google.com/file/d/1TWmv2bnILw7g9fuNNBUZbZZaiKQilNRL/view?usp=sharing',
    previewImage: 'https://lh3.googleusercontent.com/d/1TWmv2bnILw7g9fuNNBUZbZZaiKQilNRL',
    technologies: ['Make.com', 'Calendly', 'Google Sheets', 'Slack'],
    metrics: [
      { label: 'Slack Alerts', value: 'Real-Time' },
      { label: 'Master Log Sync', value: '100% Accurate' },
      { label: 'Calendar Sync', value: 'Instant' }
    ],
    summary: 'Automated Make.com scenario syncing Calendly appointment webhooks into Google Sheets master database and posting instant Slack team channel alerts.',
    fullDescription: 'Designed a multi-app automated pipeline in Make.com. Whenever a client schedules a meeting via Calendly, Make catches the webhook payload, parses invitee answers, logs a structured entry in Google Sheets for master reporting, and dispatches a rich Slack notification to the sales team channel.',
    workflowNodes: [
      { id: '1', name: 'Calendly Webhook Trigger', type: 'trigger', icon: 'Sparkles' },
      { id: '2', name: 'Make Data Transformer', type: 'action', icon: 'Workflow' },
      { id: '3', name: 'Google Sheets Master Log', type: 'database', icon: 'Database' },
      { id: '4', name: 'Slack Team Channel Alert', type: 'action', icon: 'Bell' }
    ]
  },
  {
    id: 'make-2',
    title: 'Export Account Transaction from XERO to Upload CSV to Asana',
    category: 'Make.com Case Study',
    platform: 'Make.com',
    driveLink: 'https://drive.google.com/file/d/1Ii693yXpisvfgQa6cOnE2Opr-MseJa3q/view?usp=sharing',
    previewImage: 'https://lh3.googleusercontent.com/d/1Ii693yXpisvfgQa6cOnE2Opr-MseJa3q',
    technologies: ['Make.com', 'Xero API', 'CSV Data Parser', 'Asana'],
    metrics: [
      { label: 'Ledger Export', value: '100% Automated' },
      { label: 'Manual Copying', value: '0%' },
      { label: 'Audit Readiness', value: 'Instant' }
    ],
    summary: 'Automates accounting workflows by fetching general ledger transactions from Xero API, generating CSV exports, and attaching them to Asana review tasks.',
    fullDescription: 'Developed an automated financial reporting scenario in Make.com. Periodically extracts account transactions from the Xero API, aggregates line items into structured CSV files, and creates formatted accounting audit tasks in Asana with the CSV report attached automatically.',
    workflowNodes: [
      { id: '1', name: 'Xero API Transaction Fetch', type: 'trigger', icon: 'BarChart' },
      { id: '2', name: 'Make CSV Aggregator', type: 'action', icon: 'FileText' },
      { id: '3', name: 'File Attachment Buffer', type: 'action', icon: 'Workflow' },
      { id: '4', name: 'Asana Audit Task Creation', type: 'database', icon: 'CheckSquare' }
    ]
  },
  {
    id: 'make-3',
    title: 'Auto Sort Gmail Attachment on GDrive',
    category: 'Make.com Case Study',
    platform: 'Make.com',
    driveLink: 'https://drive.google.com/file/d/10MY8zpyhGIGD_Fe9eZHTzQl_IXDMi61g/view?usp=sharing',
    previewImage: 'https://lh3.googleusercontent.com/d/10MY8zpyhGIGD_Fe9eZHTzQl_IXDMi61g',
    technologies: ['Make.com', 'Gmail API', 'Google Drive', 'File Router'],
    metrics: [
      { label: 'File Sorting', value: 'Automated' },
      { label: 'Drive Organization', value: 'Structured' },
      { label: 'Attachment Losses', value: '0%' }
    ],
    summary: 'Monitors incoming Gmail attachments, applies filtering and renaming rules based on subject/sender, and archives them into target Google Drive folders.',
    fullDescription: 'Architected an automated document filing scenario in Make.com. Monitors Gmail for messages containing attachments (invoices, receipts, contracts), applies rule-based subject/sender filtering, renames files with standardized date conventions, and stores them in designated Google Drive folder paths.',
    workflowNodes: [
      { id: '1', name: 'Gmail Attachment Receiver', type: 'trigger', icon: 'Mail' },
      { id: '2', name: 'Make Filter & File Renamer', type: 'action', icon: 'RefreshCw' },
      { id: '3', name: 'Folder Path Resolver', type: 'action', icon: 'Workflow' },
      { id: '4', name: 'Google Drive Organized Upload', type: 'database', icon: 'Database' }
    ]
  },
  {
    id: 'make-4',
    title: 'AI Email Support',
    category: 'Make.com Case Study',
    platform: 'Make.com',
    driveLink: 'https://drive.google.com/file/d/1Eh-IP1zorxZoYuI62UIUcgTHAoEemJjw/view?usp=sharing',
    previewImage: 'https://lh3.googleusercontent.com/d/1Eh-IP1zorxZoYuI62UIUcgTHAoEemJjw',
    technologies: ['Make.com', 'OpenAI API', 'Gmail / Email API', 'AI Agent'],
    metrics: [
      { label: 'Response Time', value: '80% Speedup' },
      { label: 'Sentiment Tagging', value: 'Automated' },
      { label: 'Support Availability', value: '24/7 Active' }
    ],
    summary: 'Autonomous AI email customer support scenario powered by LLMs. Ingests inquiries, analyzes sentiment, drafts contextual responses, and escalates tickets.',
    fullDescription: 'Engineered an intelligent email customer support automation in Make.com powered by OpenAI APIs. Inbound customer emails are ingested, analyzed for sentiment and intent, matched against contextual resolution prompts, and answered with personalized response drafts. Complex cases are automatically escalated to human specialists.',
    workflowNodes: [
      { id: '1', name: 'Support Email Ingestion', type: 'trigger', icon: 'HelpCircle' },
      { id: '2', name: 'OpenAI Intent & Sentiment Agent', type: 'ai', icon: 'Bot' },
      { id: '3', name: 'Contextual AI Response Draft', type: 'action', icon: 'MessageSquare' },
      { id: '4', name: 'Human Escalation & Dispatch', type: 'action', icon: 'Send' }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Director of Operations',
    company: 'Nexus Scale Operations',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    content: 'Brando transformed our manual onboarding and approval process completely. What used to take our ops team 3 days now runs in under 15 minutes with zero errors. His mastery of n8n, Power Automate, and custom APIs is unmatched.',
    rating: 5,
    projectType: 'Enterprise Workflow Transformation',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Founder & Managing Director',
    company: 'SpikeMedia Agency',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    content: 'Working with Brando on our GoHighLevel and API integrations was smooth and seamless. He identified logic gaps in our lead routing immediately and built a bulletproof solution that boosted our client response SLA by 80%.',
    rating: 5,
    projectType: 'GoHighLevel & CRM Automation',
    verified: true
  },
  {
    id: 'test-3',
    name: 'David Chen',
    role: 'VP of Technology & Systems',
    company: 'Apex Global Logistics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    content: 'Brando integrated OpenAI APIs directly into our document review pipeline. We eliminated thousands of hours of repetitive invoice typing. His work paid for itself within the very first month.',
    rating: 5,
    projectType: 'AI Document Processing',
    verified: true
  }
];
