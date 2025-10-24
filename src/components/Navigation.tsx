import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#overview" },
  { label: "Dashboard", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="site-header fixed top-0 left-0 right-0 z-50 backdrop-blur-glass border-b transition-all duration-300"
      style={{
        backgroundColor: 'hsl(var(--glass-bg))',
        borderColor: 'hsl(var(--glass-border))',
      }}
      role="banner"
    >
      <div className="header-inner container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a 
            href="#home" 
            className="brand text-2xl font-black tracking-tight focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background rounded"
            aria-label="NextGen Systems - Home"
          >
            <span className="text-accent-green">
              NEXTGEN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav hidden md:flex items-center gap-8" role="navigation" aria-label="Main">
            <ul className="nav-list flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="nav-link text-foreground hover:text-accent-green transition-colors duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green group-hover:w-full transition-all duration-300" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header CTA */}
          <div className="header-cta hidden md:block">
            <Button 
              className="btn-primary bg-gradient-button text-background font-bold hover:shadow-glow-purple transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Get started with NextGen Systems"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-glass-border animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-foreground hover:text-accent-green transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-card rounded px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
