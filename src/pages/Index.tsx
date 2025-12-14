import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Pipeline from '@/components/Pipeline';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import MouseGlow from '@/components/MouseGlow';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[hsl(var(--primary)/0.1)] text-foreground overflow-x-hidden">
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Pipeline />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
