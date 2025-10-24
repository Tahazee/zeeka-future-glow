import dashboardImage from "@/assets/dashboard-3d.jpg";

export const Overview = () => {
  return (
    <section id="overview" className="overview py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Title */}
          <div className="overview-left text-center lg:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accent-green mb-4">
              Overview
            </p>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              FUTURE
              <br />
              INNOVATION
            </h2>

            <div className="glass-card rounded-2xl p-8 md:p-12 shadow-3d">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                We pioneer the next generation of digital experiences through cutting-edge technology 
                and visionary design.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our team combines advanced AI, immersive interfaces, and scalable architecture to 
                deliver solutions that redefine what's possible. From concept to deployment, we transform 
                ambitious ideas into reality.
              </p>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="overview-right relative">
            <div className="dashboard-preview relative preserve-3d">
              {/* WebGL canvas placeholder */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-glow-aqua"
                aria-hidden="true"
              >
                <canvas 
                  id="dashboard-webgl" 
                  className="hidden"
                  aria-hidden="true"
                />
                <img 
                  src={dashboardImage}
                  alt="Futuristic 3D dashboard interface with holographic data visualization"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating glass info cards */}
              <div 
                className="glass-card absolute top-8 -left-4 rounded-lg p-4 shadow-3d animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <p className="text-xs font-bold text-accent-cyan mb-1">Real-time Analytics</p>
                <p className="text-xs text-muted-foreground">Live data insights</p>
              </div>

              <div 
                className="glass-card absolute bottom-8 -right-4 rounded-lg p-4 shadow-3d animate-float"
                style={{ animationDelay: '1.2s' }}
              >
                <p className="text-xs font-bold text-accent-green mb-1">AI-Powered</p>
                <p className="text-xs text-muted-foreground">Smart automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-accent-green/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-cyan/10 blur-3xl" aria-hidden="true" />
    </section>
  );
};
