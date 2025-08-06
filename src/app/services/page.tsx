"use client";

import { useState } from 'react';
import { BookOpen, Users, Lightbulb, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
  const [activeService, setActiveService] = useState('courses');

  const services = {
    courses: {
      title: "Online Course Development",
      description: "Comprehensive course creation from concept to launch",
      features: [
        "Custom curriculum design aligned with industry standards",
        "Interactive multimedia content development",
        "Assessment and quiz creation",
        "Mobile-responsive learning platform",
        "Student progress tracking and analytics",
        "Certificate generation and verification",
        "24/7 technical support and maintenance"
      ],
      pricing: "Starting from $5,000",
      timeline: "4-8 weeks",
      ideal: "Educational institutions, training organizations, subject matter experts"
    },
    consulting: {
      title: "Educational Consulting",
      description: "Strategic guidance for educational transformation",
      features: [
        "Learning strategy development and planning",
        "Technology integration consulting",
        "Instructional design best practices",
        "Learning management system selection",
        "Faculty training and development",
        "Student engagement optimization",
        "Performance measurement and improvement"
      ],
      pricing: "Starting from $150/hour",
      timeline: "2-12 weeks",
      ideal: "Schools, universities, corporate training departments"
    },
    curriculum: {
      title: "Curriculum Design",
      description: "Research-based curriculum development for modern learners",
      features: [
        "Industry-aligned learning objectives",
        "Competency-based curriculum mapping",
        "Multi-modal content development",
        "Assessment strategy design",
        "Learning pathway optimization",
        "Accessibility and inclusion compliance",
        "Continuous improvement frameworks"
      ],
      pricing: "Starting from $10,000",
      timeline: "6-12 weeks",
      ideal: "Educational institutions, professional development programs"
    },
    corporate: {
      title: "Corporate Training Solutions",
      description: "Customized training programs for organizational growth",
      features: [
        "Skills gap analysis and training needs assessment",
        "Custom learning management system deployment",
        "Employee onboarding and development programs",
        "Leadership and management training",
        "Compliance and certification programs",
        "Performance tracking and reporting",
        "Scalable training infrastructure"
      ],
      pricing: "Starting from $15,000",
      timeline: "6-16 weeks",
      ideal: "Corporations, startups, non-profit organizations"
    }
  };

  const additionalServices = [
    {
      icon: Settings,
      title: "Platform Integration",
      description: "Seamless integration with existing learning management systems and corporate tools.",
      features: ["LMS Integration", "API Development", "Single Sign-On", "Data Migration"]
    },
    {
      icon: Users,
      title: "Instructor Training",
      description: "Comprehensive training for educators to maximize the impact of digital learning tools.",
      features: ["Teaching Best Practices", "Technology Training", "Content Creation", "Student Engagement"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Workshops",
      description: "Collaborative sessions to identify opportunities for educational innovation in your organization.",
      features: ["Strategy Sessions", "Technology Assessment", "Implementation Planning", "Change Management"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin with a comprehensive analysis of your needs, goals, and current educational infrastructure."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Our experts develop a customized strategy aligned with your objectives and target audience."
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Professional content development using best practices in instructional design and user experience."
    },
    {
      step: "04",
      title: "Implementation",
      description: "Seamless deployment with thorough testing, training, and support throughout the launch process."
    },
    {
      step: "05",
      title: "Optimization",
      description: "Ongoing monitoring, analytics review, and continuous improvement to maximize learning outcomes."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-thin mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Comprehensive educational technology solutions tailored to your organization&apos;s unique needs.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-padding">
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin mb-6">Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From course development to strategic consulting, we provide end-to-end solutions for educational excellence.
            </p>
          </div>

          <Tabs value={activeService} onValueChange={setActiveService} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="courses" className="text-sm">Course Development</TabsTrigger>
              <TabsTrigger value="consulting" className="text-sm">Consulting</TabsTrigger>
              <TabsTrigger value="curriculum" className="text-sm">Curriculum Design</TabsTrigger>
              <TabsTrigger value="corporate" className="text-sm">Corporate Training</TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([key, service]) => (
              <TabsContent key={key} value={key}>
                <Card className="feature-card">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-3xl font-thin mb-4">{service.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                        
                        <div className="space-y-4 mb-8">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-thin text-primary">PRICING:</span>
                            <span className="text-lg font-thin">{service.pricing}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-thin text-primary">TIMELINE:</span>
                            <span>{service.timeline}</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-sm font-thin text-primary">IDEAL FOR:</span>
                            <span className="text-muted-foreground">{service.ideal}</span>
                          </div>
                        </div>

                        <Button className="bg-[#36a1a1] hover:bg-[#3ec0c0]! hover:scale-105 cursor-pointer">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4">What&apos;s Included:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gradient-subtle">
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized services to complement your primary educational initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="feature-card">
                <CardContent className="p-8 text-center">
                  <service.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-thin mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground">• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes for every project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-thin text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-thin mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
   <section
        className="py-[4rem] px-[1.25rem] text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(54, 161, 161), rgb(67, 208, 152))",
        }}
      >
        <div className="w-full mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-thin mb-6">
            Ready to Transform Your Educational Programs?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
          Let&apos;s discuss how we can help you achieve your learning and development goals with our comprehensive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#36a1a1] hover:bg-white/90 px-8 py-4 text-lg cursor-pointer">
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="bg-white text-[#36a1a1] hover:bg-white/90 hover:text-[#36a1a1] px-8 py-4 text-lg cursor-pointer"
            >
             Download Service Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;