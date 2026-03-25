import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tag, FileText, CheckCircle2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const DESIGN_THREATS = [
  { id: "STRIDE-D-1", severity: "high", title: "No file size limit specified → DoS risk" },
  { id: "STRIDE-T-1", severity: "medium", title: "No MIME-type validation → stored XSS risk" },
  { id: "STRIDE-I-1", severity: "medium", title: "S3 URLs may expose private files if misconfigured" },
];

export function LabelDemo() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (inView && !isPlaying && step === 0) setIsPlaying(true);
  }, [inView]);

  useEffect(() => {
    if (!isPlaying) return;
    const timers: NodeJS.Timeout[] = [];
    
    if (step === 0) timers.push(setTimeout(() => setStep(1), 1000));
    if (step === 1) timers.push(setTimeout(() => setStep(2), 1500));
    if (step === 2) timers.push(setTimeout(() => setStep(3), 2000));
    if (step === 3) timers.push(setTimeout(() => setStep(4), 2500));
    if (step === 4) timers.push(setTimeout(() => setStep(5), 2000));
    if (step === 5) timers.push(setTimeout(() => setIsPlaying(false), 500));

    return () => timers.forEach(clearTimeout);
  }, [step, isPlaying]);

  return (
    <section id="demo-label" className="py-24 bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Pre-Implementation Threat Modeling</h2>
          <p className="mt-4 text-muted-foreground text-lg">Shift left to the planning phase. Trigger analysis on feature descriptions before any code is written.</p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
          {/* Issue Header */}
          <div className="p-6 border-b border-border bg-muted/30">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <FileText className="w-5 h-5" />
                  <span className="font-semibold">Issue #128</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Feature: Add file upload endpoint for profile pictures</h3>
              </div>
              
              {/* Animated Labels */}
              <div className="flex flex-col gap-2 items-end">
                <AnimatePresence mode="wait">
                  {step >= 1 && step < 5 && (
                    <motion.div
                      key="needs-model"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-sm font-semibold"
                    >
                      <Tag className="w-3.5 h-3.5" /> needs-threat-model
                    </motion.div>
                  )}
                  {step >= 5 && (
                    <motion.div
                      key="complete"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-1.5 px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-semibold"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" /> threat-model-complete
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-2xl">
              Description: We need to allow users to upload profile pictures. The files should be stored in S3 and the URL saved to the user's profile. Client will send multipart/form-data.
            </p>
          </div>

          {/* Analysis Area */}
          <div className="p-6 min-h-[300px] flex flex-col justify-center bg-background/50">
            <AnimatePresence mode="wait">
              {step === 2 && (
                <motion.div 
                  key="analyzing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                  <p className="text-primary font-medium text-glow-cyan">Agent analyzing feature description for design risks...</p>
                </motion.div>
              )}

              {step >= 3 && (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <h4 className="font-bold text-foreground border-b border-border pb-2 mb-4">Identified Design Risks to Address:</h4>
                  {DESIGN_THREATS.slice(0, step >= 4 ? 3 : 1).map((threat, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      key={threat.id}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card"
                    >
                      <span className="font-mono text-xs font-bold text-muted-foreground w-24 shrink-0">{threat.id}</span>
                      <span className={cn(
                        "px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider border shrink-0",
                        threat.severity === 'high' ? "bg-orange-500/10 text-orange-500 border-orange-500/20" : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                      )}>
                        {threat.severity}
                      </span>
                      <span className="text-sm font-medium text-foreground">{threat.title}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 text-center">
           <button 
            onClick={() => { setStep(0); setIsPlaying(true); }}
            disabled={isPlaying}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50"
          >
            <RotateCcw className="w-4 h-4" /> Replay
          </button>
        </div>
      </div>
    </section>
  );
}
