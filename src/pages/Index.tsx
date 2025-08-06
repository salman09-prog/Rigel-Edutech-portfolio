"use client";

import {
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  BookOpen,
  Award,
  Globe,
} from "lucide-react";
// import Layout from '@/components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import FAQ from '@/components/FAQ';
import heroImage1 from "@/assets/hero-img-1.png";
import heroImage2 from "@/assets/hero-img-2.png";
import heroImage3 from "@/assets/hero-img-3.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import educatorImg1 from "@/assets/educator-img-1.jpg";
import educatorImg2 from "@/assets/educator-img-2.png";
import educatorImg3 from "@/assets/educator-img-3.png";
import educatorImg4 from "@/assets/educator-img-4.png";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: heroImage1,
      title: "Transform Your Learning Journey",
      subtitle:
        "Join thousands of students worldwide in advancing their skills with expert instructors and cutting-edge technology.",
      cta: "Start Learning Today",
    },
    {
      image: heroImage2,
      title: "Expert-Led Online Courses",
      subtitle:
        "Learn from industry professionals with our comprehensive curriculum designed for real-world success.",
      cta: "Explore Courses",
    },
    {
      image: heroImage3,
      title: "Shape Your Future with Technology",
      subtitle:
        "Master the skills that matter with our innovative EdTech platform trusted by learners globally.",
      cta: "Get Started Now",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const statistics = [
    {
      icon: Users,
      label: "Active Students",
      value: "50,000+",
      description: "Learners worldwide",
    },
    {
      icon: Globe,
      label: "Countries",
      value: "120+",
      description: "Global reach",
    },
    {
      icon: BookOpen,
      label: "Courses",
      value: "500+",
      description: "Expert-led programs",
    },
    {
      icon: Award,
      label: "Success Rate",
      value: "95%",
      description: "Course completion",
    },
  ];

  const courseCategories = [
    {
      title: "Programming & Development",
      description: "Master coding skills with hands-on projects",
      courses: "150+ courses",
      color: "#36a1a1",
    },
    {
      title: "Data Science & AI",
      description: "Dive into machine learning and analytics",
      courses: "80+ courses",
      color: "bg-secondary",
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand with modern strategies",
      courses: "120+ courses",
      color: "bg-accent",
    },
    {
      title: "Business & Finance",
      description: "Build entrepreneurial and financial skills",
      courses: "200+ courses",
      color: "bg-primary",
    },
  ];

  const educators = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Data Scientist",
      image: educatorImg1,
      expertise: "Machine Learning, AI",
    },
    {
      name: "Mark Rodriguez",
      title: "Senior Full-Stack Developer",
      image: educatorImg2,
      expertise: "React, Node.js, Cloud",
    },
    {
      name: "Lisa Chen",
      title: "Digital Marketing Expert",
      image: educatorImg3,
      expertise: "SEO, Social Media, Growth",
    },
    {
      name: "Prof. Michael Thompson",
      title: "Business Strategy Consultant",
      image: educatorImg4,
      expertise: "Entrepreneurship, Finance",
    },
  ];

  const testimonials = [
    {
      name: "Emily Davis",
      role: "Software Engineer at Google",
      content:
        "Rigel Edutech's courses helped me transition from marketing to tech. The instructors are incredibly knowledgeable and supportive.",
      rating: 5,
    },
    {
      name: "Carlos Martinez",
      role: "Data Analyst at Microsoft",
      content:
        "The hands-on projects and real-world applications made learning complex concepts much easier. Highly recommend!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Marketing Manager at Shopify",
      content:
        "The digital marketing course was comprehensive and up-to-date. I immediately applied what I learned in my current role.",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroSlides[currentSlide].image}
            alt="Hero"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <h1
              className="text-5xl md:text-7xl font-thin mb-6 fade-in-up">
              {heroSlides[currentSlide].title}
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in-up">
              {heroSlides[currentSlide].subtitle}
            </p>
            <Button
              className="bg-[#36A1A1] text-lg px-8 py-4 fade-in-up hover:bg-[#41c6c6]! hover:scale-105 cursor-pointer">
              {heroSlides[currentSlide].cta}
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="bg-gradient-primary text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(54, 161, 161), rgb(67, 208, 152))",
          padding: "4rem 1rem",
        }}
      >
        <div className="w-full mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl border-[0.25px] bg-[#ffffff1a] p-[1rem] backdrop-blur-sm border-[##fff3] text-center"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="px-[1rem] py-[6rem]">
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin mb-6">
              Explore Our Course Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover comprehensive learning paths designed by industry experts
              to help you achieve your career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseCategories.map((category, index) => (
              <Card key={index} className="course-card">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6`}
                    style={{ backgroundColor: "#43d098" }}
                  >
                    <BookOpen className="h-8 w-8 text-white bg-[#43d098]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-[#1b073b] mb-4">{category.description}</p>
                  <p className="text-sm font-semibold text-primary">
                    {category.courses}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educators Section */}
      <section
        className="px-[1rem] py-[4rem]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255, 255, 255), rgb(249, 250, 251))",
        }}
      >
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin mb-6">
              Meet Our Expert Educators
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry professionals with years of real-world
              experience and passion for teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educators.map((educator, index) => (
              <Card key={index} className="educator-card text-center">
                <CardContent className="p-6">
                  {/* <Image
                    src={educator.image}
                    alt={educator.name}
                    fill
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  /> */}
                  <h3 className="text-lg font-thin mb-1">{educator.name}</h3>
                  <p className="text-[#36a1a1] font-semibold mb-2">
                    {educator.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {educator.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights Section */}
      <section className="px-[1rem] py-[4rem]">
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin mb-6">
              See Learning in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how our students are transforming their careers through our
              innovative learning platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <Card key={index} className="course-card">
                <CardContent className="p-0">
                  <div
                    className="relative h-48 flex items-center justify-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgb(54, 161, 161), rgb(67, 208, 152))",
                    }}
                  >
                    <Button
                      variant="ghost"
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 text-white"
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-thin mb-2">
                      Student Success Story #{video}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Discover how our comprehensive courses helped students
                      achieve their career goals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="px-[1rem] py-[4rem]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255, 255, 255), rgb(249, 250, 251))",
        }}
      >
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of successful learners who have transformed their
              careers with Rigel Edutech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    {testimonial.content}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-thin">{testimonial.name}</p>
                    <p className="text-sm text-[#36a1a1]">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Logos Section */}
      <section className="px-[1rem] py-[4rem]">
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-muted-foreground">
              Join companies that trust Rigel Edutech for their training needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {["Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix"].map(
              (company) => (
                <div key={company} className="text-center">
                  <div className="bg-muted rounded-lg p-6 h-16 flex items-center justify-center">
                    <span className="font-bold text-lg text-muted-foreground">
                      {company}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

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
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students worldwide and take the first step towards
            achieving your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#36a1a1] hover:bg-white/90 px-8 py-4 text-lg">
              Explore Courses
            </Button>
            <Button
              variant="outline"
              className="bg-white text-[#36a1a1] hover:bg-white/90 hover:text-[#36a1a1] px-8 py-4 text-lg"
            >
              Talk to Advisor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
