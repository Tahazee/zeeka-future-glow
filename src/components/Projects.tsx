import { Layers, Cpu, Shield } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Holographic Interface",
    category: "UI/UX Design",
    image: project1,
    icon: Layers,
    description: "Next-gen data visualization",
  },
  {
    id: 2,
    title: "AI Neural System",
    category: "Machine Learning",
    image: project2,
    icon: Cpu,
    description: "Intelligent automation platform",
  },
  {
    id: 3,
    title: "Secure Dashboard",
    category: "Cybersecurity",
    image: project3,
    icon: Shield,
    description: "Enterprise-grade protection",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-neon-aqua mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative backdrop-blur-glass bg-glass border border-glass-border rounded-2xl overflow-hidden shadow-glass hover:shadow-glow-green transition-all duration-500 animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 p-3 backdrop-blur-glass bg-glass border border-glass-border rounded-lg">
                  <project.icon className="w-5 h-5 text-neon-green" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-neon-green mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
