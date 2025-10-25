import { Brain, LayoutDashboard, Database } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Brain,
    title: "AI Automation",
    description: "Intelligent systems that learn, adapt, and optimize your business processes automatically.",
  },
  {
    icon: LayoutDashboard,
    title: "Smart Dashboards",
    description: "Real-time data visualization with predictive analytics and actionable insights.",
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless connectivity across platforms, unifying your data ecosystem.",
  },
];

export const Services = () => {
  const titleRef = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Rotating decorative rings */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-accent-cyan/10 animate-rotate-slow" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full border border-accent-purple/10 animate-rotate-slow" style={{ animationDelay: '5s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-40 right-1/4 w-2 h-2 rounded-full bg-accent-green/40 animate-particle-float" />
      <div className="absolute bottom-40 left-1/4 w-3 h-3 rounded-full bg-accent-cyan/30 animate-particle-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef as any} className="text-4xl md:text-5xl font-black text-center mb-16 scroll-reveal">
          Our <span className="text-primary">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const cardRef = useScrollReveal({ threshold: 0.2, delay: index * 100 });
            
            return (
              <div
                key={service.title}
                ref={cardRef as any}
                className="group bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-glow-purple transition-all duration-500 hover:scale-110 hover:-translate-y-4 scroll-reveal-scale cursor-pointer"
              >
                <div className="mb-6 inline-flex">
                  <div className="p-4 bg-gradient-cyber rounded-lg group-hover:shadow-glow-cyan transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <service.icon className="h-8 w-8 text-background" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent-cyan transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
