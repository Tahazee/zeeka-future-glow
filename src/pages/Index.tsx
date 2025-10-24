import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { DashboardShowcase } from "@/components/DashboardShowcase";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <DashboardShowcase />
        <Portfolio />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
