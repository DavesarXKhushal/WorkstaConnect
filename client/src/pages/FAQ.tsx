
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DollarSign, Clock, Shield, Coffee, MessageCircle, Sparkles } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Payment & Earnings",
      description: "Everything about getting paid and managing your earnings",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Shifts & Scheduling",
      description: "Information about booking and managing shifts",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Account & Security",
      description: "Account management and security details",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: "Working at Venues",
      description: "Guidelines for working at different venues",
      color: "from-orange-500/20 to-yellow-500/20"
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-20 md:py-28 rounded-b-[40px] shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-medium">Got Questions?</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              We've Got Answers
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with us. 
              Browse through our most frequently asked questions.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 cursor-pointer group"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${category.color} w-fit group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="container pb-24">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {commonFAQs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border bg-white rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-lg hover:no-underline py-4">
                  <div className="flex items-start text-left">
                    <span className="text-primary font-semibold mr-3">{faq.category}</span>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    <h3 className="text-2xl font-bold">Still have questions?</h3>
                  </div>
                  <p className="text-white/90 text-lg">
                    Can't find what you're looking for? Our support team is here to help 24/7.
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:min-w-[240px]">
                  <a 
                    href="mailto:support@worksta.com" 
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors text-center"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="tel:+6565551234" 
                    className="bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-colors text-center"
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

export default FAQ;
