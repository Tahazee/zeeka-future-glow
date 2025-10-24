import { DollarSign, TrendingUp, BarChart3, Activity } from "lucide-react";

const dashboardCards = [
  {
    id: 1,
    title: "Total Paid",
    value: "$140.0",
    change: "+12.5%",
    icon: DollarSign,
    color: "cyan",
  },
  {
    id: 2,
    title: "Total Unpaid",
    value: "$341.0",
    change: "+8.2%",
    icon: TrendingUp,
    color: "green",
  },
  {
    id: 3,
    title: "Gross Revenue",
    value: "$89,231",
    change: "+23.1%",
    icon: BarChart3,
    color: "purple",
  },
  {
    id: 4,
    title: "Net Revenue",
    value: "$325.00",
    change: "+15.7%",
    icon: Activity,
    color: "aqua",
  },
];

export const Projects = () => {
  return (
    <section id="dashboard" className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent-purple/5 to-background" />
      
      {/* Crystal orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-cyan/10 blur-3xl animate-crystal" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-purple/10 blur-3xl animate-crystal" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accent-cyan font-bold px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 backdrop-blur-sm">
              Dashboard Analytics
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            <span className="bg-gradient-to-r from-accent-cyan via-accent-green to-accent-purple bg-clip-text text-transparent">
              Financial Overview
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time analytics and insights powered by cutting-edge technology
          </p>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {dashboardCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative preserve-3d animate-slide-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Crystal card container */}
              <div className="relative h-full">
                {/* Prismatic glow background */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl
                  ${card.color === 'cyan' && 'bg-accent-cyan/20'}
                  ${card.color === 'green' && 'bg-accent-green/20'}
                  ${card.color === 'purple' && 'bg-accent-purple/20'}
                  ${card.color === 'aqua' && 'bg-accent-cyan/20'}
                `} />

                {/* Main card */}
                <div className="relative backdrop-blur-glass bg-gradient-to-br from-glass-bg to-transparent border border-glass-border rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-700 group-hover:border-accent-cyan/50 group-hover:shadow-glow-aqua preserve-3d group-hover:scale-105">
                  
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Top decorative line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-transparent group-hover:from-accent-${card.color} group-hover:via-accent-cyan group-hover:to-transparent transition-all duration-700`}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${
                        card.color === 'cyan' ? 'hsl(188 100% 50%)' :
                        card.color === 'green' ? 'hsl(165 100% 50%)' :
                        card.color === 'purple' ? 'hsl(275 100% 51%)' :
                        'hsl(180 100% 50%)'
                      }, transparent)`
                    }}
                  />

                  {/* Icon with 3D crystal effect */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 blur-md rounded-2xl animate-prism
                      ${card.color === 'cyan' && 'bg-accent-cyan/30'}
                      ${card.color === 'green' && 'bg-accent-green/30'}
                      ${card.color === 'purple' && 'bg-accent-purple/30'}
                      ${card.color === 'aqua' && 'bg-accent-cyan/30'}
                    `} />
                    <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border transform transition-all duration-700 group-hover:rotate-12 group-hover:scale-110
                      ${card.color === 'cyan' && 'bg-accent-cyan/10 border-accent-cyan/30'}
                      ${card.color === 'green' && 'bg-accent-green/10 border-accent-green/30'}
                      ${card.color === 'purple' && 'bg-accent-purple/10 border-accent-purple/30'}
                      ${card.color === 'aqua' && 'bg-accent-cyan/10 border-accent-cyan/30'}
                    `}>
                      <card.icon className={`w-7 h-7 md:w-8 md:h-8
                        ${card.color === 'cyan' && 'text-accent-cyan'}
                        ${card.color === 'green' && 'text-accent-green'}
                        ${card.color === 'purple' && 'text-accent-purple'}
                        ${card.color === 'aqua' && 'text-accent-cyan'}
                      `} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-3 font-bold">
                      {card.title}
                    </p>
                    <div className="flex items-end justify-between mb-2">
                      <h3 className="text-3xl md:text-4xl font-black text-foreground group-hover:text-accent-cyan transition-colors duration-500">
                        {card.value}
                      </h3>
                      <span className={`text-sm md:text-base font-bold
                        ${card.color === 'cyan' && 'text-accent-cyan'}
                        ${card.color === 'green' && 'text-accent-green'}
                        ${card.color === 'purple' && 'text-accent-purple'}
                        ${card.color === 'aqua' && 'text-accent-cyan'}
                      `}>
                        {card.change}
                      </span>
                    </div>

                    {/* Mini progress bar */}
                    <div className="h-1.5 bg-glass-border rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-1000 group-hover:w-full
                        ${card.color === 'cyan' && 'bg-gradient-to-r from-accent-cyan to-accent-green w-3/4'}
                        ${card.color === 'green' && 'bg-gradient-to-r from-accent-green to-accent-purple w-2/3'}
                        ${card.color === 'purple' && 'bg-gradient-to-r from-accent-purple to-accent-cyan w-4/5'}
                        ${card.color === 'aqua' && 'bg-gradient-to-r from-accent-cyan to-accent-purple w-1/2'}
                      `} />
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
                    <div className={`absolute inset-0 rounded-tl-full
                      ${card.color === 'cyan' && 'bg-accent-cyan'}
                      ${card.color === 'green' && 'bg-accent-green'}
                      ${card.color === 'purple' && 'bg-accent-purple'}
                      ${card.color === 'aqua' && 'bg-accent-cyan'}
                    `} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-glass bg-glass-bg border border-glass-border">
            <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-sm text-muted-foreground">Live data updates every 30 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};
