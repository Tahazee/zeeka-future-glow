import { Button } from "./ui/button";
import vrHero from "@/assets/vr-hero.jpg";
import workspaceHero from "@/assets/workspace-hero.jpg";
import { Users, TrendingUp, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-neon-green/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-neon-aqua/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: VR Person */}
          <div className="lg:col-span-4 relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow-green">
              <img 
                src={vrHero} 
                alt="Person wearing VR headset in futuristic environment"
                className="w-full h-auto object-cover"
              />
              {/* Green floating orbs */}
              <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-neon-green animate-pulse shadow-glow-green" />
              <div className="absolute top-32 left-24 w-6 h-6 rounded-full bg-neon-green animate-pulse shadow-glow-green" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-40 left-16 w-10 h-10 rounded-full bg-neon-green animate-pulse shadow-glow-green" style={{ animationDelay: '1s' }} />
            </div>

            {/* Glass card at bottom */}
            <div className="mt-6 backdrop-blur-glass bg-glass border border-glass-border rounded-xl p-6 shadow-glass">
              <p className="text-sm text-muted-foreground leading-relaxed">
                We turn bold visions into digital realities with creativity and precision
              </p>
            </div>
          </div>

          {/* Center: Main Content */}
          <div className="lg:col-span-4 text-center space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground">
                We Craft Experiences
              </p>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                <span className="block text-foreground">
                  NEXTGEN
                </span>
                <span className="block text-foreground">
                  SYSTEMS
                </span>
              </h1>
            </div>

            {/* Metrics with glass effect */}
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="backdrop-blur-glass bg-glass border border-glass-border rounded-lg p-4 min-w-[120px] shadow-glass">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-neon-green" />
                  <p className="text-2xl font-bold text-foreground">24+</p>
                </div>
                <p className="text-xs text-muted-foreground">Trusted by Clients</p>
              </div>

              <div className="backdrop-blur-glass bg-glass border border-glass-border rounded-lg p-4 min-w-[120px] shadow-glass">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-neon-aqua" />
                  <p className="text-2xl font-bold text-foreground">4.5x</p>
                </div>
                <p className="text-xs text-muted-foreground">Brand Growth</p>
              </div>

              <div className="backdrop-blur-glass bg-glass border border-glass-border rounded-lg p-4 min-w-[120px] shadow-glass">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-neon-green" />
                  <p className="text-2xl font-bold text-foreground">98.2%</p>
                </div>
                <p className="text-xs text-muted-foreground">Innovation Rate</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-neon-green text-background font-bold hover:shadow-glow-green transition-all duration-300 hover:scale-105"
            >
              Explore Projects
            </Button>
          </div>

          {/* Right: Workspace */}
          <div className="lg:col-span-4 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-glow-aqua">
              <img 
                src={workspaceHero} 
                alt="Modern workspace with laptop and tech setup"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Glass card on top right */}
            <div className="absolute top-4 right-4 backdrop-blur-glass bg-glass border border-glass-border rounded-lg p-4 shadow-glass">
              <p className="text-xs uppercase tracking-wider text-neon-green mb-1">
                Empowering Innovation
              </p>
              <p className="text-xs text-muted-foreground">
                Secure, efficient, innovative
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
