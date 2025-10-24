import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Overview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
