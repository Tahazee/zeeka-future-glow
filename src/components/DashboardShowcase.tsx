import dashboardImage from "@/assets/dashboard-3d.jpg";

export const DashboardShowcase = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Parallax container */}
      <div className="relative">
        <img
          src={dashboardImage}
          alt="Isometric 3D holographic dashboard interface with floating widgets and data charts"
          className="w-full h-auto object-cover opacity-90"
          loading="lazy"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      {/* Floating text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="text-3xl md:text-5xl font-black text-foreground mb-4 animate-fade-in">
            Intelligence at <span className="text-accent">Scale</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Harness the power of advanced analytics and real-time data processing
          </p>
        </div>
      </div>
    </section>
  );
};
