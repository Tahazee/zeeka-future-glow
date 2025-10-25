import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="relative flex items-center justify-center gap-10 px-10 py-3
        rounded-full border border-white/10 
        bg-gradient-to-b from-white/10 via-white/5 to-transparent
        backdrop-blur-3xl
        shadow-[inset_0_1px_6px_rgba(255,255,255,0.2),0_0_25px_rgba(255,255,255,0.1)]
        overflow-hidden w-[80vw] md:w-[600px]
        animate-glow hover:shadow-[inset_0_1px_8px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.15)]
        transition-all duration-700"
      >
        {/* Flowing light reflection */}
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)] blur-3xl animate-flow opacity-30"></span>

        {/* Moving highlight streak */}
        <span className="absolute -left-1/3 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40 animate-slide-glow"></span>

        {/* Nav Links */}
        <nav className="relative flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/80 font-semibold text-sm tracking-wide 
              hover:text-white hover:scale-105 transition-all duration-300 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-white/60 to-transparent group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
