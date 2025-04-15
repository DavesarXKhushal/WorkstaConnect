import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const FAQ = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const commonFAQs = [
    {
      question: "How do I get paid?",
      answer: "All workers are paid weekly. Payments are processed every Monday for shifts completed the previous week and typically arrive in your bank account within 1-2 business days."
    },
    {
      question: "What if I don't show up for a shift?",
      answer: "No-shows negatively impact businesses and other workers. If you can't make a shift, cancel with as much notice as possible. Repeated no-shows may result in account suspension."
    },
    {
      question: "What if I need to cancel?",
      answer: "We understand circumstances change. Please cancel shifts at least 24 hours in advance through the app. For last-minute cancellations, contact support immediately."
    },
    {
      question: "What if I have friends I want to work with?",
      answer: "You can refer friends to Worksta, and if they meet our qualification standards, you can coordinate to work the same shifts by both selecting them in your availability."
    },
    {
      question: "What if the business wants to hire me after a shift?",
      answer: "That's great news! If a business wants to hire you directly after your shift, they can do so without any additional fees or restrictions. We view this as a successful placement."
    },
    {
      question: "Is it really that simple and easy to work a shift?",
      answer: "Yes! Worksta simplifies the process of finding and booking F&B shifts. Browse available shifts, select ones that match your schedule and skills, show up on time, and get paid weekly."
    }
  ];

  useEffect(() => {
    // Fade in animation for the title
    const timer = setTimeout(() => {
      setActiveSection("title");
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-container">
      <div className="bg-[#FFDFD3] py-20 md:py-28 rounded-b-3xl overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className={`md:col-span-3 ${activeSection === "title" ? "animate-slideRight" : "opacity-0"} transition-all duration-700`}>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Frequently<br />Asked<br />Questions
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mb-8">
                Common questions on what it takes to be a Worksta Pro, and the answers to get you fully prepared.
              </p>
            </div>
            
            <div className="md:col-span-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1545086421-168bb7447a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="F&B Professional preparing coffee" 
                className="rounded-2xl shadow-xl w-full transform transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-16">
            {commonFAQs.map((faq, index) => (
              <FaqAccordion 
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-24 bg-gray-900 text-white p-10 md:p-16 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-3">Have more questions?</h3>
                  <p className="text-gray-300 max-w-md">
                    Our team is ready to help. Reach out to us and we'll get back to you as soon as possible.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <a 
                    href="mailto:support@worksta.sg" 
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors"
                  >
                    Email our support team
                  </a>
                  <a 
                    href="tel:+6565551234" 
                    className="bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                  >
                    Call +65 6555 1234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FaqAccordionProps {
  question: string;
  answer: string;
  index: number;
}

const FaqAccordion = ({ question, answer, index }: FaqAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Staggered animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 100);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div className={`border-b border-gray-200 ${isVisible ? 'animate-slideUp' : 'opacity-0'} transition-all duration-500`}>
      <button
        className="w-full py-6 flex items-center justify-between focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-2xl font-bold text-left text-gray-900">{question}</h3>
        <ChevronDown 
          className={`w-6 h-6 text-gray-700 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-6 text-lg text-gray-600 pr-12">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
