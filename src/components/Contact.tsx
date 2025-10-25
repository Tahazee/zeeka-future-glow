import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nextgen.systems",
    href: "mailto:hello@nextgen.systems",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

export const Contact = () => {
  const titleRef = useScrollReveal({ threshold: 0.3 });
  const leftColRef = useScrollReveal({ threshold: 0.2, delay: 100 });
  const rightColRef = useScrollReveal({ threshold: 0.2, delay: 200 });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute top-32 right-1/4 w-3 h-3 rounded-full bg-accent-green/40 animate-particle-float" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-accent-cyan/30 animate-particle-float" style={{ animationDelay: '1s' }} />
      
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-neon-green/10 blur-3xl pointer-events-none animate-drift" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef as any} className="text-center mb-16 scroll-reveal">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-neon-green mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Let's Build Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div ref={leftColRef as any} className="space-y-4 scroll-reveal-left">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                className={`block backdrop-blur-glass bg-glass border border-glass-border rounded-xl p-6 shadow-glass hover:shadow-glow-aqua transition-all duration-500 hover:scale-110 hover:-translate-x-2 group stagger-${index + 1}`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-neon-green/10 border border-neon-green/20 group-hover:bg-neon-green/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-neon-green transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div ref={rightColRef as any} className="backdrop-blur-glass bg-glass border border-glass-border rounded-2xl p-8 shadow-glass scroll-reveal-right hover:shadow-glow-green transition-all duration-500">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg focus:outline-none focus:border-neon-green focus:shadow-glow-green transition-all text-foreground"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg focus:outline-none focus:border-neon-green focus:shadow-glow-green transition-all text-foreground"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg focus:outline-none focus:border-neon-green focus:shadow-glow-green transition-all text-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-neon-green text-background font-bold hover:shadow-glow-green hover:scale-105 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
