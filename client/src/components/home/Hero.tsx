import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, Clock, DollarSign, Star } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animate elements in after component mount
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  
  return (
    <section className="bg-white pt-12 pb-20 md:py-24 overflow-hidden relative">
      {/* Background shapes/circles for animation */}
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-50 rounded-full opacity-70"></div>
      <div className="absolute right-1/4 bottom-1/4 w-40 h-40 bg-yellow-50 rounded-full opacity-50"></div>
      <div className="absolute left-1/3 -bottom-24 w-80 h-80 bg-green-50 rounded-full opacity-40"></div>
      
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className={`lg:w-1/2 mb-16 lg:mb-0 pr-0 lg:pr-10 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h1 className="font-bold text-gray-900 leading-[1.1] mb-8">
              Find flexible shifts in<br />
              <span className="text-primary">Singapore's top</span> F&B venues
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl">
              Worksta is the easiest way to pick up shifts at restaurants, bars and cafes across Singapore. Work at nearby venues in your own time and get paid weekly.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="flex gap-3 items-start group">
                <div className="bg-blue-100 rounded-full p-2 mt-1 transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-200">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Flexible schedule</h3>
                  <p className="text-gray-600">Work when you want, where you want</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start group">
                <div className="bg-blue-100 rounded-full p-2 mt-1 transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-200">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Weekly payments</h3>
                  <p className="text-gray-600">Get paid every Monday</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button className="btn-primary w-full sm:w-auto text-lg px-8 py-4 animate-pulse-soft hover:scale-105 transition-transform">
                  Get Started
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline" className="btn-outline w-full sm:w-auto text-lg hover:translate-x-1 transition-transform">
                  Learn More <ChevronRight className="h-5 w-5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image and Payment Section */}
          <div className={`lg:w-1/2 relative transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Barista at café" 
                className="rounded-xl shadow-xl w-full object-cover h-[550px] transition-transform duration-700 hover:scale-[1.02]" 
              />
              
              {/* Animated Circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center animate-pulse-soft">
                <div className="text-primary font-bold">
                  F&B
                </div>
              </div>
              
              <div className="absolute bottom-20 -right-4 w-16 h-16 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center animate-pulse-soft">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
              
              {/* Floating Payment Card */}
              <div className="absolute -bottom-10 -left-10 md:left-auto md:-right-10 z-10 transform transition-transform duration-700 hover:translate-y-2">
                <PaymentCard />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute top-10 -left-10 md:left-auto md:-right-10 z-10 transform transition-transform duration-700 hover:-translate-y-2">
                <StatsCard />
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
    <div className="bg-white rounded-xl p-5 w-[260px] shadow-xl border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 mr-3 flex items-center justify-center animate-pulse-soft">
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
        <div className="text-sm font-bold text-gray-800">Weekend shift at Harry's</div>
      </div>
      
      <div className="mb-1">
        <div className="text-xs text-gray-500">Rate</div>
        <div className="text-sm font-bold text-gray-800">S$18/hr × 5 hours</div>
      </div>
      
      <div className="text-2xl font-bold text-gray-900 mt-2">S$90.00</div>
    </div>
  );
};

const StatsCard = () => {
  return (
    <div className="bg-white rounded-xl p-5 w-[220px] shadow-xl border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-sm text-gray-700">This Week</span>
        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+12%</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="text-xs text-gray-500 mb-1">Hours Worked</div>
          <div className="text-xl font-bold text-gray-800">18 hrs</div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500 mb-1">Scheduled Shifts</div>
          <div className="text-xl font-bold text-gray-800">5 shifts</div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500 mb-1">Earnings</div>
          <div className="text-xl font-bold text-green-600">S$324.00</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
