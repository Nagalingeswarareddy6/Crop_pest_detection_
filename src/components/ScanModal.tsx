import React from 'react';
    import { X, CheckCircle, AlertTriangle, ShieldCheck, RefreshCw } from 'lucide-react';

    interface ScanModalProps {
      result: {
        pestName: string;
        scientificName: string;
        confidence: number;
        severity: 'Low' | 'Moderate' | 'Severe' | 'Healthy';
        crop: string;
        description: string;
        remedies: string[];
      };
      onClose: () => void;
      onReset: () => void;
    }

    export const ScanModal: React.FC<ScanModalProps> = ({ result, onClose, onReset }) => {
      const getSeverityBadge = (sev: string) => {
        switch (sev) {
          case 'Severe':
            return 'bg-red-100 text-red-800 border-red-200';
          case 'Moderate':
            return 'bg-amber-100 text-amber-800 border-amber-200';
          case 'Low':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
          default:
            return 'bg-emerald-100 text-emerald-800 border-emerald-200';
        }
      };

      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  AI Scan Complete
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground mt-1">{result.pestName}</h3>
                <p className="text-sm italic text-muted-foreground">{result.scientificName}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-secondary/60 p-4 rounded-xl border border-border/60">
                <span className="text-xs text-muted-foreground block mb-1">Confidence Score</span>
                <span className="text-xl font-bold text-foreground">{(result.confidence * 100).toFixed(1)}%</span>
              </div>
              <div className="bg-secondary/60 p-4 rounded-xl border border-border/60">
                <span className="text-xs text-muted-foreground block mb-1">Severity Level</span>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getSeverityBadge(result.severity)}`}>
                  {result.severity}
                </span>
              </div>
              <div className="bg-secondary/60 p-4 rounded-xl border border-border/60">
                <span className="text-xs text-muted-foreground block mb-1">Target Crop</span>
                <span className="text-base font-semibold text-foreground">{result.crop}</span>
              </div>
            </div>

            <div className="mb-6 space-y-2">
              <h4 className="font-serif font-semibold text-foreground">Diagnosis & Symptoms</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{result.description}</p>
            </div>

            <div className="mb-8 space-y-3">
              <h4 className="font-serif font-semibold text-foreground flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Recommended Treatment & Action Plan
              </h4>
              <ul className="space-y-2">
                {result.remedies.map((remedy, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 text-sm text-foreground">
                    <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{remedy}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
              <button
                onClick={onReset}
                className="px-5 py-2.5 rounded-xl border border-border text-foreground hover:bg-secondary font-medium text-sm flex items-center gap-2 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Scan Another Leaf
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-md transition-colors"
              >
                Save to Field Log
              </button>
            </div>
          </div>
        </div>
      );
    };