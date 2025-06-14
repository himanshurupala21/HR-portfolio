import Experience from '@/components/sections/experience';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience - Himanshu Rupala | Full Stack Developer',
  description: 'Discover my professional work experience, education background, and career journey as a full-stack developer with expertise in modern web technologies.',
  keywords: 'Himanshu Rupala experience, full stack developer career, web development jobs, professional background',
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-16">
        <Experience />
      </div>
      <Footer />
    </main>
  );
}