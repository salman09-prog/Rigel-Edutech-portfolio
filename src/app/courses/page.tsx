"use client";

import { useState } from "react";
import { Search, Filter, Clock, Users, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import programmingImg from '@/assets/course-programming.jpg';
// import dataScienceImg from '@/assets/course-datascience.jpg';
// import marketingImg from '@/assets/course-marketing.jpg';
// import businessImg from '@/assets/course-business.jpg';
import Image from "next/image";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Programming",
    "Data Science",
    "Marketing",
    "Business",
    "Design",
  ];

  const allCourses = [
    // Programming Courses
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description:
        "Master HTML, CSS, JavaScript, React, Node.js and build full-stack applications from scratch.",
      category: "Programming",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      students: 15420,
      rating: 4.8,
      price: "$299",
      //   image: programmingImg,
      instructor: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Python for Data Science",
      description:
        "Learn Python programming with focus on data analysis, pandas, numpy, and machine learning basics.",
      category: "Programming",
      level: "Beginner",
      duration: "8 weeks",
      students: 12350,
      rating: 4.7,
      price: "$199",
      //   image: programmingImg,
      instructor: "David Chen",
    },
    {
      id: 3,
      title: "React Native Mobile Development",
      description:
        "Build cross-platform mobile applications using React Native and modern development practices.",
      category: "Programming",
      level: "Intermediate",
      duration: "10 weeks",
      students: 8930,
      rating: 4.6,
      price: "$349",
      //   image: programmingImg,
      instructor: "Mike Rodriguez",
    },

    // Data Science Courses
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      description:
        "Comprehensive introduction to ML algorithms, model training, and practical implementation.",
      category: "Data Science",
      level: "Intermediate",
      duration: "14 weeks",
      students: 9820,
      rating: 4.9,
      price: "$399",
      //   image: dataScienceImg,
      instructor: "Dr. Lisa Chen",
    },
    {
      id: 5,
      title: "Data Visualization with Tableau",
      description:
        "Create stunning interactive dashboards and tell compelling stories with your data.",
      category: "Data Science",
      level: "Beginner",
      duration: "6 weeks",
      students: 6540,
      rating: 4.5,
      price: "$149",
      //   image: dataScienceImg,
      instructor: "Ahmed Hassan",
    },
    {
      id: 6,
      title: "Advanced Analytics & AI",
      description:
        "Deep dive into neural networks, deep learning, and artificial intelligence applications.",
      category: "Data Science",
      level: "Advanced",
      duration: "16 weeks",
      students: 4210,
      rating: 4.8,
      price: "$599",
      //   image: dataScienceImg,
      instructor: "Prof. Michael Thompson",
    },

    // Marketing Courses
    {
      id: 7,
      title: "Digital Marketing Mastery",
      description:
        "Complete guide to SEO, social media marketing, PPC advertising, and content strategy.",
      category: "Marketing",
      level: "Beginner to Advanced",
      duration: "10 weeks",
      students: 11240,
      rating: 4.7,
      price: "$249",
      //   image: marketingImg,
      instructor: "Lisa Park",
    },
    {
      id: 8,
      title: "Social Media Marketing Pro",
      description:
        "Master Instagram, TikTok, LinkedIn, and Facebook marketing with proven strategies.",
      category: "Marketing",
      level: "Intermediate",
      duration: "8 weeks",
      students: 7890,
      rating: 4.6,
      price: "$199",
      //   image: marketingImg,
      instructor: "Jennifer Lee",
    },
    {
      id: 9,
      title: "Email Marketing & Automation",
      description:
        "Build effective email campaigns, automation sequences, and maximize ROI.",
      category: "Marketing",
      level: "Beginner",
      duration: "6 weeks",
      students: 5670,
      rating: 4.4,
      price: "$129",
      //   image: marketingImg,
      instructor: "Maria Rodriguez",
    },

    // Business Courses
    {
      id: 10,
      title: "Entrepreneurship Essentials",
      description:
        "Learn to start, validate, and scale your business with proven frameworks and strategies.",
      category: "Business",
      level: "Beginner",
      duration: "12 weeks",
      students: 8750,
      rating: 4.8,
      price: "$299",
      //   image: businessImg,
      instructor: "James Wilson",
    },
    {
      id: 11,
      title: "Financial Analysis & Modeling",
      description:
        "Master Excel modeling, valuation techniques, and financial statement analysis.",
      category: "Business",
      level: "Intermediate",
      duration: "10 weeks",
      students: 6320,
      rating: 4.7,
      price: "$349",
      //   image: businessImg,
      instructor: "Sarah Martinez",
    },
    {
      id: 12,
      title: "Project Management Professional",
      description:
        "Comprehensive PMP preparation with Agile, Scrum, and traditional project management.",
      category: "Business",
      level: "Intermediate",
      duration: "14 weeks",
      students: 4890,
      rating: 4.6,
      price: "$399",
      //   image: businessImg,
      instructor: "David Chen",
    },
  ];

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-hero text-white">
        <div className="w-full mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-thin mb-6">Our Courses</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Discover comprehensive learning paths designed by industry experts
            to advance your career.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="w-full mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg rounded-2xl border-2 shadow-soft focus:border-green-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full cursor-pointer px-6 py-3 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-white hover:bg-[#36a1a1] hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-lg text-muted-foreground">
              {filteredCourses.length} course
              {filteredCourses.length !== 1 ? "s" : ""} found
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="course-card">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    /> */}
                    {/* <Image src={course.image} alt={course.title} fill/> */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {course.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-sm font-bold">
                        {course.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {course.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>
                            {course.students.toLocaleString()} students
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-semibold">{course.rating}</span>
                        </div>
                        <span className="text-muted-foreground">
                          {course.level}
                        </span>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Instructor:{" "}
                        <span className="font-semibold text-primary">
                          {course.instructor}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full text-white hover:bg-[#0a7474]! cursor-pointer">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or browse all categories.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                View All Courses
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-[4rem] px-[1.25rem] text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(54, 161, 161), rgb(67, 208, 152))",
        }}
      >
        <div className="w-full mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-thin mb-6">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We&apos;re constantly adding new courses. Let us know what
            you&apos;d like to learn and we&apos;ll notify you when it&apos;s
            available.{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#36a1a1] hover:bg-white/90 px-8 py-4 text-lg cursor-pointer">
              Request a Course
            </Button>
            <Button
              variant="outline"
              className="bg-white text-[#36a1a1] hover:bg-white/90 hover:text-[#36a1a1] px-8 py-4 text-lg cursor-pointer"
            >
              Contact our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
