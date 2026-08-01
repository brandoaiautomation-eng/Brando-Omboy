import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, X, Sparkles, ArrowRight } from 'lucide-react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const AutomationCalculator: React.FC<CalculatorModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation
}) => {
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(12);
  const [hourlyRate, setHourlyRate] = useState<number>(30);
  const [automationEfficiency, setAutomationEfficiency] = useState<number>(70); // 70% saved

  if (!isOpen) return null;

  // Calculation Math
  const totalWeeklyHoursManual = teamSize * hoursPerWeek;
  const weeklyHoursSaved = Math.round(totalWeeklyHoursManual * (automationEfficiency / 100));
  const yearlyHoursSaved = weeklyHoursSaved * 52;
  
  const weeklyCostManual = totalWeeklyHoursManual * hourlyRate;
  const weeklyCostSaved = Math.round(weeklyCostManual * (automationEfficiency / 100));
  const yearlyCostSaved = weeklyCostSaved * 52;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">Automation ROI Calculator</h3>
            <p className="text-xs text-slate-400">Estimate how much time & money Brando's automations save your business</p>
          </div>
        </div>

        {/* Sliders Input Controls */}
        <div className="space-y-6 mb-8 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
          
          {/* Team Size Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-300">Team Members Doing Manual Tasks</label>
              <span className="text-sm font-bold text-indigo-400 font-mono">{teamSize} {teamSize === 1 ? 'Person' : 'People'}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* Manual Hours Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-300">Manual Hours Per Person / Week</label>
              <span className="text-sm font-bold text-indigo-400 font-mono">{hoursPerWeek} Hours / Wk</span>
            </div>
            <input
              type="range"
              min="2"
              max="35"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* Hourly Rate Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-300">Average Hourly Staff Rate (USD $)</label>
              <span className="text-sm font-bold text-indigo-400 font-mono">${hourlyRate} / Hour</span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* Efficiency Target */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-300">Target Workload Reduction %</label>
              <span className="text-sm font-bold text-emerald-400 font-mono">{automationEfficiency}% Automated</span>
            </div>
            <input
              type="range"
              min="40"
              max="90"
              step="5"
              value={automationEfficiency}
              onChange={(e) => setAutomationEfficiency(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

        </div>

        {/* Calculated Results Display Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold mb-1">
              <DollarSign className="w-4 h-4" />
              <span>ESTIMATED ANNUAL SAVINGS</span>
            </div>
            <p className="text-3xl font-extrabold text-white font-mono tracking-tight">
              ${yearlyCostSaved.toLocaleString()}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              ~${weeklyCostSaved.toLocaleString()} saved every single week
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/30">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold mb-1">
              <Clock className="w-4 h-4" />
              <span>HOURS SAVED PER YEAR</span>
            </div>
            <p className="text-3xl font-extrabold text-white font-mono tracking-tight">
              {yearlyHoursSaved.toLocaleString()} hrs
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Equivalent to ~{(yearlyHoursSaved / 160).toFixed(1)} full-time work months freed
            </p>
          </div>

        </div>

        {/* Action Call */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-xs text-slate-300">
              Ready to unlock <span className="text-emerald-400 font-bold">${yearlyCostSaved.toLocaleString()}</span> in productivity value?
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            <span>Book Automation Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
