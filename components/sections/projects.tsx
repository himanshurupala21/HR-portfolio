"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLinkIcon, GithubIcon, PlayIcon } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Youtube-Clone',
      description: 'A YouTube clone project aims to replicate the functionality and user experience of the popular video platform, YouTube, but often with a focus on utilizing different technologies or building specific features. These projects can range from simple static HTML and CSS clones to complex web applications using modern frameworks like React, Node.js, or other tools. They often include features like video playback, searching, user profiles, and sometimes even commenting or uploading.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9W_JMI1PNRac2YCXLyAZUbMLaHFtxy0DCOg&s',
      category: 'frontend',
      tech: ['React.js', 'Tailwind CSS', 'vite','API' ],
      liveUrl: 'http://youtube-clone-two-rust-22.vercel.app',
      githubUrl: 'https://github.com/himanshurupala21/youtube-clone.git',
      featured: true
    },
    {
      id: 2,
      title: 'Netflix-Clone',
      description: 'A Netflix clone project involves creating a website or application that replicates the core features and user experience of the popular streaming service, Netflix. This typically includes replicating the UI/UX, browsing content, user authentication, and potentially video streaming capabilities.',
      // image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNhrG5bf9nxS54v58Ox_Z9mISmOM9z8Fveg&s',
      category: 'fullstack',
      tech: ['React', 'vite', 'Tailwind CSS', 'Express.js','MongoDB','API'],
      liveUrl: 'http://netflix-clone-ivory-five-75.vercel.app',
      githubUrl: 'https://github.com/himanshurupala21/Netflix-clone.git',
      featured: true
    },
    {
      id: 3,
      title: 'Movies Detail website',
      description: 'A Movies Detail website project involves creating a web application that allows users to search for and view information about movies. This project typically includes features like movie searching, displaying movie details (title, poster, rating, etc.), filtering by genre, creating watchlists, and potentially recommending movies based on user preferences. The architecture often uses a client-side design with an API to fetch movie data, and might include features like local storage for favorite movies or user accounts for personalized experiences.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=900',
      category: 'frontend',
      tech: ['React.js', 'Tailwind CSS', 'vite','API'],
      liveUrl: 'http://movie-detail-app.vercel.app',
      githubUrl: 'https://github.com/himanshurupala21/Movie-Detail-App.git',
      featured: false
    },
    {
      id: 4,
      title: 'Image-generator website',
      description: 'Create an AI image generator website using React.js, Express.jss, and MongoDB by developing a user interface that lets users input text prompts and generate images by AI. We incorporated API integration to fetch data, providing users with an effortless and dynamic experience in generating AI-driven images.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XZ-FRPygIZaCna7F2E71yf4MGBkyXkVj3g&s',
      category: 'fullstack',
      tech: ['Node.js', 'Express.js', 'React.js', 'CSS', 'MongoDB','OpenAI API'],
      githubUrl: 'https://github.com/himanshurupala21/image-generator.git',
      featured: false
    },
    // {
    //   id: 5,
    //   title: 'Social Media Analytics',
    //   description: 'Analytics dashboard for social media metrics with data visualization and automated reporting.',
    //   image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   category: 'fullstack',
    //   tech: ['Vue.js', 'Python', 'Flask', 'MongoDB', 'D3.js'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/example',
    //   featured: true
    // },
    // {
    //   id: 6,
    //   title: 'Mobile Banking App',
    //   description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    //   image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   category: 'mobile',
    //   tech: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    //   githubUrl: 'https://github.com/example',
    //   featured: false
    // }
  ];

  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-5 max-w-md mx-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <PlayIcon className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      {project.featured && (
                        <Badge variant="default" className="ml-2">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="h-3 w-3 mr-1" />
                            Live
                          </a>
                        </Button>
                      )}
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;