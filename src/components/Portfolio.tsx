import { useState } from "react";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

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

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          Our <span className="text-accent">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-2xl font-bold text-accent">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-border rounded-lg overflow-hidden shadow-glow-purple"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-accent transition-colors"
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
