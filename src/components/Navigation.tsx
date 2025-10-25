import { useState } from "react";
import { Menu, BarChart3, ShoppingBag, Mic, User } from "lucide-react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="relative flex items-center justify-between px-8 py-4 w-[90vw] md:w-[720px]
        rounded-full backdrop-blur-3xl bg-white/5 border border-white/10
        shadow-[0_0_40px_rgba(255,255,255,0.1)] 
        before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-10
        transition-all duration-500"
      >
        {/* Left glass bubble for menu */}
        <button
          onClick={() => setOpen(!open)}
          className="relative flex items-center justify-center w-14 h-14 
          rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 
          hover:bg-white/20 transition-all duration-300 shadow-inner shadow-white/10"
        >
          <Menu className="text-white w-6 h-6" />
        </button>

        {/* Capsule menu */}
        <nav
          className="relative flex items-center justify-between gap-8 px-10 py-3 
          rounded-full backdrop-blur-3xl bg-white/10 border border-white/10 
          shadow-[inset_0_2px_8px_rgba(255,255,255,0.1),0_0_25px_rgba(255,255,255,0.08)]
          before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-t before:from-white/10 before:to-transparent before:opacity-10
          transition-all duration-700"
        >
          <a href="#home" className="group relative">
            <BarChart3 className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
            <span className="sr-only">Home</span>
          </a>
          <a href="#dashboard" className="group relative">
            <ShoppingBag className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
            <span className="sr-only">Shop</span>
          </a>
          <a href="#mic" className="group relative">
            <Mic className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
            <span className="sr-only">Voice</span>
          </a>
          <a href="#profile" className="group relative">
            <User className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
            <span className="sr-only">Profile</span>
          </a>

          {/* subtle light reflection line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm opacity-30"></div>
        </nav>
      </div>

      {/* Optional Mobile drop animation */}
      {open && (
        <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[80vw] rounded-3xl 
          backdrop-blur-3xl bg-white/10 border border-white/10 py-4 animate-slide-in">
          <ul className="flex flex-col items-center gap-3">
            <li><a href="#home" className="text-white hover:text-cyan-300 font-medium">Home</a></li>
            <li><a href="#features" className="text-white hover:text-cyan-300 font-medium">Features</a></li>
            <li><a href="#projects" className="text-white hover:text-cyan-300 font-medium">Projects</a></li>
            <li><a href="#contact" className="text-white hover:text-cyan-300 font-medium">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};
