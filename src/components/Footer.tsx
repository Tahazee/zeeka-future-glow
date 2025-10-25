import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", name: "GitHub" },
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Mail, href: "#contact", name: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-glass-border backdrop-blur-glass bg-glass relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute top-6 left-1/4 w-2 h-2 rounded-full bg-neon-green/30 animate-particle-float" />
      <div className="absolute bottom-6 right-1/4 w-2 h-2 rounded-full bg-accent-cyan/30 animate-particle-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Logo and tagline */}
          <div>
            <h3 className="text-2xl font-black mb-2 text-neon-green">
              NEXTGEN SYSTEMS
            </h3>
            <p className="text-sm text-muted-foreground">
              Crafting tomorrow's digital experiences today.
            </p>
          </div>

          {/* Right: Social links */}
          <div className="flex gap-4 justify-start md:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-neon-green/20 hover:bg-neon-green/10 hover:border-neon-green transition-all duration-300 hover:shadow-glow-green hover:scale-110 hover:rotate-12 group"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5 text-neon-green transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-glass-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NextGen Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
