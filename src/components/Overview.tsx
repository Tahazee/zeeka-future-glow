import dashboardImage from "@/assets/dashboard-3d.jpg";
import { Sparkles, Zap, Shield, Rocket } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI-Powered Analytics", color: "cyan" },
  { icon: Zap, title: "Real-time Processing", color: "green" },
  { icon: Shield, title: "Enterprise Security", color: "purple" },
  { icon: Rocket, title: "Rapid Deployment", color: "aqua" },
];

export const Overview = () => {
  return (
    <section id="overview" className="py-32 relative overflow-hidden">
      {/* Crystal background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent-green/5 to-background" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl animate-crystal" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-accent-purple/10 blur-3xl animate-crystal" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left content with crystal cards */}
          <div className="space-y-10 animate-slide-in-up">
            <div>
              <div className="inline-block mb-4">
                <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accent-cyan font-bold px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-sm">
                  The Future is Here
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                <span className="text-foreground">FUTURE</span>
                <br />
                <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-purple bg-clip-text text-transparent">
                  INNOVATION
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                We pioneer digital experiences that transform how businesses connect with tomorrow. 
                Our cutting-edge solutions blend creativity with technology to build the future, today.
              </p>
            </div>

            {/* Crystal feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="group relative preserve-3d animate-slide-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Prismatic glow */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg
                    ${feature.color === 'cyan' && 'bg-accent-cyan/30'}
                    ${feature.color === 'green' && 'bg-accent-green/30'}
                    ${feature.color === 'purple' && 'bg-accent-purple/30'}
                    ${feature.color === 'aqua' && 'bg-accent-cyan/30'}
                  `} />
                  
                  <div className="relative backdrop-blur-glass bg-gradient-to-br from-glass-bg to-transparent border border-glass-border rounded-xl p-5 transition-all duration-700 group-hover:border-accent-cyan/50 group-hover:scale-105 preserve-3d">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12
                        ${feature.color === 'cyan' && 'bg-accent-cyan/10 border border-accent-cyan/30'}
                        ${feature.color === 'green' && 'bg-accent-green/10 border border-accent-green/30'}
                        ${feature.color === 'purple' && 'bg-accent-purple/10 border border-accent-purple/30'}
                        ${feature.color === 'aqua' && 'bg-accent-cyan/10 border border-accent-cyan/30'}
                      `}>
                        <feature.icon className={`w-6 h-6
                          ${feature.color === 'cyan' && 'text-accent-cyan'}
                          ${feature.color === 'green' && 'text-accent-green'}
                          ${feature.color === 'purple' && 'text-accent-purple'}
                          ${feature.color === 'aqua' && 'text-accent-cyan'}
                        `} />
                      </div>
                      <span className="text-sm md:text-base font-bold text-foreground group-hover:text-accent-cyan transition-colors">
                        {feature.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - 3D Dashboard Preview with crystal effect */}
          <div className="relative animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative perspective-[1000px]">
              
              {/* Main crystal card */}
              <div className="relative group preserve-3d">
                {/* Outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-cyan/20 via-accent-green/20 to-accent-purple/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-prism" />
                
                {/* Main card */}
                <div className="relative rounded-2xl overflow-hidden backdrop-blur-glass border-2 border-glass-border shadow-glow-aqua transform transition-all duration-700 group-hover:scale-[1.02] preserve-3d">
                  
                  {/* Dashboard image */}
                  <div className="relative">
                    <img
                      src={dashboardImage}
                      alt="Futuristic dashboard interface with 3D analytics"
                      className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Prismatic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Animated shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                  </div>

                  {/* Floating stats overlay */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="space-y-3 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      
                      {/* Stat card 1 */}
                      <div className="backdrop-blur-glass bg-gradient-to-br from-glass-bg to-transparent border border-glass-border rounded-xl p-4 animate-crystal">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-accent-green font-bold mb-1 uppercase tracking-wider">Active Projects</p>
                            <p className="text-3xl font-black text-foreground">24+</p>
                          </div>
                          <div className="w-12 h-12 rounded-lg bg-accent-green/10 border border-accent-green/30 flex items-center justify-center">
                            <Rocket className="w-6 h-6 text-accent-green" />
                          </div>
                        </div>
                      </div>

                      {/* Stat card 2 */}
                      <div className="backdrop-blur-glass bg-gradient-to-br from-glass-bg to-transparent border border-glass-border rounded-xl p-4 animate-crystal" style={{ animationDelay: '1s' }}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-accent-cyan font-bold mb-1 uppercase tracking-wider">Performance</p>
                            <p className="text-3xl font-black text-foreground">98.2%</p>
                          </div>
                          <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
                            <Zap className="w-6 h-6 text-accent-cyan" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top border glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-green to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>

              {/* Floating crystal orbs */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-purple/20 rounded-full blur-3xl animate-crystal" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent-cyan/20 rounded-full blur-3xl animate-crystal" style={{ animationDelay: '2s' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
