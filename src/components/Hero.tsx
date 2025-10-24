import { Button } from "./ui/button";
import vrHero from "@/assets/vr-hero.jpg";
import workspaceHero from "@/assets/workspace-hero.jpg";
import { Users, TrendingUp, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="hero relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: VR Person (30%) */}
          <aside 
            className="hero-left lg:col-span-4 relative"
            data-parallax="0.6"
          >
            <div className="hero-media-wrap relative">
              {/* 3D WebGL canvas placeholder */}
              <div 
                className="hero-webgl-canvas relative rounded-2xl overflow-hidden shadow-glow-green preserve-3d"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 6}deg) rotateX(${-mousePosition.y * 6}deg)`
                }}
                aria-hidden="true"
              >
                <img 
                  src={vrHero} 
                  alt="Person wearing VR headset exploring futuristic digital environment"
                  className="hero-fallback w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Green floating orbs */}
                <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-accent-green animate-glow-pulse shadow-glow-green" aria-hidden="true" />
                <div 
                  className="absolute top-32 left-24 w-6 h-6 rounded-full bg-accent-green animate-glow-pulse shadow-glow-green" 
                  style={{ animationDelay: '0.5s' }}
                  aria-hidden="true"
                />
                <div 
                  className="absolute top-40 left-16 w-10 h-10 rounded-full bg-accent-green animate-glow-pulse shadow-glow-green" 
                  style={{ animationDelay: '1s' }}
                  aria-hidden="true"
                />
              </div>

              {/* Glass card at bottom */}
              <div className="glass-card mt-6 rounded-xl p-6 shadow-3d animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We turn bold visions into digital realities with creativity and precision
                </p>
              </div>
            </div>
          </aside>

          {/* Center: Main Content (40%) */}
          <div 
            className="hero-center lg:col-span-4 text-center space-y-8"
            data-parallax="0.6"
          >
            <div className="space-y-4">
              <p 
                className="hero-sub text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                We Craft Experiences
              </p>
              
              <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                <span 
                  className="block text-foreground animate-title-in"
                  style={{ animationDelay: '0.28s' }}
                >
                  NEXTGEN
                </span>
                <span 
                  className="block text-foreground animate-title-in"
                  style={{ animationDelay: '0.38s' }}
                >
                  SYSTEMS
                </span>
              </h1>
            </div>

            {/* Metrics with glass effect */}
            <ul 
              className="hero-meta metrics flex justify-center gap-6 flex-wrap"
              role="list"
              aria-label="Company metrics"
            >
              <li className="metric glass-card rounded-lg p-4 min-w-[120px] shadow-3d animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-accent-green" aria-hidden="true" />
                  <strong className="text-2xl font-bold text-foreground">24+</strong>
                </div>
                <span className="text-xs text-muted-foreground">Trusted by Clients</span>
              </li>

              <li className="metric glass-card rounded-lg p-4 min-w-[120px] shadow-3d animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
                  <strong className="text-2xl font-bold text-foreground">4.5x</strong>
                </div>
                <span className="text-xs text-muted-foreground">Brand Growth</span>
              </li>

              <li className="metric glass-card rounded-lg p-4 min-w-[120px] shadow-3d animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-accent-green" aria-hidden="true" />
                  <strong className="text-2xl font-bold text-foreground">98.2%</strong>
                </div>
                <span className="text-xs text-muted-foreground">Innovation Rate</span>
              </li>
            </ul>

            <div className="hero-actions flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="btn-primary bg-gradient-button text-background font-bold hover:shadow-glow-purple transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Get started with NextGen Systems"
              >
                Get Started
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="btn-ghost border-glass-border hover:bg-glass hover:text-accent-cyan transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background"
                aria-label="View demonstration"
              >
                View Demo
              </Button>
            </div>
          </div>

          {/* Right: Workspace (30%) */}
          <aside 
            className="hero-right lg:col-span-4 relative"
            data-parallax="0.9"
          >
            <div className="right-card relative">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-glow-aqua preserve-3d"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * -4}deg) rotateX(${-mousePosition.y * -4}deg)`
                }}
              >
                <img 
                  src={workspaceHero} 
                  alt="Modern workspace featuring advanced technology and digital innovation tools"
                  className="stack-image w-full h-auto object-cover"
                  loading="eager"
                />
              </div>

              {/* Glass card overlay on top right */}
              <div 
                className="right-card--glass glass-card absolute top-4 right-4 rounded-lg p-4 shadow-3d animate-fade-in-up" 
                style={{ animationDelay: '1s' }}
              >
                <p className="text-xs uppercase tracking-wider text-accent-green mb-1 font-bold">
                  Empowering Innovation
                </p>
                <p className="text-xs text-muted-foreground">
                  Secure, efficient, innovative
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating cards - decorative elements */}
      <div className="floating-cards hidden lg:block" aria-hidden="true">
        <div 
          className="glass-card card--small absolute top-1/3 left-1/2 w-40 h-28 rounded-xl shadow-3d animate-float"
          id="floating-1"
          style={{ animationDelay: '0.3s' }}
        />
        <div 
          className="glass-card card--small absolute top-2/3 right-1/4 w-40 h-28 rounded-xl shadow-3d animate-float"
          id="floating-2"
          style={{ animationDelay: '1.2s' }}
        />
      </div>
    </section>
  );
};
