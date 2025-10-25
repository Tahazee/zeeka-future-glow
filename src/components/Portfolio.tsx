import { useState } from "react";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const portfolioItems = [
  {
    id: 1,
    title: "AI Command Center",
    image: portfolio1,
    description: "Advanced holographic interface for real-time AI monitoring and control.",
  },
  {
    id: 2,
    title: "Smart City Analytics",
    image: portfolio2,
    description: "Comprehensive dashboard for urban intelligence and predictive city management.",
  },
  {
    id: 3,
    title: "Neural Network Hub",
    image: portfolio3,
    description: "Data integration platform connecting distributed intelligence systems.",
  },
];

export const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const titleRef = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute top-32 left-1/3 w-3 h-3 rounded-full bg-accent-cyan/30 animate-particle-float" />
      <div className="absolute bottom-32 right-1/3 w-2 h-2 rounded-full bg-accent-purple/40 animate-particle-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef as any} className="text-4xl md:text-5xl font-black text-center mb-16 scroll-reveal">
          Our <span className="text-accent">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            const cardRef = useScrollReveal({ threshold: 0.2, delay: index * 150 });
            
            return (
              <div
                key={item.id}
                ref={cardRef as any}
                className="group relative overflow-hidden rounded-lg cursor-pointer scroll-reveal-scale hover:scale-105 transition-all duration-500"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-accent animate-text-reveal">{item.title}</h3>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-cyan transition-colors duration-500 rounded-lg" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-border rounded-lg overflow-hidden shadow-glow-purple animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-accent hover:rotate-90 transition-all duration-300"
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-auto"
            />
            <div className="p-8">
              <h3 className="text-3xl font-black text-primary mb-4">
                {selectedItem.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
