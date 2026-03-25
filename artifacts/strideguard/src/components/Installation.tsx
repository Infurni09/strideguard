import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Installation() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("git clone https://github.com/Infurni09/StrideGuard.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">Quick Start — 5 Minutes to Setup</h2>
          <p className="mt-4 text-muted-foreground">Add StrideGuard to your GitLab project today.</p>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-6">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-bold text-foreground mb-2">Clone the repository</h3>
              <div className="relative">
                <pre className="bg-[#0d1117] text-gray-300 p-4 rounded-lg font-mono text-sm border border-border overflow-x-auto">
                  <code>git clone https://github.com/Infurni09/StrideGuard.git</code>
                </pre>
                <button
                  onClick={copyCommand}
                  className="absolute right-2 top-2 p-2 rounded bg-card hover:bg-muted text-muted-foreground transition-colors border border-border"
                  title="Copy command"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-secondary" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-bold text-foreground mb-2">Register the Agent in GitLab</h3>
              <p className="text-muted-foreground">
                In your GitLab project, navigate to <strong className="text-foreground">Settings → Duo agents → New agent</strong>. Name the agent{" "}
                <code className="text-primary font-mono bg-primary/10 px-1 py-0.5 rounded">strideguard</code>.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-bold text-foreground mb-2">Point to the config file</h3>
              <p className="text-muted-foreground mb-3">
                Set the agent config path to <code className="font-mono text-sm text-primary bg-primary/10 px-1 py-0.5 rounded">.gitlab/agents/strideguard/config.yaml</code> from this repository (or copy it into your own project).
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-6">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">4</div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-bold text-foreground mb-2">Grant permissions</h3>
              <p className="text-muted-foreground mb-4">
                Under <strong className="text-foreground">Settings → Duo agents → strideguard → Permissions</strong>, grant the following:
              </p>
              <div className="flex flex-wrap gap-2">
                {['create_issue', 'update_issue', 'close_issue', 'create_note', 'update_note'].map(perm => (
                  <span key={perm} className="px-3 py-1 rounded-full bg-muted border border-border font-mono text-xs text-foreground">
                    {perm}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-6">
            <div className="shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-xl font-bold text-foreground mb-2">Open a Merge Request</h3>
              <p className="text-muted-foreground">
                StrideGuard will now trigger automatically on every new or updated merge request in your project. No developer action required — security analysis runs silently in the background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
