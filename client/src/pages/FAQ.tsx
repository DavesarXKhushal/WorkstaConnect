
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Search, Award, Clock, DollarSign, Bell, Shield, Coffee } from "lucide-react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

const FAQ = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqCategories = [
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Payment & Earnings",
      description: "Everything about getting paid and managing your earnings"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Shifts & Scheduling",
      description: "Information about booking and managing shifts"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Account & Security",
      description: "Account management and security details"
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: "Working at Venues",
      description: "Guidelines for working at different venues"
    }
  ];
  
  const commonFAQs = [
    {
      category: "Payment & Earnings",
      question: "How do I get paid?",
      answer: "All workers are paid weekly. Payments are processed every Monday for shifts completed the previous week and typically arrive in your bank account within 1-2 business days. We support direct bank transfers and popular payment methods."
    },
    {
      question: "What if I don't show up for a shift?",
      category: "Shifts & Scheduling",
      answer: "No-shows negatively impact businesses and other workers. If you can't make a shift, cancel with as much notice as possible. Multiple no-shows may result in account suspension. We understand emergencies happen, but communication is key."
    },
    {
      question: "How do I update my bank details?",
      category: "Account & Security",
      answer: "You can update your payment information in your profile settings. Changes take effect immediately for future payments. For security, we may require verification when updating banking details."
    },
    {
      question: "What should I wear to work?",
      category: "Working at Venues",
      answer: "Dress code varies by venue. General guidelines include: Clean, pressed black pants, comfortable non-slip shoes, and a clean collared shirt. Some venues provide uniforms. Check specific venue requirements in the shift details."
    },
    {
      question: "Are there minimum hour requirements?",
      category: "Shifts & Scheduling",
      answer: "No minimum hours are required. Work as much or as little as you want. However, maintaining a consistent schedule can improve your access to premium shifts and venues."
    },
    {
      question: "How do I report an issue at work?",
      category: "Working at Venues",
      answer: "Use the in-app reporting feature or contact support immediately. We take all reports seriously and will investigate promptly while maintaining confidentiality."
    }
  ].filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSection("title");
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-20 md:py-28 rounded-b-3xl shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Everything you need to know about working with us. Can't find what you're looking for? Contact our support team.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search FAQ..."
                className="pl-12 py-6 text-lg rounded-2xl shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="container pb-24">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {commonFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-6 py-2">
                <AccordionTrigger className="text-lg hover:no-underline">
                  <div className="flex items-start text-left">
                    <span className="text-primary font-semibold mr-2">{faq.category}</span>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-gray-900 text-white p-10 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 mix-blend-overlay" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-3">Still have questions?</h3>
                <p className="text-gray-300 max-w-md">
                  Can't find what you're looking for? Our support team is here to help 24/7.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:support@worksta.com" 
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors text-center"
                >
                  Contact Support
                </a>
                <a 
                  href="tel:+6565551234" 
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  Call +65 6555 1234
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
