export const Overview = () => {
  return (
    <section id="overview" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-neon-green mb-4">
            Overview
          </p>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            FUTURE
            <br />
            INNOVATION
          </h2>

          <div className="backdrop-blur-glass bg-glass border border-glass-border rounded-2xl p-8 md:p-12 shadow-glass">
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
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-neon-green/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-neon-aqua/10 blur-3xl" />
    </section>
  );
};
