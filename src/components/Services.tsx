import { Brain, LayoutDashboard, Database } from "lucide-react";

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
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          Our <span className="text-primary">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-glow-purple transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex">
                <div className="p-4 bg-gradient-cyber rounded-lg group-hover:shadow-glow-cyan transition-all duration-300">
                  <service.icon className="h-8 w-8 text-background" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
