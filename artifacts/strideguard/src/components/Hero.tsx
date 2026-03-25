import { motion } from "framer-motion";
import { Shield, ChevronRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image & Effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-primary/30 animate-pulse"></div>
            <Shield className="w-24 h-24 text-primary relative z-10 drop-shadow-[0_0_15px_rgba(0,210,255,0.5)]" strokeWidth={1} />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight mb-6"
        >
          AI threat modeling <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            on every merge request.
          </span>
          <br /> Automatically.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          StrideGuard is an AI agent built on the GitLab Duo Agent Platform that automatically
          performs STRIDE threat modeling on merge requests and epics — before vulnerabilities
          reach production.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://gitlab.com/gitlab-ai-hackathon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            View on GitLab
            <ChevronRight className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/Infurni09/StrideGuard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-card border border-border text-foreground hover:bg-muted transition-all duration-200"
          >
            <Terminal className="w-5 h-5" />
            GitHub Repo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
