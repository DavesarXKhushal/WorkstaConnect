import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-black/95 pt-10 pb-20 md:py-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h1 className="font-black uppercase leading-[0.9] mb-8">
              WORK ANYTIME,<br />
              GET PAID<br />
              ON TIME.
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-xl">
              Worksta is the easiest way to pick up shifts at F&B businesses across Singapore. Work at nearby venues in your own time and get paid weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
                  GET STARTED
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline" className="btn-outline w-full sm:w-auto text-lg">
                  LEARN MORE <ChevronRight className="h-5 w-5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image and Payment Section */}
          <div className="lg:w-1/2 lg:pl-8 relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Phone mockup with app */}
              <div className="col-span-2 md:col-span-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1621274147744-cfb5032294b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Chef working" 
                  className="rounded-xl w-full h-[500px] object-cover" 
                />
              </div>

              {/* Person working image */}
              <div className="hidden md:block relative">
                <div className="absolute top-0 -left-20">
                  <PaymentCard />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1608835291093-394b3ce6d0d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Mobile app interface" 
                  className="rounded-xl w-full h-[500px] object-cover mt-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PaymentCard = () => {
  return (
    <div className="bg-white rounded-xl p-5 w-[260px] shadow-xl">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 mr-3 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" fill="#4F46E5" />
          </svg>
        </div>
        <div>
          <div className="text-xs text-gray-500">Payment sent</div>
          <div className="text-sm font-bold text-gray-800">Apr 12, 2025</div>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="text-xs text-gray-500">Description</div>
        <div className="text-sm font-bold text-gray-800">Weekend shift at Harry's Chijmes</div>
      </div>
      
      <div className="mb-1">
        <div className="text-xs text-gray-500">Rate</div>
        <div className="text-sm font-bold text-gray-800">S$18/hr × 5 hours</div>
      </div>
      
      <div className="text-2xl font-black text-gray-900 mt-2">S$90.00</div>
    </div>
  );
};

export default Hero;
