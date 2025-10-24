import { Sparkles, Shield, Zap } from "lucide-react";
import aiRobot from "@/assets/ai-robot.jpg";

const values = [
  { icon: Sparkles, label: "Innovation" },
  { icon: Shield, label: "Integrity" },
  { icon: Zap, label: "Impact" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-glow-cyan">
              <img
                src={aiRobot}
                alt="Futuristic AI robot with glowing cyan accents"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">
              Our <span className="text-primary">Mission</span>
            </h2>

            <p className="text-lg text-foreground leading-relaxed">
              At Zeeka, we believe the future belongs to those who automate intelligently. 
              We're not just building software—we're architecting the cognitive infrastructure 
              of tomorrow's enterprises.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of AI specialists, data engineers, and UX visionaries work together 
              to create systems that don't just process information—they understand it, 
              learn from it, and act on it.
            </p>

            {/* Core Values */}
            <div className="flex gap-6 pt-4">
              {values.map((value) => (
                <div
                  key={value.label}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="p-4 rounded-full border-2 border-accent group-hover:bg-gradient-cyber group-hover:border-transparent transition-all duration-300 group-hover:shadow-glow-cyan">
                    <value.icon className="h-6 w-6 text-accent group-hover:text-background transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {value.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
