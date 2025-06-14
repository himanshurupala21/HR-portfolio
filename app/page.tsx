import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      {/* <About />
      <Projects />
      <Experience />
      <Contact /> */}
      <Footer />
    </main>
  );
}