"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, DownloadIcon,EyeIcon } from 'lucide-react';
import Link from 'next/link';


const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Content */}
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground animate-fade-in-up">
              Himanshu Rupala
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary animate-fade-in-up delay-200">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-300">
              I craft exceptional digital experiences with modern technologies. 
              Passionate about creating scalable, user-centric applications that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <Button 
              size="lg" 
              // onClick={() => scrollToSection('projects')}
              asChild
              className="group"
            >
              <Link href='/projects'>
              <EyeIcon className="mr-2 h-4 w-4" />
              View My Work
              {/* <ArrowDownIcon className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" /> */}
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              // onClick={() => scrollToSection('contact')}
              asChild
            >
              <Link href="/contact">
                <MailIcon className="mr-2 h-4 w-4" />
              Get In Touch
              {/* <MailIcon className="ml-2 h-4 w-4" /> */}
              </Link>
            </Button>
            {/* resume............. */}
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download Resume
            
            </Button>
            {/* resume........... */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up delay-700">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/himanshurupala21" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/himanshu-rupala-4b983427a/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:himanshurupala2125@gmail.com">
                <MailIcon className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            // onClick={() => scrollToSection('about')}
            onClick={scrollToBottom}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <ArrowDownIcon className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;