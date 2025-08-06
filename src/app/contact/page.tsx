"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  //   const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // toast({
    //   title: "Message Sent Successfully!",
    //   description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    // });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      content: [
        "123 Education Street",
        "Learning City, LC 12345",
        "United States",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      content: [
        "Main: +1 (555) 123-4567",
        "Support: +1 (555) 123-4568",
        "Toll-free: 1-800-RIGEL-ED",
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      content: [
        "info@rigeledutech.com",
        "support@rigeledutech.com",
        "partnerships@rigeledutech.com",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  //   const socialLinks = [
  //     { icon: Facebook, href: "#", label: "Facebook" },
  //     { icon: Twitter, href: "#", label: "Twitter" },
  //     { icon: Linkedin, href: "#", label: "LinkedIn" },
  //     { icon: Instagram, href: "#", label: "Instagram" }
  //   ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Education Street, Learning City, LC 12345",
      phone: "+1 (555) 123-4567",
      isHeadquarters: true,
    },
    {
      city: "New York",
      address: "456 Learning Avenue, Education District, NY 10001",
      phone: "+1 (555) 987-6543",
      isHeadquarters: false,
    },
    {
      city: "Austin",
      address: "789 Innovation Drive, Tech Quarter, TX 73301",
      phone: "+1 (555) 456-7890",
      isHeadquarters: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-hero text-white">
        <div className="w-full mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-thin mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Ready to transform your learning experience? We&apos;re here to help
            you get started.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-padding bg-gradient-subtle">
        <div className="w-full mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="feature-card text-center">
                <CardContent className="p-8">
                  <info.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.content.map((line, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section-padding">
        <div className="w-full mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-thin mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our courses or services? Fill out the form
                below and our team will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="rounded-xl border-0 shadow-soft py-6"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="rounded-xl border-0 shadow-soft py-6"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className="rounded-xl border-0 shadow-soft py-6"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={6}
                    className="rounded-xl border-0 shadow-soft"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-lg py-6 hover:bg-[#3fb8b8]! hover:scale-105 cursor-pointer"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-4xl font-thin mb-6">Our Locations</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Visit us at any of our office locations worldwide. We&apos;re
                always happy to meet in person.
              </p>

              <div className="space-y-6">
                {officeLocations.map((location, index) => (
                  <Card key={index} className="feature-card">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold">{location.city}</h3>
                        {location.isHeadquarters && (
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            Headquarters
                          </span>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">
                            {location.address}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-primary" />
                          <p className="text-muted-foreground">
                            {location.phone}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                {/* <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-thin mb-6">Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Check out our comprehensive FAQ section for quick answers to common
            questions about our courses and services.
          </p>
          <Button className="text-white hover:bg-[#0a7474]! cursor-pointer hover:scale-105">
            Enroll Now
          </Button>
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
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don&asop;t wait any longer. Join thousands of students who are
            already advancing their careers with Rigel Edutech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#36a1a1] hover:bg-white/90 px-8 py-4 text-lg cursor-pointer">
            Browse Courses
            </Button>
            <Button
              variant="outline"
              className="bg-white text-[#36a1a1] hover:bg-white/90 hover:text-[#36a1a1] px-8 py-4 text-lg cursor-pointer"
            >
             Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
