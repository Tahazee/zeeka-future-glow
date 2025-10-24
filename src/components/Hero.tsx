import { Button } from "./ui/button";
import vrHero from "@/assets/vr-hero.jpg";
import workspaceHero from "@/assets/workspace-hero.jpg";
import { Users, TrendingUp, Zap, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentDate] = useState(new Date());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const elements = heroRef.current.querySelectorAll('[data-parallax]');
        elements.forEach((el) => {
          const speed = parseFloat((el as HTMLElement).dataset.parallax || '1');
          (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="hero relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
      role="main"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      
      {/* Floating orbs - decorative */}
      <div 
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent-green/20 blur-3xl animate-float" 
        aria-hidden="true"
        data-parallax="0.3"
      />
      <div 
        className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-accent-cyan/20 blur-3xl animate-float" 
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
        data-parallax="0.3"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT CARD - Featured Course/Experience (25%) */}
          <div 
            className="lg:col-span-3 space-y-6"
            data-parallax="0.6"
          >
            {/* Main Featured Card */}
            <div className="glass-card rounded-2xl p-6 shadow-3d animate-fade-in-up group hover:shadow-glow-green transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-sm uppercase tracking-wider text-accent-green mb-2 font-bold">
                  Featured Experience
                </h3>
                <h2 className="text-2xl font-black leading-tight mb-3">
                  NEXTGEN
                  <br />
                  SYSTEMS
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Immersive VR experiences and cutting-edge digital solutions for tomorrow's challenges
                </p>
              </div>
              <Button 
                size="sm"
                className="w-full bg-gradient-button text-background font-bold hover:shadow-glow-purple transition-all duration-300 hover:scale-105"
              >
                Join Now
              </Button>
            </div>

            {/* Schedule Date Card */}
            <div className="glass-card rounded-xl p-4 shadow-3d animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent-cyan" />
                  <span className="text-xs font-bold text-foreground">{formatDate(currentDate)}</span>
                </div>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-glass rounded transition-colors" aria-label="Previous day">
                    <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="p-1 hover:bg-glass rounded transition-colors" aria-label="Next day">
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Time Schedule Items */}
            <div className="space-y-3">
              <div className="glass-card rounded-xl p-4 shadow-3d animate-fade-in-up hover:shadow-glow-aqua transition-all duration-300 group cursor-pointer" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-green/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 rounded-full border-2 border-accent-cyan animate-glow-pulse" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-accent-green">9:00 - 11:00</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent-purple/20 text-accent-purple font-bold">120</span>
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-1">VR Experience Design</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">Interactive session on immersive virtual reality interface development</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-3 shadow-3d animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center py-2">
                  <span className="text-xs font-bold text-accent-aqua uppercase tracking-wider">11:00 - 12:00</span>
                  <span className="mx-3 text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">Innovation Break</span>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 shadow-3d animate-fade-in-up hover:shadow-glow-green transition-all duration-300 group cursor-pointer" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-green/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-accent-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-accent-cyan">12:00 - 13:30</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent-green/20 text-accent-green font-bold">90</span>
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-1">AI Integration Workshop</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">Advanced techniques for implementing machine learning solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER - 3D Element with Floating Objects (50%) */}
          <div 
            className="lg:col-span-6 relative"
            data-parallax="0.4"
          >
            <div className="relative min-h-[500px] flex items-center justify-center">
              {/* Central 3D Object */}
              <div 
                className="relative w-64 h-64 preserve-3d animate-fade-in"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Core circle with glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-purple/30 via-accent-cyan/30 to-accent-green/30 blur-2xl animate-rotate-glow" />
                <div className="absolute inset-4 rounded-full glass-card shadow-glow-purple flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-green to-accent-cyan opacity-80 animate-glow-pulse shadow-glow-green" />
                  <div className="absolute inset-0 rounded-full border-4 border-accent-cyan/30 animate-[spin_8s_linear_infinite]" />
                  <div className="absolute inset-8 rounded-full border-2 border-accent-purple/30 animate-[spin_6s_linear_reverse_infinite]" />
                </div>
              </div>

              {/* Floating 3D Objects around center */}
              {/* Top Left - VR Image */}
              <div 
                className="absolute top-8 left-8 w-32 h-32 preserve-3d animate-float"
                style={{ 
                  animationDelay: '0s',
                  transform: `perspective(1000px) rotateY(${mousePosition.x * -8}deg) rotateX(${mousePosition.y * 8}deg)`
                }}
              >
                <div className="glass-card rounded-xl overflow-hidden shadow-glow-green group cursor-pointer">
                  <img 
                    src={vrHero}
                    alt="VR Experience"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                    <span className="text-xs font-bold text-accent-green">VR Tech</span>
                  </div>
                </div>
              </div>

              {/* Top Right - Floating ring */}
              <div 
                className="absolute top-12 right-12 w-24 h-24 animate-float"
                style={{ 
                  animationDelay: '0.8s',
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 12}deg)`
                }}
              >
                <div className="w-full h-full rounded-full border-4 border-accent-cyan/40 shadow-glow-aqua" />
                <div className="absolute inset-4 rounded-full border-2 border-accent-purple/40" />
              </div>

              {/* Bottom Left - Small orb */}
              <div 
                className="absolute bottom-16 left-16 w-16 h-16 animate-float"
                style={{ animationDelay: '1.2s' }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-green to-accent-cyan shadow-glow-green animate-glow-pulse" />
              </div>

              {/* Bottom Right - Workspace Image */}
              <div 
                className="absolute bottom-8 right-8 w-32 h-32 preserve-3d animate-float"
                style={{ 
                  animationDelay: '0.4s',
                  transform: `perspective(1000px) rotateY(${mousePosition.x * -10}deg) rotateX(${mousePosition.y * -10}deg)`
                }}
              >
                <div className="glass-card rounded-xl overflow-hidden shadow-glow-aqua group cursor-pointer">
                  <img 
                    src={workspaceHero}
                    alt="Workspace"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                    <span className="text-xs font-bold text-accent-cyan">Workspace</span>
                  </div>
                </div>
              </div>

              {/* Left floating cube */}
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 animate-float"
                style={{ animationDelay: '1.6s' }}
              >
                <div className="glass-card w-full h-full shadow-glow-purple transform rotate-45" />
              </div>

              {/* Right floating element */}
              <div 
                className="absolute right-4 top-1/3 w-12 h-12 animate-float"
                style={{ animationDelay: '2s' }}
              >
                <div className="w-full h-full rounded-lg border-2 border-accent-green/40 shadow-glow-green rotate-12" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR - Stats & Info (25%) */}
          <div 
            className="lg:col-span-3 space-y-6"
            data-parallax="0.8"
          >
            {/* Attendance/Analytics Chart */}
            <div className="glass-card rounded-2xl p-5 shadow-3d animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-foreground">Performance Report</h3>
                <button className="text-xs text-accent-cyan hover:text-accent-green transition-colors">View</button>
              </div>
              <div className="flex items-end justify-between h-32 gap-2">
                {[65, 85, 45, 92, 78, 88].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div 
                      className="w-full rounded-t-lg bg-gradient-to-t from-accent-cyan to-accent-green opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{['M', 'T', 'W', 'T', 'F', 'S'][i]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                  <span className="text-muted-foreground">Positive</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-green" />
                  <span className="text-muted-foreground">Absent</span>
                </div>
              </div>
            </div>

            {/* Team/Your Class */}
            <div className="glass-card rounded-xl p-5 shadow-3d animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-foreground">Your Team</h3>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-green/30 to-accent-cyan/30 border-2 border-glass-border flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-glow-green"
                  >
                    <Users className="w-5 h-5 text-accent-green" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-gradient-button flex items-center justify-center text-xs font-bold text-background cursor-pointer hover:scale-110 transition-transform">
                  +5
                </div>
              </div>
            </div>

            {/* Materials/Resources */}
            <div className="glass-card rounded-xl p-5 shadow-3d animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-sm font-bold text-foreground mb-4">Resources</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-glass transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-accent-green/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-green transition-all">
                    <TrendingUp className="w-5 h-5 text-accent-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-foreground truncate">Innovation Metrics</p>
                    <p className="text-xs text-muted-foreground">Real-time analytics</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-glass transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-aqua transition-all">
                    <Zap className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-foreground truncate">AI Integration Guide</p>
                    <p className="text-xs text-muted-foreground">Technical docs</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-glass transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-accent-purple/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-purple transition-all">
                    <Users className="w-5 h-5 text-accent-purple" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-foreground truncate">Team Collaboration</p>
                    <p className="text-xs text-muted-foreground">Best practices</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Summary */}
            <div className="glass-card rounded-xl p-4 shadow-3d animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-xl font-black text-accent-green mb-1">24+</div>
                  <div className="text-xs text-muted-foreground">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black text-accent-cyan mb-1">4.5x</div>
                  <div className="text-xs text-muted-foreground">Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-black text-accent-purple mb-1">98%</div>
                  <div className="text-xs text-muted-foreground">Rate</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
