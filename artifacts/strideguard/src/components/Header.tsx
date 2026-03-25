import { Shield } from "lucide-react";
import { Github } from "lucide-react";

export function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("top")}>
            <Shield className="w-8 h-8 text-primary" strokeWidth={1.5} />
            <span className="font-display font-bold text-xl tracking-wide text-foreground">
              Stride<span className="text-primary">Guard</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("features")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</button>
            <button onClick={() => scrollTo("demo-mr")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">MR Demo</button>
            <button onClick={() => scrollTo("demo-label")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Label Demo</button>
            <button onClick={() => scrollTo("architecture")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Architecture</button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Infurni09/StrideGuard"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border border-border text-foreground hover:border-foreground/50 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://gitlab.com/gitlab-ai-hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View on GitLab
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
