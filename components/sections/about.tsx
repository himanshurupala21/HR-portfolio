"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  CodeIcon, 
  DatabaseIcon, 
  ServerIcon, 
  SmartphoneIcon,
  PaletteIcon,
  RocketIcon,
   MonitorIcon,
  GitBranchIcon,
  TerminalIcon 
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, icon: CodeIcon },
    { name: 'Express.js', level: 90, icon: CodeIcon },
    { name: 'Node.js', level: 88, icon: ServerIcon },
    { name: 'MongoDB', level: 85, icon: CodeIcon },
    { name: 'Tailwind CSS', level: 82, icon: DatabaseIcon },
    { name: 'Python', level: 80, icon: ServerIcon },
  ];

  // const techStack = [
  //   // 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  //   // 'MongoDB', 'Redis', 'Docker', 'AWS', 'Tailwind CSS', 'GraphQL',
  //   // 'Express.js', 'Prisma', 'Jest', 'Cypress'
  //   'HTML','CSS','JavaScript','Python','React.js','Next.js','TypeScript','Tailwind CSS','Redux','Node.js','Express.js','RESTful APIs','MongoDB','MySQL','Git','GitHub','VS Code','Postman'
  // ];

  const techCategories = [
    {
      title: 'Frontend Development',
      icon: MonitorIcon,
      technologies: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
      ]
    },
    {
      title: 'Backend Development',
      icon: ServerIcon,
      technologies: [
        'Node.js',
        'Express.js',
        'RESTful APIs',
      ]
    },
    {
      title: 'Programming Languages',
      icon: CodeIcon,
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
        'Python'
      ]
    },
    {
      title: 'Database & Tools',
      icon: DatabaseIcon,
      technologies: [
        'MongoDB',
        'MySQL'
      ]
    },
    {
      title: 'Version Control',
      icon: GitBranchIcon,
      technologies: [
        'Git',
        'GitHub',
        'GitLab',
        'Bitbucket'
      ]
    },
    {
      title: 'Development Tools',
      icon: TerminalIcon,
      technologies: [
        'VS Code',
        'Replit',
        'Webpack',
        'Postman',
      ]
    }
  ];

  const highlights = [
    {
      icon: RocketIcon,
      title: 'Performance Focused',
      description: 'Optimizing applications for speed and scalability'
    },
    {
      icon: PaletteIcon,
      title: 'Design Thinking',
      description: 'Creating intuitive and beautiful user experiences'
    },
    {
      icon: SmartphoneIcon,
      title: 'Mobile First',
      description: 'Building responsive applications for all devices'
    }
  ];

  // return (
    
  //   <section id="about" className="py-20 bg-muted/30">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="text-center mb-16">
  //         <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
  //           About Me
  //         </h2>
  //         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  //           Passionate developer building scalable web applications
  //         </p>
  //       </div>

  //       <div className="grid lg:grid-cols-2 gap-12 mb-16">
  //         {/* Professional Summary */}
  //         <div className="space-y-6">
  //           <h3 className="text-2xl font-semibold text-foreground mb-4">
  //             Professional Summary
  //           </h3>
  //           <p className="text-muted-foreground leading-relaxed">
  //             I'm a full-stack developer who thrives on solving complex problems and building 
  //             exceptional digital experiences. With expertise spanning frontend frameworks, 
  //             backend architectures, and cloud technologies, I bring ideas to life with clean, 
  //             efficient code.
  //           </p>
  //           <p className="text-muted-foreground leading-relaxed">
  //             My approach combines technical excellence with strong design sensibilities, 
  //             ensuring that every project not only functions flawlessly but also provides 
  //             an outstanding user experience.
  //           </p>

  //           {/* Highlights */}
  //           <div className="grid sm:grid-cols-1 gap-4 mt-8">
  //             {highlights.map((highlight, index) => (
  //               <div key={index} className="flex items-start space-x-3">
  //                 <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
  //                   <highlight.icon className="h-5 w-5 text-primary" />
  //                 </div>
  //                 <div>
  //                   <h4 className="font-semibold text-foreground">{highlight.title}</h4>
  //                   <p className="text-sm text-muted-foreground">{highlight.description}</p>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>

  //         {/* Skills */}
  //         <div className="space-y-6">
  //           <h3 className="text-2xl font-semibold text-foreground mb-4">
  //             Technical Skills
  //           </h3>
  //           <div className="space-y-4">
  //             {skills.map((skill, index) => (
  //               <div key={index} className="space-y-2">
  //                 <div className="flex items-center justify-between">
  //                   <div className="flex items-center space-x-2">
  //                     <skill.icon className="h-4 w-4 text-primary" />
  //                     <span className="font-medium text-foreground">{skill.name}</span>
  //                   </div>
  //                   <span className="text-sm text-muted-foreground">{skill.level}%</span>
  //                 </div>
  //                 <Progress value={skill.level} className="h-2" />
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>

  //       {/* Tech Stack */}
  //       {/* <Card>
  //         <CardContent className="p-6">
  //           <h3 className="text-xl font-semibold text-foreground mb-4">
  //             Technologies I Work With
  //           </h3>
  //           <div className="flex flex-wrap gap-2">
  //             {techStack.map((tech, index) => (
  //               <Badge key={index} variant="secondary" className="text-sm">
  //                 {tech}
  //               </Badge>
  //             ))}
  //           </div>
  //         </CardContent>
  //       </Card> */}

  //       {/* ................................................ */}
  //        {/* <div className="space-y-6">
  //         <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
  //           Skills & Technologies
  //         </h3>
  //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {techCategories.map((category, index) => (
  //             <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
  //               <CardContent className="p-6">
  //                 <div className="flex items-center space-x-3 mb-4">
  //                   <div className="p-2 bg-primary/10 rounded-lg">
  //                     <category.icon className="h-6 w-6 text-primary" />
  //                   </div>
  //                   <h4 className="font-semibold text-foreground text-lg">
  //                     {category.title}
  //                   </h4>
  //                 </div>
  //                 <div className="space-y-2">
  //                   {category.technologies.map((tech, techIndex) => (
  //                     <div key={techIndex} className="flex items-center space-x-2 text-muted-foreground">
  //                       <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
  //                       <span className="text-sm">{tech}</span>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </CardContent>
  //             </Card>
  //           ))}
  //         </div>
  //       </div> */}

        

  //       <div className="text-center mb-12">
  //         <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
  //           <Badge variant="secondary" className="bg-transparent border-0 text-primary font-medium">
  //             My Technical Expertise
  //           </Badge>
  //         </div>
  //         <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
  //           Skills & Technologies
  //         </h3>
  //         <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
  //           I've worked with a wide range of technologies in the web development world, from front-end 
  //           frameworks to back-end architecture.
  //         </p>
  //       </div>

  //       {/* Tech Stack Categories */}
  //       <div className="space-y-6">
  //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {techCategories.map((category, index) => (
  //             <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
  //               <CardContent className="p-6">
  //                 <div className="flex items-center space-x-3 mb-4">
  //                   <div className="p-2 bg-primary/10 rounded-lg">
  //                     <category.icon className="h-6 w-6 text-primary" />
  //                   </div>
  //                   <h4 className="font-semibold text-foreground text-lg">
  //                     {category.title}
  //                   </h4>
  //                 </div>
  //                 <div className="space-y-2">
  //                   {category.technologies.map((tech, techIndex) => (
  //                     <div key={techIndex} className="flex items-center space-x-2 text-muted-foreground">
  //                       <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
  //                       <span className="text-sm">{tech}</span>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </CardContent>
  //             </Card>
  //           ))}
  //         </div>
  //       </div>
  //       {/* ................................................ */}
  //     </div>
  //   </section>
  // );

  //.......................................return................................................
    return (
    <div>
      {/* First Section - Professional Summary */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer building scalable web applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Summary */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a full-stack developer who thrives on solving complex problems and building 
                exceptional digital experiences. With expertise spanning frontend frameworks, 
                backend architectures, and cloud technologies, I bring ideas to life with clean, 
                efficient code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines technical excellence with strong design sensibilities, 
                ensuring that every project not only functions flawlessly but also provides 
                an outstanding user experience.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-1 gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Skills & Technologies */}
      <section className="py-20 bg-muted/9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Skills & Technologies Introduction Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Badge variant="secondary" className="bg-transparent border-0 text-primary font-medium">
                My Technical Expertise
              </Badge>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Skills & Technologies
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I've worked with a wide range of technologies in the web development world, from front-end 
              frameworks to back-end architecture.
            </p>
          </div>

          {/* Tech Stack Categories */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((category, index) => (
                // <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300">
                  <Card key={index} className="bg-muted/20 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground text-lg">
                        {category.title}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {category.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center space-x-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  //.......................................return...............................................
};

export default About;