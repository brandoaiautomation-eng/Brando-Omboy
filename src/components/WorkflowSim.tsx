import React, { useState } from 'react';
import { Workflow, Play, CheckCircle2, Bot, Database, Zap, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

export const WorkflowSim: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([]);

  const presets = [
    {
      name: 'AI Document Processing (Invoice -> n8n -> OpenAI -> ERP)',
      trigger: 'New PDF Invoice Received in Email / Drive',
      steps: [
        '1. Webhook trigger fires on incoming document',
        '2. n8n extracts raw binary data & text buffers',
        '3. OpenAI Vision API parses vendor, total, line items into JSON',
        '4. Validation check: Math total verified against line items',
        '5. Record archived to ERP database & Slack alert dispatched'
      ]
    },
    {
      name: 'GoHighLevel Instant Lead Nurture & AI Scoring',
      trigger: 'New Lead Opt-in Form Submitted on Landing Page',
      steps: [
        '1. GHL Webhook sends lead payload to n8n',
        '2. AI Agent classifies lead intent & calculates budget score',
        '3. SMS sequence dispatched via Twilio / GHL',
        '4. Calendar appointment link assigned based on rep availability',
        '5. Metrics logged to Google Sheets & Looker Studio dashboard'
      ]
    },
    {
      name: 'Multi-Level Manager Approval & Compliance Audit',
      trigger: 'Employee Request Submitted in SharePoint',
      steps: [
        '1. Power Automate catches new list item event',
        '2. Manager approval request sent via Teams interactive card',
        '3. Manager approves with digital timestamp',
        '4. Active Directory provisioning script executed automatically',
        '5. Immutable audit entry created in SharePoint compliance log'
      ]
    }
  ];

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);
    setLogs([`[0.00s] ⚡ TRIGGER FIRED: ${presets[selectedPreset].trigger}`]);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < presets[selectedPreset].steps.length) {
        setCurrentStep(step);
        setLogs((prev) => [
          ...prev,
          `[${(step * 0.8).toFixed(2)}s] ✔ ${presets[selectedPreset].steps[step]}`
        ]);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setLogs((prev) => [
          ...prev,
          `[${(presets[selectedPreset].steps.length * 0.8).toFixed(2)}s] 🎉 PIPELINE SUCCESS: Execution completed with 0 errors.`
        ]);
      }
    }, 900);
  };

  return (
    <section id="simulator" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-mono font-medium mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Live Automation Pipeline Simulator
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Select a real-world scenario and test how Brando's automation logic executes step-by-step.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Preset Selector */}
          <div className="mb-6 flex flex-wrap gap-2">
            {presets.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isRunning) {
                    setSelectedPreset(idx);
                    setCurrentStep(-1);
                    setLogs([]);
                  }
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all text-left ${
                  selectedPreset === idx
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {p.name.split('(')[0]}
              </button>
            ))}
          </div>

          {/* Execution Visualizer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Steps Nodes View */}
            <div className="lg:col-span-7 space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-4">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  TRIGGER EVENT
                </span>
                <p className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>{presets[selectedPreset].trigger}</span>
                </p>
              </div>

              {presets[selectedPreset].steps.map((stepText, idx) => {
                const isActive = currentStep === idx;
                const isPassed = currentStep > idx;

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'bg-indigo-950/80 border-indigo-500 text-white scale-[1.01] shadow-lg shadow-indigo-600/20'
                        : isPassed
                        ? 'bg-slate-950/80 border-emerald-800/60 text-slate-300'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl text-xs font-mono font-bold ${
                        isActive ? 'bg-indigo-600 text-white' : isPassed ? 'bg-emerald-950 text-emerald-400' : 'bg-slate-900 text-slate-600'
                      }`}>
                        Node 0{idx + 1}
                      </div>
                      <span className="text-xs font-mono font-medium">{stepText}</span>
                    </div>

                    {isActive ? (
                      <RefreshCw className="w-4 h-4 text-indigo-400 animate-spin shrink-0" />
                    ) : isPassed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : null}
                  </div>
                );
              })}

              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="w-full mt-4 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/60 disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Executing Automation Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Test Run Automation Pipeline</span>
                  </>
                )}
              </button>
            </div>

            {/* Console Execution Log Output */}
            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-4 border border-slate-800 h-full min-h-[300px] font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    Execution Log Console
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isRunning ? 'bg-indigo-400' : 'bg-emerald-400'} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isRunning ? 'bg-indigo-500' : 'bg-emerald-500'}`}></span>
                  </span>
                </div>

                <div className="space-y-2 text-[11px] text-slate-300">
                  {logs.length === 0 ? (
                    <p className="text-slate-600 italic">
                      Click "Test Run Automation Pipeline" to watch live execution output.
                    </p>
                  ) : (
                    logs.map((log, i) => (
                      <p key={i} className={log.includes('TRIGGER') ? 'text-amber-300' : log.includes('SUCCESS') ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                        {log}
                      </p>
                    ))
                  )}
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-900 text-[10px] text-slate-500 flex justify-between">
                <span>Engine: n8n / OpenAI API</span>
                <span>Latency: &lt; 850ms</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
