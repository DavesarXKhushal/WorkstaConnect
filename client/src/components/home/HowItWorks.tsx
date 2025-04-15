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
        
        <div className="mt-24 rounded-2xl overflow-hidden relative group">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90 transition-all duration-1000 group-hover:scale-105 bg-[length:200%_200%] bg-left-top group-hover:bg-right-bottom animate-gradient"></div>
          
          {/* Floating shapes */}
          <div className="absolute top-10 left-[10%] w-16 h-16 rounded-full bg-white/10 animate-float-slow"></div>
          <div className="absolute bottom-10 right-[15%] w-12 h-12 rounded-full bg-white/10 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-[80%] w-8 h-8 rounded-full bg-white/10 animate-float transform -translate-y-1/2"></div>
          
          {/* Content */}
          <div className="relative z-10 p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 relative">
                <h3 className="text-4xl font-bold mb-4 text-white">Sign up and get shifts</h3>
                <p className="text-white/80 max-w-xl text-lg">Join Worksta for free and earn more money now.</p>
                
                {/* Decorative element */}
                <div className="absolute -left-8 -top-8 w-16 h-16 border-2 border-white/20 rounded-lg rotate-12 opacity-0 md:opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -right-4 -bottom-4 w-12 h-12 border-2 border-white/20 rounded-full opacity-0 md:opacity-60 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 blur-xl rounded-full transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Link href="/signup">
                  <Button className="bg-white hover:bg-gray-100 text-gray-900 text-lg px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] relative z-10 group">
                    <span className="relative z-10 flex items-center">
                      GET STARTED 
                      <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
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
    }, 100 + parseInt(stepNumber) * 300);
    
    return () => clearTimeout(timer);
  }, [stepNumber]);
  
  return (
    <div className={`flex flex-col items-center ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'} transition-all duration-1000`}>
      <div className="text-center mb-8 relative group">
        {/* Decorative circles */}
        <div className={`absolute -top-8 -right-8 w-20 h-20 ${bgColor} rounded-full opacity-20 transition-transform duration-700 group-hover:scale-110`}></div>
        <div className={`absolute -bottom-8 right-1/4 w-12 h-12 ${bgColor} rounded-full opacity-30 transition-transform duration-700 group-hover:scale-125`}></div>
        
        <div className="mb-16 relative inline-block transform perspective-1000 transition-all duration-700 hover:rotate-2">
          {children}
          
          {/* Numbered step indicator with animated border */}
          <div className={`absolute -bottom-8 -left-4 ${bgColor} w-16 h-16 rounded-full flex items-center justify-center font-bold text-3xl shadow-lg border-4 border-white text-gray-900 group-hover:border-primary/20 transition-colors duration-500 overflow-hidden`}>
            <div className="relative z-10">{stepNumber}</div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          {/* Animated lights/stars around phone when hovered */}
          <div className="absolute -right-4 -top-4 w-6 h-6 rounded-full bg-yellow-300/30 opacity-0 group-hover:opacity-100 animate-pulse-soft transition-opacity duration-500"></div>
          <div className="absolute left-1/2 -bottom-6 w-4 h-4 rounded-full bg-blue-300/30 opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-500 delay-300"></div>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-extrabold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 max-w-xs mx-auto group-hover:text-gray-700 transition-colors duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface PhoneMockupProps {
  children: React.ReactNode;
}

const PhoneMockup = ({ children }: PhoneMockupProps) => {
  return (
    <div className="relative w-[240px] h-[480px] bg-gray-900 rounded-[32px] p-3 shadow-xl transform transition-all duration-500 hover:rotate-1 hover:-translate-y-2 hover:shadow-2xl group">
      {/* Phone notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-20">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
      </div>
      
      {/* Phone power button */}
      <div className="absolute top-20 -right-1 h-8 w-1 bg-gray-800 rounded-l-lg"></div>
      
      {/* Phone volume buttons */}
      <div className="absolute top-40 -left-1 h-8 w-1 bg-gray-800 rounded-r-lg"></div>
      <div className="absolute top-52 -left-1 h-8 w-1 bg-gray-800 rounded-r-lg"></div>
      
      {/* Screen reflection overlay */}
      <div className="absolute inset-3 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] pointer-events-none z-10"></div>
      
      {/* Screen */}
      <div className="w-full h-full bg-gray-100 rounded-[24px] overflow-hidden relative">
        {/* Status bar */}
        <div className="absolute top-0 left-0 w-full h-6 bg-white/90 flex justify-between items-center px-3 z-10">
          <div className="text-[8px] font-medium">9:41</div>
          <div className="flex items-center gap-1">
            <div className="text-[8px]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
                <path d="M13 4.06189C12.6724 4.02104 12.3395 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 11.6605 19.979 11.3276 19.9381 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 2V6M15 6H11M15 6L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-[8px]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07602C4.70189 4.13417 4.55299 4.22345 4.42573 4.33855C4.29848 4.45365 4.19537 4.59202 4.12232 4.74503C4.04927 4.89803 4.00784 5.06323 4 5.23C4 5.27 4 5.31 4 5.35V20.98C4 21.1307 4.0336 21.2799 4.09834 21.4173C4.16309 21.5547 4.25781 21.6775 4.37542 21.7775C4.49303 21.8775 4.63054 21.9527 4.77958 21.9982C4.92861 22.0437 5.08655 22.0585 5.24 22.0417C5.33262 22.0342 5.42442 22.0201 5.515 22C5.636 21.9711 5.75049 21.92 5.85 21.8467C6.055 21.7267 6.266 21.6033 6.46 21.47L11.997 16L17.585 21.49C17.779 21.6233 17.988 21.75 18.208 21.87C18.3173 21.9366 18.4393 21.9799 18.565 21.9967C18.631 22.0075 18.698 22.013 18.765 22.0133C18.9072 22.0141 19.0482 21.9872 19.18 21.9333C19.3882 21.8473 19.5678 21.7058 19.7005 21.5246C19.8331 21.3435 19.9138 21.1294 19.934 20.905C19.9444 20.8155 19.9497 20.7256 19.95 20.6358V5.23997C19.935 4.99723 19.8439 4.76949 19.6914 4.59048C19.5388 4.41148 19.3332 4.2912 19.105 4.24997C18.9753 4.21447 18.8417 4.2004 18.72 4.21C18.72 3.99997 18.72 3.99997 18.72 3.99997Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex items-center h-3 gap-[1px]">
              <div className="h-1 w-[2px] bg-gray-800 rounded-full"></div>
              <div className="h-2 w-[2px] bg-gray-800 rounded-full"></div>
              <div className="h-3 w-[2px] bg-gray-800 rounded-full"></div>
              <div className="h-2 w-[2px] bg-gray-800 rounded-full"></div>
            </div>
            <div className="text-[8px]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18C4 18.7956 4.31607 19.5587 4.87868 20.1213C5.44129 20.6839 6.20435 21 7 21H17C17.7956 21 18.5587 20.6839 19.1213 20.1213C19.6839 19.5587 20 18.7956 20 18V15H4V18Z" fill="currentColor"/>
                <path d="M7.99999 8H16L18.59 10.59C18.7785 10.7785 18.9854 10.9191 19.213 11.0042C19.4406 11.0892 19.6834 11.1165 19.9228 11.0837C20.1622 11.0509 20.3914 10.9589 20.5932 10.8145C20.795 10.6701 20.9642 10.4773 21.0865 10.2519C21.2087 10.0265 21.2809 9.77488 21.2974 9.51539C21.314 9.25591 21.2745 8.9964 21.1819 8.75526C21.0892 8.51412 20.9459 8.29696 20.7626 8.1209C20.5792 7.94485 20.3608 7.81481 20.12 7.74L16.12 6.25C15.9302 6.19156 15.7313 6.1719 15.5338 6.19208C15.3362 6.21226 15.144 6.27189 14.97 6.37C14.6201 6.56063 14.3541 6.87539 14.22 7.25H9.78C9.66234 6.9329 9.4402 6.66233 9.15213 6.47579C8.86406 6.28926 8.52316 6.19589 8.17499 6.21C7.82683 6.22411 7.49468 6.34497 7.22601 6.55661C6.95733 6.76825 6.76622 7.0591 6.68248 7.3826C6.59874 7.7061 6.62723 8.046 6.76351 8.35088C6.89979 8.65577 7.13657 8.91058 7.43991 9.07696C7.74326 9.24334 8.09766 9.30974 8.4458 9.26475C8.79394 9.21975 9.11734 9.06633 9.36999 8.83L9.79999 8H14.22L14.65 8.83C14.8209 8.99392 15.0285 9.11608 15.2574 9.18851C15.4862 9.26095 15.7301 9.28197 15.97 9.25L18 8.91L15.75 7.83C15.5 7.68 15.81 7.36 15.81 7.36L16.12 6.25L20.12 7.74L17.55 10.3C17.3955 10.4546 17.2059 10.5623 16.9964 10.6128C16.7868 10.6632 16.5661 10.6544 16.3613 10.5873C16.1565 10.5203 15.9756 10.3974 15.8379 10.2312C15.7002 10.0651 15.6109 9.86241 15.58 9.65L8.41999 9.64C8.30998 9.75944 8.17266 9.85152 8.01991 9.90908C7.86716 9.96664 7.70301 9.98814 7.53999 9.97199C7.37698 9.95584 7.21985 9.90242 7.08119 9.8161C6.94254 9.72977 6.8261 9.61302 6.74 9.47486C6.6539 9.33669 6.60051 9.18094 6.58399 9.01984C6.56747 8.85874 6.58829 8.6956 6.64496 8.5437C6.70164 8.39179 6.79258 8.25502 6.90997 8.14486C7.02736 8.03471 7.16789 7.95414 7.31999 7.91C7.56958 7.843 7.83364 7.85764 8.07419 7.95141C8.31475 8.04518 8.51808 8.21267 8.65 8.43L8.65999 8.45L9.58999 8.71L9.79999 8H9.64999L9.58999 8.71C9.58999 8.71 9.88999 9.34 9.64999 9.42L8.41999 9.64L8.32999 9.39C8.32999 9.39 7.99999 9.03 7.99999 8Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default HowItWorks;
