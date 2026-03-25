import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-muted-foreground" />
          <span className="font-display font-bold text-lg text-muted-foreground">
            StrideGuard
          </span>
        </div>

        <div className="text-center md:text-left text-sm text-muted-foreground">
          Built for the <a href="https://gitlab.com/gitlab-ai-hackathon" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitLab AI Hackathon</a> • MIT License
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/Infurni09/StrideGuard" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            GitHub Repository
          </a>
          <a href="https://gitlab.com/gitlab-ai-hackathon/strideguard" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            GitLab Group
          </a>
        </div>

      </div>
    </footer>
  );
}
