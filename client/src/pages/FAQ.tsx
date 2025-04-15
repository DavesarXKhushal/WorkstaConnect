import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQ = () => {
  const workerFAQs = [
    {
      question: "How do I sign up for Worksta?",
      answer: "Simply click on the 'Get Started' button and follow the registration process. You'll need to provide some basic information, upload your profile photo, and complete a brief skills assessment."
    },
    {
      question: "What types of jobs are available?",
      answer: "Worksta offers a variety of F&B jobs including server, bartender, barista, cook, kitchen helper, dishwasher, and more. The available roles vary by venue and their specific needs."
    },
    {
      question: "How much can I earn?",
      answer: "Pay rates vary by role, venue, and shift timing. Most roles pay between S$13-$20 per hour, with specialized positions often paying more. You'll always see the exact pay rate before accepting any shift."
    },
    {
      question: "When do I get paid?",
      answer: "All workers are paid weekly. Payments are processed every Monday for shifts completed the previous week and typically arrive in your bank account within 1-2 business days."
    },
    {
      question: "Can I cancel a shift after I've accepted it?",
      answer: "While we understand circumstances change, we ask that you only cancel shifts when absolutely necessary and provide as much notice as possible. Frequent cancellations may affect your profile rating and future shift opportunities."
    },
    {
      question: "Do I need prior experience?",
      answer: "Some roles require previous experience while others are open to beginners. Each job posting will clearly state the experience requirements so you can apply for shifts that match your skills."
    }
  ];

  const businessFAQs = [
    {
      question: "How does hiring staff through Worksta work?",
      answer: "After creating your business account, you can post shifts with details about the role, required skills, timing, and pay rate. Qualified workers will apply, and you can review their profiles and ratings before confirming the booking."
    },
    {
      question: "What is the cost for businesses?",
      answer: "Businesses pay only for the hours worked at the rate they set, plus a small service fee. There are no subscription costs or minimum commitments required to use Worksta."
    },
    {
      question: "How quickly can I get staff?",
      answer: "Many shifts are filled within hours of posting. For best results, we recommend posting shifts at least 48 hours in advance, though we can often accommodate same-day requests during peak hours."
    },
    {
      question: "Are the workers vetted?",
      answer: "Yes, all Worksta professionals undergo a verification process which includes identity verification, work eligibility checks, and skills assessment. They are also rated by previous employers after each shift."
    },
    {
      question: "What if a worker doesn't show up?",
      answer: "While this rarely happens due to our rating system, in the event a worker fails to show up, contact our support team immediately and we'll work to find a replacement as quickly as possible."
    },
    {
      question: "Can I hire the same workers repeatedly?",
      answer: "Absolutely! If you find workers who are a great fit for your business, you can add them to your 'Favorites' list and directly offer them shifts in the future."
    }
  ];

  const paymentFAQs = [
    {
      question: "What payment methods are accepted?",
      answer: "Businesses can pay using major credit cards, bank transfers, or PayNow. Workers receive payments directly to their bank accounts via FAST transfer."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, Worksta is completely transparent about all fees. Businesses pay the hourly rate plus a clearly displayed service fee. Workers receive the full hourly rate shown on the shift details."
    },
    {
      question: "How are taxes handled?",
      answer: "Worksta provides businesses with detailed records of all payments for accounting purposes. Workers are responsible for reporting their income according to local tax regulations."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Find answers to common questions about using Worksta
        </p>

        <Tabs defaultValue="workers" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="workers">For Workers</TabsTrigger>
            <TabsTrigger value="businesses">For Businesses</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="workers">
            <Accordion type="single" collapsible className="w-full">
              {workerFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`worker-item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          
          <TabsContent value="businesses">
            <Accordion type="single" collapsible className="w-full">
              {businessFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`business-item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          
          <TabsContent value="payments">
            <Accordion type="single" collapsible className="w-full">
              {paymentFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`payment-item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>

        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help with any other questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@worksta.sg"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Email Support
            </a>
            <a
              href="tel:+6565551234"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-primary bg-white border border-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Call +65 6555 1234
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
