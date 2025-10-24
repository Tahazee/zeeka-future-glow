import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Logo & Tagline */}
          <div className="space-y-3">
            <h3 className="text-2xl font-black">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                ZEEKA
              </span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Automate Intelligence. Accelerate Tomorrow.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex justify-start md:justify-end gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="p-3 border-2 border-accent/50 rounded-full hover:bg-accent hover:border-accent transition-all duration-300 hover:shadow-glow-cyan group"
              >
                <link.icon className="h-5 w-5 text-accent group-hover:text-background transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Zeeka Tech Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
