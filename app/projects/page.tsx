import Projects from '@/components/sections/projects';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Himanshu Rupala | Full Stack Developer',
  description: 'Explore my portfolio of web development projects including e-commerce platforms, task management apps, and mobile applications built with modern technologies.',
  keywords: 'Himanshu Rupala projects, web development portfolio, react projects, full stack applications, developer work',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}