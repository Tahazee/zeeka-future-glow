import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] z-50 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,255,255,0.35)]">
      {/* Inner Container */}
      <div className="relative flex items-center justify-between px-6 py-4">
        
        {/* 3D Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center w-full h-full rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 shadow-lg shadow-cyan-500/30 transform group-hover:rotate-y-12 group-hover:rotate-x-6 transition-transform duration-500">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-500">
            NEOGEN
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="relative text-sm font-bold text-white/80 hover:text-cyan-300 tracking-wide transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button className="relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-500 hover:scale-105">
            Launch App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 backdrop-blur-xl bg-gradient-to-b from-cyan-900/40 to-purple-900/20 rounded-b-2xl animate-slide-in">
          <ul className="flex flex-col items-center gap-3 py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-white font-semibold hover:text-cyan-300 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <Button className="mt-2 w-10/12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-2">
              Launch App
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
