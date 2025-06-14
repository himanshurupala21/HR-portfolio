"use client";

import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, ArrowUpIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/himanshurupala21', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/himanshu-rupala-4b983427a/', label: 'LinkedIn' },
    { icon: TwitterIcon, href: 'https://x.com/Himanshurupala', label: 'Twitter' },
    { icon: MailIcon, href: 'mailto:himanshurupala2125@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Himanshu Rupala</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary"
              >
                <a 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            Back to Top
            <ArrowUpIcon className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </Button>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Himanshu Rupala. All rights reserved.</p>
            <p className="mt-1">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;