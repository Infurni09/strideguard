import { ArrowRight } from "lucide-react";

export function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-background border-y border-border relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How StrideGuard Works</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Built natively on the GitLab Duo Agent Platform, utilizing triggers, context, and tools.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-8">
          
          {/* Pillar 1: Triggers */}
          <div className="flex-1 bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
              Step 1: Triggers
            </div>
            <ul className="space-y-4 font-mono text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                merge_request (opened / updated)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                label: needs-threat-model
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center justify-center text-border">
            <ArrowRight className="w-8 h-8" />
          </div>

          {/* Pillar 2: Context */}
          <div className="flex-1 bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
              Step 2: Context
            </div>
            <ul className="space-y-3 font-mono text-sm text-muted-foreground">
              <li className="bg-background px-3 py-2 rounded border border-border/50">merge_request_diff</li>
              <li className="bg-background px-3 py-2 rounded border border-border/50">repository_files (*.py, *.go, *.ts...)</li>
              <li className="bg-background px-3 py-2 rounded border border-border/50">issue_description</li>
              <li className="bg-background px-3 py-2 rounded border border-border/50">epic_description</li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center justify-center text-border">
            <ArrowRight className="w-8 h-8" />
          </div>

          {/* Pillar 3: Tools */}
          <div className="flex-1 bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
              Step 3: Tools
            </div>
            <ul className="space-y-3 font-mono text-sm text-muted-foreground">
              <li className="flex justify-between items-center bg-background px-3 py-2 rounded border border-border/50">
                <span>gitlab:list_issues</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">dedupe</span>
              </li>
              <li className="flex justify-between items-center bg-background px-3 py-2 rounded border border-border/50">
                <span>gitlab:create_issue</span>
                <span className="text-[10px] text-primary uppercase tracking-wider">create</span>
              </li>
              <li className="flex justify-between items-center bg-background px-3 py-2 rounded border border-border/50">
                <span>gitlab:update_issue</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">update</span>
              </li>
              <li className="flex justify-between items-center bg-background px-3 py-2 rounded border border-border/50">
                <span>gitlab:close_issue</span>
                <span className="text-[10px] text-secondary uppercase tracking-wider">resolve</span>
              </li>
              <li className="flex justify-between items-center bg-background px-3 py-2 rounded border border-border/50">
                <span>gitlab:create_note</span>
                <span className="text-[10px] text-primary uppercase tracking-wider">comment</span>
              </li>
              <li className="flex justify-between items-center bg-background px-3 py-2 rounded border border-border/50">
                <span>gitlab:update_note</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">update</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center max-w-3xl mx-auto">
          <p className="text-foreground leading-relaxed">
            StrideGuard reads the complete context, reasons through all 6 STRIDE categories internally, produces a structured JSON threat record, and only then reaches out via GitLab API tools to document its findings.
          </p>
        </div>
      </div>
    </section>
  );
}
