import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Analytics", href: "#overview" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      role="banner"
    >
      {/* 3D Glass Navigation Bar */}
      <div className="relative">
        {/* Background with prismatic effect */}
        <div 
          className="absolute inset-0 backdrop-blur-glass"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.03), rgba(164, 0, 255, 0.03))',
            borderBottom: '1px solid hsl(var(--glass-border))',
          }}
        />
        
        {/* Animated top border glow */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-60 animate-shimmer" 
          style={{ backgroundSize: '200% 100%' }} 
        />

        <div className="header-inner container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* 3D Logo with crystal effect */}
            <a 
              href="#home" 
              className="brand relative group focus:outline-none"
              aria-label="NextGen Systems - Home"
            >
              <div className="relative perspective-[1000px]">
                <div className="flex items-center gap-3 transform transition-all duration-500 group-hover:scale-105 preserve-3d">
                  <div className="relative w-10 h-10">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-cyan via-accent-green to-accent-purple opacity-80 blur-md animate-prism" />
                    <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center shadow-glow-green">
                      <Zap className="w-5 h-5 text-background" />
                    </div>
                  </div>
                  <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-accent-cyan via-accent-green to-accent-purple bg-clip-text text-transparent">
                    NEXTGEN
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop 3D Navigation */}
            <nav className="nav hidden md:flex items-center gap-2" role="navigation" aria-label="Main">
              <ul className="nav-list flex items-center gap-2">
                {navItems.map((item, index) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="nav-link relative px-6 py-2.5 text-sm font-bold text-foreground overflow-hidden rounded-xl transition-all duration-500 group preserve-3d"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Hover background with 3D effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                      <div className="absolute inset-0 border border-glass-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                      
                      {/* Text */}
                      <span className="relative z-10 group-hover:text-accent-cyan transition-colors duration-300">
                        {item.label}
                      </span>
                      
                      {/* Bottom crystal line */}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-green group-hover:w-3/4 transition-all duration-500 shadow-glow-aqua" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 3D CTA Button */}
            <div className="header-cta hidden md:block">
              <Button 
                className="relative px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-cyan text-background font-bold rounded-xl overflow-hidden group preserve-3d"
                aria-label="Get started with NextGen Systems"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 group-hover:scale-105 inline-block transition-transform duration-300">Get Started</span>
                <div className="absolute inset-0 shadow-glow-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </div>

            {/* Mobile Menu Button with 3D effect */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative overflow-hidden rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 opacity-0 hover:opacity-100 transition-opacity" />
              {mobileMenuOpen ? (
                <X className="h-6 w-6 relative z-10" />
              ) : (
                <Menu className="h-6 w-6 relative z-10" />
              )}
            </Button>
          </div>
        </div>

        {/* Bottom prismatic border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
      </div>

      {/* Mobile Menu with crystal effect */}
      {mobileMenuOpen && (
        <div className="md:hidden relative backdrop-blur-glass border-t border-glass-border animate-slide-in-up">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 to-accent-purple/5" />
          <div className="relative px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-foreground hover:text-accent-cyan transition-all font-bold rounded-xl hover:bg-glass-bg border border-transparent hover:border-glass-border"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="w-full mt-4 bg-gradient-to-r from-accent-purple to-accent-cyan text-background font-bold py-3 rounded-xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
