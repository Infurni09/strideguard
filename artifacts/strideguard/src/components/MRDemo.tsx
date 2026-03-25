import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, GitMerge, FileCode, CheckCircle2, RotateCcw, AlertTriangle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const THREATS = [
  { id: "STRIDE-T-1", severity: "high", title: "SQL injection via unsanitized order_id parameter", file: "api/payments.py", cwe: "CWE-89" },
  { id: "STRIDE-I-1", severity: "high", title: "Hardcoded Stripe API key in source code", file: "api/payments.py", cwe: "CWE-798" },
  { id: "STRIDE-S-1", severity: "medium", title: "No authentication on /api/payments/initiate", file: "api/payments.py", cwe: "CWE-306" },
  { id: "STRIDE-I-2", severity: "medium", title: "db_path and key prefix returned in API response", file: "api/payments.py", cwe: "CWE-200" },
  { id: "STRIDE-R-1", severity: "low", title: "Audit log entry missing user_id field", file: "api/payments.py", cwe: null },
];

const SEVERITY_COLORS = {
  critical: "bg-severity-critical/10 text-severity-critical border-severity-critical/20",
  high: "bg-severity-high/10 text-severity-high border-severity-high/20",
  medium: "bg-severity-medium/10 text-severity-medium border-severity-medium/20",
  low: "bg-severity-low/10 text-severity-low border-severity-low/20",
};

export function MRDemo() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (inView && !isPlaying && step === 0) {
      setIsPlaying(true);
    }
  }, [inView]);

  useEffect(() => {
    if (!isPlaying) return;

    const timers: NodeJS.Timeout[] = [];
    
    if (step === 0) timers.push(setTimeout(() => setStep(1), 1000));
    if (step === 1) timers.push(setTimeout(() => setStep(2), 2000));
    if (step === 2) timers.push(setTimeout(() => setStep(3), 2000));
    if (step === 3) timers.push(setTimeout(() => setStep(4), 3000));
    if (step === 4) timers.push(setTimeout(() => setStep(5), 4500));
    if (step === 5) timers.push(setTimeout(() => setIsPlaying(false), 1000));

    return () => timers.forEach(clearTimeout);
  }, [step, isPlaying]);

  const handleReplay = () => {
    setStep(0);
    setIsPlaying(true);
  };

  return (
    <section id="demo-mr" className="py-24 bg-card/30 border-y border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">See It In Action — MR Trigger Flow</h2>
          <p className="mt-4 text-muted-foreground text-lg">StrideGuard analyzes the diff and generates structured security issues instantly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          
          {/* LEFT PANEL - MR Context */}
          <div className="flex flex-col gap-6">
            <AnimatePresence>
              {step >= 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card rounded-xl border border-border overflow-hidden shadow-lg"
                >
                  <div className="p-4 border-b border-border bg-muted/50 flex items-center gap-3">
                    <GitMerge className="w-5 h-5 text-secondary" />
                    <h3 className="font-semibold text-foreground">!47 Add payments endpoint</h3>
                    <span className="ml-auto text-xs font-mono text-muted-foreground">opened just now</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <FileCode className="w-4 h-4" />
                      <span className="font-mono">api/payments.py</span>
                    </div>
                    <div className="font-mono text-sm bg-[#0d1117] p-4 rounded-lg border border-border/50 overflow-x-auto">
                      <div className="text-muted-foreground mb-2">@@ -45,6 +45,18 @@</div>
                      <div className="text-red-400 bg-red-950/30 px-2 py-0.5 border-l-2 border-red-500">
                        - order = db.query("SELECT * FROM orders WHERE id = ?", id)
                      </div>
                      <div className="text-green-400 bg-green-950/30 px-2 py-0.5 border-l-2 border-green-500">
                        + order_id = request.args.get('order_id')
                      </div>
                      <div className="text-green-400 bg-green-950/30 px-2 py-0.5 border-l-2 border-green-500">
                        {`+ order = db.query(f"SELECT * FROM orders WHERE id = {order_id}")`}
                      </div>
                      <div className="text-green-400 bg-green-950/30 px-2 py-0.5 border-l-2 border-green-500">
                        + STRIPE_KEY = "sk_live_123456789"
                      </div>
                      <div className="text-green-400 bg-green-950/30 px-2 py-0.5 border-l-2 border-green-500">
                        {`+ return jsonify({"status": "ok", "db_path": db.path})`}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {step >= 2 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={cn(
                    "p-6 rounded-xl border flex items-center gap-4 shadow-lg transition-all duration-500",
                    step === 2 || step === 3 ? "bg-primary/5 border-primary/30 box-glow-cyan" : "bg-card border-border"
                  )}
                >
                  <div className="relative">
                    {(step === 2 || step === 3) && (
                      <div className="absolute inset-0 rounded-full blur-md bg-primary/50 animate-pulse"></div>
                    )}
                    <Shield className={cn(
                      "w-10 h-10 relative z-10 transition-colors duration-500",
                      step === 2 || step === 3 ? "text-primary drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]" : "text-muted-foreground"
                    )} />
                  </div>
                  <div>
                    <h4 className={cn("font-bold text-lg transition-colors", step === 2 || step === 3 ? "text-primary" : "text-foreground")}>
                      {step === 2 ? "StrideGuard Triggered" : step === 3 ? "Analyzing STRIDE Categories..." : "Analysis Complete"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step === 2 ? "Agent reading diff and context files." : 
                       step === 3 ? "Reasoning through Spoofing, Tampering, Repudiation..." : 
                       "5 threats identified."}
                    </p>
                  </div>
                  
                  {/* STRIDE Scanning indicators */}
                  {step === 3 && (
                    <div className="ml-auto flex gap-1">
                      {["S","T","R","I","D","E"].map((letter, i) => (
                        <motion.div 
                          key={letter}
                          initial={{ opacity: 0.2 }}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          className="w-6 h-6 flex items-center justify-center rounded bg-primary/20 text-primary font-mono text-xs font-bold"
                        >
                          {letter}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT PANEL - Issues Output */}
          <div className="flex flex-col gap-4 relative">
            <div className="absolute top-0 bottom-0 left-6 w-px bg-border -z-10 hidden sm:block"></div>
            
            <AnimatePresence>
              {step >= 4 && THREATS.map((threat, index) => (
                <motion.div
                  key={threat.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className="bg-card rounded-xl border border-border p-4 shadow-sm relative sm:ml-12"
                >
                  <div className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-card border-2 border-primary hidden sm:block"></div>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-muted-foreground font-semibold">{threat.id}</span>
                    <span className={cn("px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider border", SEVERITY_COLORS[threat.severity as keyof typeof SEVERITY_COLORS])}>
                      {threat.severity}
                    </span>
                    {threat.cwe && (
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground border border-border">
                        {threat.cwe}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{threat.title}</h4>
                  <div className="text-xs text-muted-foreground font-mono bg-muted/50 p-1.5 rounded inline-block">
                    {threat.file}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <AnimatePresence>
              {step >= 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-6 bg-[#1e2329] rounded-xl border border-border overflow-hidden sm:ml-12 shadow-xl"
                >
                  <div className="p-3 border-b border-border bg-card flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-semibold text-foreground">StrideGuard posted a comment</span>
                  </div>
                  <div className="p-5 text-sm text-foreground space-y-4">
                    <h3 className="text-lg font-bold border-b border-border pb-2">StrideGuard Threat Model</h3>
                    <p>StrideGuard identified <strong>5 threat(s)</strong> across 4 STRIDE categories.</p>
                    
                    <div className="bg-card border border-border rounded overflow-hidden">
                      <table className="w-full text-left">
                        <thead className="bg-muted">
                          <tr>
                            <th className="p-2 font-semibold">ID</th>
                            <th className="p-2 font-semibold">Severity</th>
                            <th className="p-2 font-semibold">Issue</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr>
                            <td className="p-2 font-mono text-xs">STRIDE-T-1</td>
                            <td className="p-2"><span className="text-orange-400">high</span></td>
                            <td className="p-2 text-primary hover:underline cursor-pointer">#42</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-mono text-xs">STRIDE-I-1</td>
                            <td className="p-2"><span className="text-orange-400">high</span></td>
                            <td className="p-2 text-primary hover:underline cursor-pointer">#43</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-muted-foreground italic" colSpan={3}>... 3 more threats</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-orange-950/20 border border-orange-500/30 rounded text-orange-200">
                      <AlertTriangle className="w-5 h-5 shrink-0 text-orange-500" />
                      <p className="text-xs"><strong>Action required:</strong> This MR contains high severity threats. Please address the linked issues before merging.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex justify-center">
          <button 
            onClick={handleReplay}
            disabled={isPlaying}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-muted hover:bg-muted/80 text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RotateCcw className={cn("w-5 h-5", isPlaying && "animate-spin-slow")} />
            {isPlaying ? "Simulating..." : "Replay Simulation"}
          </button>
        </div>
      </div>
    </section>
  );
}
