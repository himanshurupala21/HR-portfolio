import Contact from '@/components/sections/contact';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Himanshu Rupala | Full Stack Developer',
  description: 'Get in touch with me for web development projects, collaborations, or job opportunities. I respond to all inquiries within 24 hours.',
  keywords: 'contact Himanshu Rupala, hire full stack developer, web development services, developer contact',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}