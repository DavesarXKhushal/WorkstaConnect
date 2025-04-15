import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-20 text-center">How it works</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6">
          <StepCard 
            stepNumber="1" 
            title="Find businesses you like" 
            description="Find restaurants with your preferred areas, roles, or working hours."
            phoneImage="/images/app-browse.png" // This is a static image we'll replace later
            bgColor="bg-blue-50"
          >
            {/* Phone mockup with browse UI */}
            <PhoneMockup>
              <div className="bg-white p-3 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs font-medium">Find more work</div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200">
                    <span className="text-xs">⨯</span>
                  </div>
                </div>
                
                <h5 className="font-bold text-sm mb-4">Browse</h5>
                
                <div className="rounded-lg overflow-hidden mb-3 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Restaurant" 
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                    <span className="text-xs">♡</span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <h6 className="font-bold text-xs">Harry's @ Resort World Sentosa</h6>
                  <div className="flex text-[10px] text-gray-500 gap-1 mb-2">
                    <span>★★★★★</span>
                    <span>(55)</span>
                  </div>
                  <div className="text-[10px] text-gray-500">RWS, Singapore • 22 mins from you</div>
                </div>
                
                <div className="flex justify-between items-center text-[10px] mb-4">
                  <div>
                    <span className="font-medium">Server</span> • <span className="font-bold">$18-22/hr</span>
                  </div>
                  <div className="bg-gray-100 px-2 py-1 rounded-full">10 shifts</div>
                </div>
                
                <div className="rounded-lg overflow-hidden mb-3 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Restaurant" 
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                    <span className="text-xs">♡</span>
                  </div>
                </div>
                
                <div className="mb-2">
                  <h6 className="font-bold text-xs">Empress</h6>
                  <div className="flex justify-between">
                    <div className="text-[10px] text-gray-500">Asian Fusion</div>
                    <div className="text-[10px] text-primary font-medium">VIEW</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-1 text-center pt-3 border-t border-gray-100">
                  <div className="text-[10px]">
                    <div className="font-bold">Explore</div>
                  </div>
                  <div className="text-[10px] text-gray-400">
                    <div>Saved</div>
                  </div>
                  <div className="text-[10px] text-gray-400">
                    <div>Shifts</div>
                  </div>
                  <div className="text-[10px] text-gray-400">
                    <div>Profile</div>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </StepCard>
          
          <StepCard 
            stepNumber="2" 
            title="Book shifts you want" 
            description="Check the days that you can work and book these shifts."
            phoneImage="/images/app-booking.png" // This is a static image we'll replace later
            bgColor="bg-purple-50"
          >
            {/* Phone mockup with book shift UI */}
            <PhoneMockup>
              <div className="bg-white p-3 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 mr-2">
                      <span className="text-xs">←</span>
                    </div>
                    <div className="text-xs font-medium">Reserve & Confirm</div>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200">
                    <span className="text-xs">⨯</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex gap-1 mb-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                      PG
                    </div>
                    <div>
                      <div className="text-xs font-medium">Prego</div>
                      <div className="text-[10px] text-gray-500">Italian • Server • $18-24/hr</div>
                    </div>
                  </div>
                  
                  <div className="text-[10px] text-gray-500 mt-2">
                    Available timing (showing all timeslots):
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                    <div className="text-[10px] font-medium">Tue, 16 Apr</div>
                    <div className="text-[10px]">10:00 AM - 11:00 PM</div>
                    <div className="text-[10px] font-medium text-green-600">$25/hr</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                    <div className="text-[10px] font-medium">Wed, 17 Apr</div>
                    <div className="text-[10px]">10:00 AM - 11:00 PM</div>
                    <div className="text-[10px] font-medium">$20/hr</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="text-[10px] font-medium">Shift requirements</div>
                    <div className="text-[10px] text-green-600">All requirements met</div>
                  </div>
                  
                  <div className="flex items-center mb-1">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <span className="text-[8px] text-blue-600">✓</span>
                    </div>
                    <div className="text-[10px]">Black uniform</div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <span className="text-[8px] text-blue-600">✓</span>
                    </div>
                    <div className="text-[10px]">Transport provided</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-2 rounded-lg mb-4">
                  <div className="text-[10px] font-medium mb-1">Want to join on Apr 17?</div>
                  <div className="flex gap-2">
                    <div className="bg-white px-3 py-1 rounded-lg border border-gray-200 text-[10px]">
                      10:30 AM - 10:00 PM
                    </div>
                    <div className="text-[10px] py-1">
                      More
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white text-xs font-medium py-2 rounded-lg">
                  Reserve shifts
                </button>
              </div>
            </PhoneMockup>
          </StepCard>
          
          <StepCard 
            stepNumber="3" 
            title="Work and get paid every week" 
            description="Add your bank account, show up, and work. Worksta credits your weekly pay to your bank account every Monday."
            phoneImage="/images/app-payment.png" // This is a static image we'll replace later
            bgColor="bg-green-50"
          >
            {/* Phone mockup with payment UI */}
            <PhoneMockup>
              <div className="bg-white p-3 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 mr-2">
                      <span className="text-xs">←</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200">
                    <span className="text-xs">↗</span>
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-xs font-medium mb-2">Payment sent</div>
                  <div className="flex justify-center mb-2">
                    <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                  </div>
                  <div className="text-xl font-bold mb-1">$60.00</div>
                  <div className="text-[10px] text-gray-500">Completed 3 hours @ $20/hr</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-[10px] text-gray-500 mb-1">Payment date</div>
                  <div className="text-xs font-medium mb-3">Mon, Apr 10, 2025</div>
                  
                  <div className="text-[10px] text-gray-500 mb-1">Transferred to</div>
                  <div className="text-xs font-medium mb-3">DBS Bank ···· 1234</div>
                  
                  <div className="text-[10px] text-gray-500 mb-1">Rate</div>
                  <div className="text-xs font-medium">$20/hr × 3 hours</div>
                </div>
                
                <button className="w-full bg-gray-100 text-gray-700 text-xs font-medium py-2 rounded-lg mb-4">
                  Back
                </button>
                
                <div className="text-center text-[10px] text-gray-500">
                  Need help with your payment?
                </div>
              </div>
            </PhoneMockup>
          </StepCard>
        </div>
        
        <div className="mt-24 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90"></div>
          <div className="relative z-10 p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0">
                <h3 className="text-4xl font-bold mb-4 text-white">Sign up and get shifts</h3>
                <p className="text-white/80 max-w-xl text-lg">Join Worksta for free and earn more money now.</p>
              </div>
              <Link href="/signup">
                <Button className="bg-black hover:bg-gray-900 text-white text-lg px-8 py-4 rounded-full shadow-xl transition-transform hover:scale-105">
                  GET STARTED <ChevronRight className="h-5 w-5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
  phoneImage?: string;
  children: React.ReactNode;
  bgColor?: string;
}

const StepCard = ({ stepNumber, title, description, phoneImage, children, bgColor = "bg-gray-50" }: StepCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + parseInt(stepNumber) * 200);
    
    return () => clearTimeout(timer);
  }, [stepNumber]);
  
  return (
    <div className={`flex flex-col items-center ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'} transition-all duration-700`}>
      <div className="text-center mb-6">
        <div className="mb-16 relative inline-block">
          {children}
          <div className={`absolute -bottom-8 -left-4 ${bgColor} w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white text-gray-900`}>
            {stepNumber}
          </div>
        </div>
        <h3 className="text-2xl font-extrabold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
      </div>
    </div>
  );
};

interface PhoneMockupProps {
  children: React.ReactNode;
}

const PhoneMockup = ({ children }: PhoneMockupProps) => {
  return (
    <div className="relative w-[240px] h-[480px] bg-gray-900 rounded-[32px] p-3 shadow-xl transform transition-all duration-500 hover:rotate-1 hover:-translate-y-2">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>
      <div className="w-full h-full bg-gray-100 rounded-[24px] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default HowItWorks;
