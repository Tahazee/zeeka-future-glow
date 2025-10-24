import { Button } from "./ui/button";
import heroGrid from "@/assets/hero-3d-grid.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={heroGrid} 
          alt="3D digital grid tunnel with neon lights"
          className="w-full h-full object-cover animate-float"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="block bg-gradient-cyber bg-clip-text text-transparent">
              ZEEKA
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-accent font-semibold mb-8 animate-glow-pulse">
            Automate Intelligence. Accelerate Tomorrow.
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            We build tomorrow's intelligent systems today. Transform your business with cutting-edge AI automation and data-driven solutions.
          </p>

          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Started
          </Button>
        </div>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      </div>
    </section>
  );
};
