import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

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
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-neon-green mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Let's Build Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                className="block backdrop-blur-glass bg-glass border border-glass-border rounded-xl p-6 shadow-glass hover:shadow-glow-aqua transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-neon-green/10 border border-neon-green/20 group-hover:bg-neon-green/20 transition-colors">
                    <info.icon className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-glass bg-glass border border-glass-border rounded-2xl p-8 shadow-glass animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg focus:outline-none focus:border-neon-green transition-colors text-foreground"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg focus:outline-none focus:border-neon-green transition-colors text-foreground"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg focus:outline-none focus:border-neon-green transition-colors text-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-neon-green text-background font-bold hover:shadow-glow-green transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-neon-green/10 blur-3xl pointer-events-none" />
    </section>
  );
};
