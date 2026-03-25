import { ShieldAlert, Edit3, ClipboardList, EyeOff, ZapOff, Crown } from "lucide-react";

const STRIDE_DATA = [
  {
    letter: "S",
    name: "Spoofing",
    icon: ShieldAlert,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    desc: "Missing or bypassable auth, weak token validation, session fixation, insecure SSO implementations."
  },
  {
    letter: "T",
    name: "Tampering",
    icon: Edit3,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    desc: "Unsanitized input reaching DBs/files, SQL injection, missing integrity checks, deserialization."
  },
  {
    letter: "R",
    name: "Repudiation",
    icon: ClipboardList,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    desc: "Actions without audit log entries, log entries missing user ID/timestamp, writable audit logs."
  },
  {
    letter: "I",
    name: "Information Disclosure",
    icon: EyeOff,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    desc: "Hardcoded secrets, PII in logs, stack traces in API responses, overly permissive CORS."
  },
  {
    letter: "D",
    name: "Denial of Service",
    icon: ZapOff,
    color: "text-red-400",
    bg: "bg-red-500/10",
    desc: "No rate limiting, unbounded queries, file uploads without size validation, missing timeouts."
  },
  {
    letter: "E",
    name: "Elevation of Privilege",
    icon: Crown,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    desc: "BOLA/IDOR, missing permission checks before privileged ops, admin routes accessible to users."
  }
];

export function StrideTable() {
  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Structured Methodology</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            StrideGuard isn't just a generic code reviewer. It systematically reasons through all six categories of the Microsoft STRIDE threat modeling framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRIDE_DATA.map((item) => (
            <div 
              key={item.letter}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,210,255,0.1)] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-primary">{item.letter}</div>
                  <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
