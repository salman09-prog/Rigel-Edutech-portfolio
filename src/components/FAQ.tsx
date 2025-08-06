import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Rigel Edutech different from other online learning platforms?",
      answer: "Rigel Edutech combines expert-led instruction with cutting-edge technology to deliver personalized learning experiences. Our courses are designed by industry professionals and updated regularly to reflect current market demands. We also provide 1-on-1 mentorship and career support to ensure your success."
    },
    {
      question: "Are the courses suitable for beginners?",
      answer: "Absolutely! We offer courses for all skill levels, from complete beginners to advanced professionals. Each course clearly indicates the prerequisite knowledge required, and our learning paths are designed to take you from zero to professional competency."
    },
    {
      question: "Do you provide certificates upon course completion?",
      answer: "Yes, all our courses come with industry-recognized certificates upon successful completion. These certificates are verified and can be shared on professional networks like LinkedIn to showcase your newly acquired skills."
    },
    {
      question: "What kind of support do you offer during the course?",
      answer: "We provide comprehensive support including access to expert instructors, peer discussion forums, live Q&A sessions, and dedicated learning advisors. Our support team is available 24/7 to help with any technical or learning-related questions."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes! Our platform is fully responsive and works seamlessly across all devices. You can learn on your desktop, tablet, or smartphone, and your progress is automatically synced across all devices."
    },
    {
      question: "What if I'm not satisfied with a course?",
      answer: "We offer a 30-day money-back guarantee for all our courses. If you're not completely satisfied with your learning experience, you can request a full refund within 30 days of enrollment, no questions asked."
    },
    {
      question: "Do you offer corporate training programs?",
      answer: "Yes, we provide customized corporate training solutions for organizations of all sizes. Our enterprise packages include bulk enrollments, progress tracking, custom content development, and dedicated account management."
    },
    {
      question: "How long do I have access to course materials?",
      answer: "Once you enroll in a course, you have lifetime access to all course materials, including future updates and additions. You can learn at your own pace and revisit content whenever you need to refresh your knowledge."
    }
  ];

  return (
    <section className="px-[1rem] py-[4rem]" style={{backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(249, 250, 251))"}}>
      <div className="w-full mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our courses, platform, and learning experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border-0 rounded-2xl px-6"
                style={{boxShadow: "0 4px 20px -4px hsl(180 50% 42% / .1)"}}
              >
                <AccordionTrigger className="text-left font-thin text-lg py-6 hover: text-decoration-line: none; hover:text-[#36a1a1]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#64748b] pb-6 line-height: 1.625">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;