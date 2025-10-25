import React, { useEffect, useRef, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Users, TrendingUp, Zap, Clock, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import vrHero from "@/assets/vr-hero.jpg";
import workspaceHero from "@/assets/workspace-hero.jpg";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x: x * 20, y: y * 20 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scheduleItems = [
    { time: "09:00 AM", title: "VR Experience Design", status: "ongoing" },
    { time: "11:30 AM", title: "AI Integration Workshop", status: "upcoming" },
    { time: "02:00 PM", title: "Team Collaboration", status: "upcoming" },
  ];

  const teamMembers = [
    { name: "Sarah", avatar: "bg-gradient-to-br from-accent-cyan to-accent-green" },
    { name: "Mike", avatar: "bg-gradient-to-br from-accent-purple to-accent-cyan" },
    { name: "Alex", avatar: "bg-gradient-to-br from-accent-green to-accent-purple" },
  ];

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8" 
      aria-label="Hero Dashboard"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent-purple/10 to-background" />
      
      {/* Crystal orbs background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-cyan/20 blur-3xl animate-crystal" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-purple/20 blur-3xl animate-crystal" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-green/10 blur-3xl animate-crystal" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT COLUMN - Featured Card & Schedule */}
          <div className="lg:col-span-3 space-y-6 animate-slide-in-up">
            
            {/* Featured System Card */}
            <div className="group relative preserve-3d">
              <div className="absolute inset-0 bg-accent-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div 
                className="relative backdrop-blur-glass bg-gradient-to-br from-glass-bg to-transparent border border-glass-border rounded-2xl p-6 overflow-hidden transition-all duration-700 group-hover:border-accent-cyan/50 group-hover:scale-105"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg)`
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-green to-transparent" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-green flex items-center justify-center">
                      <Zap className="w-4 h-4 text-background" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-accent-cyan font-bold">Featured</span>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-2 bg-gradient-to-r from-foreground to-accent-cyan bg-clip-text text-transparent">
                    NEXTGEN SYSTEMS
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Experience the future of digital innovation
                  </p>
                  
                  <Button className="w-full bg-gradient-to-r from-accent-cyan to-accent-green text-background font-bold hover:scale-105 transition-transform">
                    Join Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Schedule Date Card */}
            <div className="glass-card rounded-2xl p-4 border border-glass-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent-cyan" />
                  <span className="text-sm font-bold">Today's Schedule</span>
                </div>
                <div className="flex gap-1">
                  <button className="w-6 h-6 rounded-lg hover:bg-glass-bg flex items-center justify-center transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-6 h-6 rounded-lg hover:bg-glass-bg flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                {scheduleItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-glass-bg transition-colors group"
                  >
                    <Clock className={`w-4 h-4 mt-0.5 ${item.status === 'ongoing' ? 'text-accent-green' : 'text-muted-foreground'}`} />
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-1">{item.time}</div>
                      <div className="text-sm font-bold group-hover:text-accent-cyan transition-colors">{item.title}</div>
                    </div>
                    {item.status === 'ongoing' && (
                      <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN - Main 3D Content & Hero Images */}
          <div className="lg:col-span-6 space-y-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Main Title */}
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="text-xs uppercase tracking-[0.3em] text-accent-cyan font-bold px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-sm">
                  Innovation Hub
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                <span className="bg-gradient-to-r from-foreground via-accent-cyan to-accent-purple bg-clip-text text-transparent">
                  Meet the
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent-cyan via-accent-green to-accent-purple bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% auto' }}>
                  New Reality
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conquer leaderboards, crush workouts — create with friends and more.
              </p>
            </div>

            {/* Central 3D Element with floating images */}
            <div className="relative min-h-[400px] flex items-center justify-center">
              
              {/* Central glowing orb */}
              <div 
                className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-accent-cyan via-accent-green to-accent-purple blur-3xl opacity-50 animate-prism"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
                }}
              />
              
              {/* Floating VR Image Card - Top Left */}
              <div 
                className="absolute top-0 left-0 md:left-12 w-32 h-32 md:w-48 md:h-48 group preserve-3d"
                style={{
                  transform: `perspective(1000px) translateZ(50px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                <div className="absolute inset-0 bg-accent-cyan/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-glass-border backdrop-blur-glass shadow-2xl group-hover:border-accent-cyan/50 transition-all duration-700">
                  <img src={vrHero} alt="VR Experience" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs font-bold text-accent-cyan">VR Experience</p>
                  </div>
                </div>
              </div>

              {/* Floating Workspace Image Card - Top Right */}
              <div 
                className="absolute top-0 right-0 md:right-12 w-32 h-32 md:w-44 md:h-44 group preserve-3d"
                style={{
                  transform: `perspective(1000px) translateZ(30px) rotateX(${mousePosition.y * -0.4}deg) rotateY(${mousePosition.x * -0.4}deg)`,
                  animation: 'float 7s ease-in-out infinite',
                  animationDelay: '1s'
                }}
              >
                <div className="absolute inset-0 bg-accent-purple/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-glass-border backdrop-blur-glass shadow-2xl group-hover:border-accent-purple/50 transition-all duration-700">
                  <img src={workspaceHero} alt="Workspace" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs font-bold text-accent-purple">Digital Workspace</p>
                  </div>
                </div>
              </div>

              {/* Floating crystal orbs */}
              <div 
                className="absolute bottom-4 left-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-green/30 backdrop-blur-glass border border-glass-border shadow-glow-cyan"
                style={{
                  transform: `perspective(1000px) translateZ(20px) rotateX(${mousePosition.y * 0.6}deg) rotateY(${mousePosition.x * 0.6}deg)`,
                  animation: 'float 5s ease-in-out infinite',
                  animationDelay: '0.5s'
                }}
              />
              
              <div 
                className="absolute bottom-8 right-1/4 w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent-purple/30 to-accent-cyan/30 backdrop-blur-glass border border-glass-border shadow-glow-purple"
                style={{
                  transform: `perspective(1000px) translateZ(40px) rotateX(${mousePosition.y * -0.7}deg) rotateY(${mousePosition.x * -0.7}deg)`,
                  animation: 'float 8s ease-in-out infinite',
                  animationDelay: '2s'
                }}
              />

              {/* Center sparkle effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Sparkles className="w-12 h-12 text-accent-cyan/50 animate-pulse" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Stats & Metrics */}
          <div className="lg:col-span-3 space-y-6 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            
            {/* Performance Report */}
            <div className="glass-card rounded-2xl p-6 border border-glass-border">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-accent-green" />
                <span className="text-sm font-bold">Performance Report</span>
              </div>
              
              <div className="h-32 flex items-end justify-between gap-2 mb-4">
                {[40, 65, 45, 80, 60, 75, 90].map((height, i) => (
                  <div key={i} className="flex-1 group">
                    <div 
                      className="w-full bg-gradient-to-t from-accent-cyan to-accent-green rounded-t-lg transition-all duration-1000 group-hover:from-accent-purple group-hover:to-accent-cyan"
                      style={{ 
                        height: `${height}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  </div>
                ))}
              </div>
              
              <div className="text-xs text-muted-foreground text-center">Weekly Analytics</div>
            </div>

            {/* Team Members */}
            <div className="glass-card rounded-2xl p-6 border border-glass-border">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-accent-purple" />
                <span className="text-sm font-bold">Your Team</span>
              </div>
              
              <div className="flex -space-x-3 mb-4">
                {teamMembers.map((member, i) => (
                  <div 
                    key={i}
                    className={`w-10 h-10 rounded-full ${member.avatar} border-2 border-background flex items-center justify-center text-xs font-bold hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
                  >
                    {member.name[0]}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-glass-bg border-2 border-glass-border flex items-center justify-center text-xs font-bold hover:scale-110 hover:z-10 transition-transform cursor-pointer">
                  +5
                </div>
              </div>
              
              <Button size="sm" variant="outline" className="w-full text-xs border-glass-border hover:border-accent-cyan hover:text-accent-cyan">
                View All Members
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="glass-card rounded-2xl p-6 border border-glass-border">
              <h4 className="text-sm font-bold mb-4">Key Metrics Summary</h4>
              
              <div className="space-y-4">
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Clients</span>
                    <span className="text-sm font-bold text-accent-cyan">24+</span>
                  </div>
                  <div className="h-1.5 bg-glass-border rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-accent-cyan to-accent-green rounded-full transition-all duration-1000 group-hover:w-full" />
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Growth</span>
                    <span className="text-sm font-bold text-accent-green">4.5x</span>
                  </div>
                  <div className="h-1.5 bg-glass-border rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-accent-green to-accent-purple rounded-full transition-all duration-1000 group-hover:w-full" />
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Success Rate</span>
                    <span className="text-sm font-bold text-accent-purple">98%</span>
                  </div>
                  <div className="h-1.5 bg-glass-border rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
