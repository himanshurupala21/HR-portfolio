"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, GraduationCapIcon, BriefcaseIcon,StarIcon,LandmarkIcon,Building2Icon } from 'lucide-react';
import { Description } from '@radix-ui/react-toast';

const Experience = () => {
  const workExperience = [
    // {
    //   title: '',
    //   company: '',
    //   location: '',
    //   period: '',
    //   type: '',
    //   description: 'No Experience I am Fresher.',
    //   achievements: [''],
    //   technologies: ['']
    // },
    {
      title: 'Internship',
      company: 'ELSNER Technologies Pvt Ltd.',
      location: 'Ahmedabad, India',
      period: 'April 2025 - June 2025',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects using modern web technologies. Worked directly with clients to understand requirements and deliver solutions.',
      achievements: [
        'Assisted in developing responsive web application',
        'Developed server-side application with Node.js and Express.js',
        'Gained experience with MongoDB for database operation'
      ],
      technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB']
    },
    // {
    //   title: 'Frontend Developer',
    //   company: 'Digital Agency Pro',
    //   location: 'New York, NY',
    //   period: '2019 - 2020',
    //   type: 'Full-time',
    //   description: 'Specialized in creating responsive, accessible web interfaces for diverse client base. Collaborated with designers and backend developers.',
    //   achievements: [
    //     'Delivered 25+ pixel-perfect responsive websites',
    //     'Improved average page load time by 35%',
    //     'Achieved 100% accessibility compliance on all projects'
    //   ],
    //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Sass']
    // }
  ];

  const education = [
    // {
    //   degree: 'Bachelor of Science in Computer Science',
    //   institution: 'University of Technology',
    //   location: 'Boston, MA',
    //   period: '2015 - 2019',
    //   gpa: '3.8/4.0',
    //   achievements: [
    //     'Summa Cum Laude graduate',
    //     'President of Computer Science Club',
    //     'Winner of Annual Hackathon 2018'
    //   ]
    // },
    // {
    //   degree: 'Certified AWS Solutions Architect',
    //   institution: 'Amazon Web Services',
    //   period: '2021',
    //   achievements: [
    //     'Professional level certification',
    //     'Specialized in cloud architecture design'
    //   ]
    // }
   {
    degree: "B.E. in Computer Engineering(Last year)",
    institution: "LDRP-ITR gandhinagar",
    year: "2026",
    score: "7.9 CGPI",
  },
  {
    degree: "Higher Secondary(12th)",
    institution: "GSHSEB",
    year: "2022",
    score: "77%",
  },
  {
    degree: "Secondary(10th)",
    institution: "GSEB",
    year: "2020",
    score: "86%",
  },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

       
{/* ------------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------------- */}
          {/* Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
            </div>
            
            {workExperience.map((job, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      {/* <LandmarkIcon className='h-4 w-4'/> */}
                      {/* <p className="text-foreground">{job.company}</p> */}
                      <div className="flex items-center space-x-1 space-y-1">
                      <Building2Icon  className=" h-4 w-4 text-muted-foreground" />
                      <span className='text-muted-foreground'>{job.company}</span>
                    </div>
                    </div>
                    
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2"></h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {job.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

{/* ------------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------------- */}
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCapIcon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  {/* <p className="text-primary font-semibold">{edu.institution}</p> */}

                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <LandmarkIcon className="h-4 w-4" />
                      <span>{edu.institution}</span>
                    </div>

                  {/* <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground"> */}

                    

                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{edu.year}</span>
                    </div>
                    {edu.score && (
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <StarIcon className="h-4 w-4" />
                        <span>{edu.score}</span>
                      </div>
                    )}
                  {/* </div> */}
                </CardHeader>
                <CardContent>
                  {/* {edu.gpa && (
                    <p className="text-muted-foreground mb-4">GPA: {edu.gpa}</p>
                  )} */}
                  
                  {/* <div>
                    <h4 className="font-semibold text-foreground mb-2">Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
{/* ------------------------------------------------------------------------------------------------------------------------------- */}


        </div>
      </div>
    </section>
  );
};

export default Experience;