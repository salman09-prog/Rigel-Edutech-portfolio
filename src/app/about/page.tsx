import { Users, Target, Eye, Award, Globe, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
// import ceoPortrait from '@/assets/ceo-portrait.jpg';
// import cpoPortrait from '@/assets/cpo-portrait.jpg';
import Image from 'next/image';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Martinez",
      title: "Head of Curriculum",
    //   image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "15+ years in educational design"
    },
    {
      name: "David Chen",
      title: "Lead Developer",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Full-stack development expert"
    },
    {
      name: "Maria Rodriguez",
      title: "Student Success Manager",
    //   image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      description: "Dedicated to learner outcomes"
    },
    {
      name: "James Wilson",
      title: "Technology Director",
    //   image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      description: "EdTech innovation specialist"
    },
    {
      name: "Lisa Park",
      title: "Marketing Director",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Growth and engagement expert"
    },
    {
      name: "Ahmed Hassan",
      title: "Data Analytics Lead",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Learning insights specialist"
    }
  ];

  const companyValues = [
    {
      icon: BookOpen,
      title: "Excellence in Education",
      description: "We maintain the highest standards in curriculum design and instruction delivery."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Making quality education accessible to learners worldwide, regardless of location."
    },
    {
      icon: Users,
      title: "Student-Centered Approach",
      description: "Every decision we make prioritizes the learning experience and student success."
    },
    {
      icon: Award,
      title: "Innovation Leadership",
      description: "Pioneering new technologies and methodologies in educational delivery."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-[6rem] px-[1rem] text-white" style={{backgroundImage: "linear-gradient(135deg, rgb(54, 161, 161), rgb(67, 208, 152), rgb(27, 7, 59))"}}>
        <div className="w-full mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-thin mb-6">About Rigel Edutech</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto line-height:1.625">
            Empowering learners worldwide through innovative educational technology and expert instruction.
          </p>
        </div>
      </section>

      {/* Introduction to Rigel Nexus Holdings */}
      <section className="py-[4rem] px-[1rem]">
        <div className="w-full mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-thin mb-8">Part of Rigel Nexus Holdings LLC</h2>
            <p className="text-lg text-[#64748b] leading-relaxed mb-8">
              Rigel Edutech is a proud subsidiary of Rigel Nexus Holdings LLC, a forward-thinking conglomerate 
              dedicated to fostering innovation across multiple industries. Rigel Nexus Holdings was founded on 
              the principle of creating sustainable, impactful solutions that drive positive change in society.
            </p>
            <p className="text-lg text-[#64748b] leading-relaxed">
              Our parent company&apos; diverse portfolio includes technology ventures, educational initiatives, 
              and strategic investments that collectively work toward building a more connected and educated world. 
              This strong foundation allows Rigel Edutech to leverage extensive resources, expertise, and networks 
              to deliver exceptional educational experiences.
            </p>
          </div>
        </div>
      </section>

      {/* What is Rigel Edutech */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-thin mb-6">What is Rigel Edutech?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Rigel Edutech is a cutting-edge educational technology company that bridges the gap between 
                traditional learning and modern digital experiences. We specialize in creating comprehensive 
                online learning platforms, developing industry-relevant curricula, and providing personalized 
                educational consulting services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform combines the best of human expertise with advanced technology to deliver 
                engaging, effective, and accessible education to learners across the globe. From individual 
                courses to complete degree programs, we partner with leading educators and industry professionals 
                to ensure our content remains current, relevant, and impactful.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {companyValues.map((value, index) => (
                <Card key={index} className="feature-card text-center">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-thin mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="feature-card">
              <CardContent className="p-8">
                <Target className="h-16 w-16 text-primary mb-6" />
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize access to high-quality education by leveraging technology to create 
                  engaging, personalized, and effective learning experiences that empower individuals 
                  to achieve their personal and professional goals, regardless of their geographical 
                  location or background.
                </p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardContent className="p-8">
                <Eye className="h-16 w-16 text-secondary mb-6" />
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the world&apos; leading educational technology platform, recognized for 
                  transforming lives through innovative learning solutions that bridge the skills 
                  gap between education and industry demands, creating a more skilled and 
                  knowledgeable global workforce.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Leadership</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{backgroundImage: " (180deg, hsl(0 0% 100%), hsl(210 20% 98%))"}}>
              Our experienced leadership team brings together decades of expertise in education, 
              technology, and business innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            {/* CEO */}
            <Card className="educator-card">
              <CardContent className="p-8 text-center">
                {/* <Image src={ceoPortrait} height={50} width={50} alt='ceo-photo'/> */}
                <h3 className="text-2xl font-bold mb-2">Michael Thompson</h3>
                <p className="text-primary font-semibold text-lg mb-4">Co-Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 20 years of experience in educational leadership and technology innovation, 
                  Michael has previously served as Director of Digital Learning at Stanford University 
                  and VP of Education at TechCorp. He holds an MBA from Harvard Business School and 
                  a Ph.D. in Educational Technology.
                </p>
                <p className="text-sm text-muted-foreground">
                  &quot;Education is the foundation of human progress. Our goal is to make exceptional 
                  learning accessible to everyone, everywhere.&quot;
                </p>
              </CardContent>
            </Card>

            {/* CPO */}
            <Card className="educator-card">
              <CardContent className="p-8 text-center">
                 {/* <Image src={cpoPortrait} height={50} width={50} alt='ceo-photo'/> */}
                <h3 className="text-2xl font-bold mb-2">Jennifer Lee</h3>
                <p className="text-primary font-semibold text-lg mb-4">Co-Founder & CPO</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Jennifer brings 15+ years of product development experience from leading tech 
                  companies including Google and Apple. She specializes in user experience design 
                  and educational product development. She holds an MS in Computer Science from MIT 
                  and an M.Ed. in Learning Sciences.
                </p>
                <p className="text-sm text-muted-foreground">
                  &quot;Great products start with understanding real human needs. We build technology 
                  that serves learners, not the other way around.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Amazing Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Behind every great educational experience is a dedicated team of professionals 
              committed to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="educator-card">
                <CardContent className="p-6 text-center">
                {/* <Image src={member.image} height={50} width={50} alt={member.name}/> */}
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.title}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-thin mb-6">Ready to Join Our Learning Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-thin">
            Experience the difference that expert instruction and innovative technology can make in your learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="hero-button bg-white text-primary hover:bg-white/90 cursor-pointer font-light">
              Explore Courses
            </button>
            <button className="btn-primary-outline border-white text-white! hover:bg-white hover:text-[#36a1a1]! hero-button cursor-pointer">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;