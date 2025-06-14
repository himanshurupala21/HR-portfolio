"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
// import React from 'react';
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  LinkedinIcon, 
  GithubIcon, 
  TwitterIcon,
  SendIcon
} from 'lucide-react';

// ...............................................................................................................................

    

// ...............................................................................................................................

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
//......................................................................................................

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     // Simulate form submission - replace with actual EmailJS or API call
  //     await new Promise(resolve => setTimeout(resolve, 1000));
      
  //     toast({
  //       title: "Message sent successfully!",
  //       description: "Thank you for reaching out. I'll get back to you soon.",
  //     });
      
  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //   } catch (error) {
  //     toast({
  //       title: "Error sending message",
  //       description: "Please try again or contact me directly via email.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const payload = {
    access_key: '6aafe748-70aa-4596-968c-f84cc6b4a7e2', // 🔁 Replace with your actual Web3Forms key
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      throw new Error(result.message || "Failed to send message.");
    }
  } catch (error) {
    toast({
      title: "Error sending message",
      description: "Please try again or contact me directly via email.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

//...........................................................................................
  const contactInfo = [
    {
      icon: MailIcon,
      label: 'Email',
      value: 'himanshurupala2125@gmail.com',
      href: 'mailto:himanshurupala2125@gmail.com'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+91 9879004729',
      href: 'tel:+919879004729'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Ahmedabad, India',
      href: 'https://maps.app.goo.gl/iLN1LSQgY9gwVR9N9'
    }
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      label: 'GitHub',
      href: 'https://github.com/himanshurupala21',
      username: '@himanshurupala'
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/himanshu-rupala-4b983427a/',
      username: '/in/himanshurupala'
    },
    {
      icon: TwitterIcon,
      label: 'Twitter',
      href: 'https://x.com/Himanshurupala',
      username: 'himanshurupala'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <SendIcon className="h-5 w-5 text-primary" />
                <span>Send Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <SendIcon className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        {...(info.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <social.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{social.label}</p>
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {social.username}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Response Note */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Quick Response Guarantee</h3>
                <p className="text-muted-foreground text-sm">
                  I typically respond to all inquiries within 24 hours. For urgent matters, 
                  feel free to reach out via phone or LinkedIn for faster communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;