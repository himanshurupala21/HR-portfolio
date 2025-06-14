import About from '@/components/sections/about';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Himanshu Rupala | Full Stack Developer',
  description: 'Learn about my professional background, technical skills, and experience as a full-stack developer specializing in React, Node.js, and modern web technologies.',
  keywords: 'about Himanshu Rupala, full stack developer skills, react developer experience, web development expertise',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </main>
  );
}