import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar, 
  ChefHat, 
  CheckCircle2, 
  Smartphone, 
  Search, 
  ArrowRight, 
  Heart,
  CreditCard,
  Briefcase,
  BookOpen,
  Sparkles,
  Award,
  Star
} from "lucide-react";

// Feature component for showing step features
const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex items-start animate-fadeIn">
      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300 hover:scale-110">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Phone mockup component
interface PhoneMockupProps {
  children: React.ReactNode;
  bgColor?: string;
}

const PhoneMockup = ({ children, bgColor = "bg-blue-50" }: PhoneMockupProps) => {
  return (
    <div className="relative w-[240px] h-[480px] bg-gray-900 rounded-[32px] p-3 shadow-xl transform transition-all duration-500 hover:rotate-1 hover:-translate-y-2 hover:shadow-2xl group mx-auto">
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
      
      {/* Decorative background glow */}
      <div className={`absolute -inset-4 ${bgColor} rounded-[40px] opacity-20 -z-10 transition-all duration-500 group-hover:opacity-40 group-hover:blur-lg`}></div>
      
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
                <path d="M20 4C20 3.20435 19.6839 2.44129 19.1213 1.87868C18.5587 1.31607 17.7956 1 17 1H7C6.20435 1 5.44129 1.31607 4.87868 1.87868C4.31607 2.44129 4 3.20435 4 4V15H20V4Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
        
        {children}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation on mount
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Auto-rotate through steps
    const interval = setInterval(() => {
      setActiveStep(prev => prev < 3 ? prev + 1 : 1);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Steps data
  const steps = [
    {
      number: "1",
      title: "Find businesses you like",
      description: "Browse premium F&B businesses in Singapore based on your preferred locations, roles, and working hours. Filter and search for the perfect match.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      icon: <Search className="h-5 w-5 text-blue-500" />
    },
    {
      number: "2",
      title: "Book shifts you want",
      description: "View shift details, requirements, and hourly rates. Pick the days that fit your schedule and book shifts with just a tap.",
      color: "from-purple-500 to-fuchsia-500",
      bgColor: "bg-purple-50",
      icon: <Calendar className="h-5 w-5 text-purple-500" />
    },
    {
      number: "3",
      title: "Work and get paid weekly",
      description: "Show up, work your shift, and receive payment directly to your bank account every Monday. Track earnings and manage your schedule in one place.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-green-50",
      icon: <DollarSign className="h-5 w-5 text-green-500" />
    }
  ];
  
  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-20 w-72 h-72 bg-blue-50 rounded-full opacity-50 -z-10"></div>
      <div className="absolute -left-20 bottom-40 w-60 h-60 bg-purple-50 rounded-full opacity-40 -z-10"></div>
      <div className="absolute left-1/3 top-1/4 w-12 h-12 bg-green-50 rounded-full opacity-30 -z-10"></div>
      
      <div className="container relative z-10">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <div className="bg-primary/10 rounded-full py-1 px-3 text-sm text-primary font-medium flex items-center justify-center">
              <CheckCircle2 className="h-4 w-4 mr-2" /> Simple Process
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How it works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to start working flexible shifts at Singapore's top F&B venues
          </p>
        </div>
        
        {/* Step navigation */}
        <div className={`flex justify-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <div className="flex items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <button 
                  className={`relative flex flex-col items-center group ${activeStep === index + 1 ? 'scale-110' : ''}`}
                  onClick={() => setActiveStep(index + 1)}
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                    activeStep === index + 1 
                      ? `bg-gradient-to-r ${step.color} text-white shadow-xl` 
                      : 'bg-white text-gray-400 border border-gray-200'
                  }`}>
                    {step.number}
                    
                    {/* Pulse effect for active step */}
                    {activeStep === index + 1 && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 to-primary/30 animate-ping opacity-75"></div>
                    )}
                  </div>
                  
                  <span className={`mt-2 text-xs font-medium md:text-sm transition-colors duration-300 ${
                    activeStep === index + 1 ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </button>
                
                {index < steps.length - 1 && (
                  <div className={`w-12 md:w-24 h-0.5 mx-2 transition-colors duration-300 ${
                    index < activeStep - 1 ? 'bg-primary' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Step content */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <div>
            <div className="mb-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${steps[activeStep-1].color} text-white mb-4`}>
                {steps[activeStep-1].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">{steps[activeStep-1].title}</h3>
              <p className="text-gray-600">{steps[activeStep-1].description}</p>
            </div>
            
            {/* Step-specific features */}
            <div className="space-y-4">
              {activeStep === 1 && (
                <>
                  <Feature 
                    icon={<MapPin className="h-5 w-5 text-blue-500" />}
                    title="Location-based matching"
                    description="Find shifts close to your home or preferred areas in Singapore."
                  />
                  <Feature 
                    icon={<Briefcase className="h-5 w-5 text-blue-500" />}
                    title="Role filtering"
                    description="Search for specific roles that match your skills and experience."
                  />
                  <Feature 
                    icon={<Award className="h-5 w-5 text-blue-500" />}
                    title="Premium venues"
                    description="Work at Singapore's top-rated restaurants, bars, and hotels."
                  />
                </>
              )}
              
              {activeStep === 2 && (
                <>
                  <Feature 
                    icon={<Clock className="h-5 w-5 text-purple-500" />}
                    title="Flexible scheduling"
                    description="Choose shifts that fit around your existing commitments and lifestyle."
                  />
                  <Feature 
                    icon={<CheckCircle2 className="h-5 w-5 text-purple-500" />}
                    title="Instant confirmation"
                    description="Receive immediate confirmation once your shift is booked."
                  />
                  <Feature 
                    icon={<BookOpen className="h-5 w-5 text-purple-500" />}
                    title="Detailed information"
                    description="View shift requirements, dress code, and transport options before booking."
                  />
                </>
              )}
              
              {activeStep === 3 && (
                <>
                  <Feature 
                    icon={<CreditCard className="h-5 w-5 text-green-500" />}
                    title="Secure payments"
                    description="Receive payments directly to your bank account every Monday."
                  />
                  <Feature 
                    icon={<Smartphone className="h-5 w-5 text-green-500" />}
                    title="Earnings tracker"
                    description="Monitor your earnings and upcoming payments in real-time."
                  />
                  <Feature 
                    icon={<ChefHat className="h-5 w-5 text-green-500" />}
                    title="Career growth"
                    description="Build your reputation and expand your professional network."
                  />
                </>
              )}
            </div>
            
            <div className="mt-8">
              <Link href="/signup">
                <Button className="bg-primary text-gray-900 hover:bg-primary/90 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {/* Phone frame with animated UI */}
            <div className={`transition-opacity duration-700 ${activeStep === 1 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              <PhoneMockup bgColor={steps[0].bgColor}>
                <div className="bg-white p-3 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs font-medium">Find more work</div>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200">
                      <span className="text-xs">⨯</span>
                    </div>
                  </div>
                  
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-2 flex items-center">
                      <Search className="h-3 w-3 text-gray-400" />
                    </div>
                    <input type="text" className="w-full bg-gray-50 rounded-lg text-xs py-2 pl-7 pr-3 border border-gray-100" placeholder="Search venues, roles..." />
                  </div>
                  
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-1 scrollbar-hide">
                    <div className="bg-blue-50 rounded-full px-2 py-1 text-[10px] text-blue-600 whitespace-nowrap flex-shrink-0">All venues</div>
                    <div className="bg-gray-50 rounded-full px-2 py-1 text-[10px] text-gray-600 whitespace-nowrap flex-shrink-0">Near me</div>
                    <div className="bg-gray-50 rounded-full px-2 py-1 text-[10px] text-gray-600 whitespace-nowrap flex-shrink-0">Highest paid</div>
                    <div className="bg-gray-50 rounded-full px-2 py-1 text-[10px] text-gray-600 whitespace-nowrap flex-shrink-0">Top rated</div>
                  </div>
                  
                  <h5 className="font-bold text-sm mb-3">Featured venues</h5>
                  
                  <div className="rounded-lg overflow-hidden mb-3 relative animate-fadeIn" style={{ animationDelay: '200ms' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Restaurant" 
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                      <Heart className="h-3 w-3 text-gray-400" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent h-10"></div>
                    <div className="absolute bottom-2 left-2 flex items-center">
                      <div className="bg-yellow-400 rounded-full px-1.5 py-0.5 text-[8px] text-white font-medium flex items-center">
                        <Star className="h-2 w-2 mr-0.5 fill-white" /> 4.9
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3 animate-fadeIn" style={{ animationDelay: '300ms' }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex-shrink-0">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg" alt="Harry's logo" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <h6 className="font-bold text-xs">Harry's @ Boat Quay</h6>
                      </div>
                      <div className="bg-blue-50 px-1.5 py-0.5 rounded text-[8px] text-blue-600">New shifts</div>
                    </div>
                    <div className="flex text-[10px] text-gray-500 gap-1 mb-2">
                      <MapPin className="h-2 w-2" />
                      <span>Boat Quay, Singapore • 2.2 km away</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-[10px]">
                        <span className="font-medium">Server</span> • <span className="font-bold text-green-600">$18-22/hr</span>
                      </div>
                      <div className="bg-gray-100 px-2 py-0.5 rounded-full text-[8px] font-medium">10 shifts</div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden mb-3 relative animate-fadeIn" style={{ animationDelay: '400ms' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Restaurant" 
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                      <Heart className="h-3 w-3 text-gray-400" />
                    </div>
                    <div className="absolute top-2 left-2">
                      <div className="bg-primary rounded-full px-1.5 py-0.5 text-[8px] text-gray-900 font-medium flex items-center">
                        <Sparkles className="h-2 w-2 mr-0.5" /> Featured
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4 animate-fadeIn" style={{ animationDelay: '500ms' }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex-shrink-0">
                          <img src="https://burntends.com.sg/wp-content/uploads/2015/02/burntendslogo.png" alt="Burnt Ends logo" className="w-full h-full object-cover rounded-full p-0.5" />
                        </div>
                        <h6 className="font-bold text-xs">Burnt Ends</h6>
                      </div>
                      <div className="text-[10px] text-primary font-medium">VIEW</div>
                    </div>
                    <div className="flex text-[10px] text-gray-500 gap-1">
                      <span>Fine Dining • Michelin Starred</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-1 text-center pt-3 border-t border-gray-100">
                    <div className="text-[10px]">
                      <div className="font-bold text-primary">Explore</div>
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
            </div>
            
            <div className={`transition-opacity duration-700 ${activeStep === 2 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              <PhoneMockup bgColor={steps[1].bgColor}>
                <div className="bg-white p-3 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 mr-2">
                        <ArrowRight className="h-3 w-3 -rotate-180" />
                      </div>
                      <div className="text-xs font-medium">Book Shift</div>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200">
                      <span className="text-xs">⨯</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 animate-fadeIn" style={{ animationDelay: '100ms' }}>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                          alt="Harry's" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1 mb-0.5">
                          <h5 className="font-bold text-sm">Harry's @ Boat Quay</h5>
                          <div className="bg-yellow-400 rounded-full px-1 py-0.5 text-[8px] text-white font-medium flex items-center">
                            <Star className="h-2 w-2 mr-0.5 fill-white" /> 4.9
                          </div>
                        </div>
                        <div className="text-[10px] text-gray-500 flex items-center">
                          <MapPin className="h-2 w-2 mr-0.5" /> Boat Quay, Singapore
                        </div>
                        <div className="text-[10px] text-gray-500 flex items-center mt-0.5">
                          <Briefcase className="h-2 w-2 mr-0.5" /> Server • <span className="text-green-600 font-medium">$20/hr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4 animate-fadeIn" style={{ animationDelay: '200ms' }}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-medium">Available shifts</div>
                      <div className="text-[10px] text-primary">View all</div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <div className="bg-primary/10 p-2 rounded-lg border border-primary/20 relative">
                        <div className="absolute -right-1 -top-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-[10px] font-medium">Friday, Apr 19</div>
                            <div className="text-[10px] flex items-center">
                              <Clock className="h-2 w-2 mr-0.5" /> 6:00 PM - 10:00 PM
                            </div>
                          </div>
                          <div className="text-[10px] font-medium text-green-600">$22/hr</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-[10px] font-medium">Saturday, Apr 20</div>
                            <div className="text-[10px] flex items-center">
                              <Clock className="h-2 w-2 mr-0.5" /> 5:00 PM - 11:00 PM
                            </div>
                          </div>
                          <div className="text-[10px] font-medium">$20/hr</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-[10px] font-medium">Sunday, Apr 21</div>
                            <div className="text-[10px] flex items-center">
                              <Clock className="h-2 w-2 mr-0.5" /> 12:00 PM - 6:00 PM
                            </div>
                          </div>
                          <div className="text-[10px] font-medium">$22/hr</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4 animate-fadeIn" style={{ animationDelay: '300ms' }}>
                    <div className="flex justify-between mb-2">
                      <div className="text-xs font-medium">Shift requirements</div>
                      <div className="text-[10px] text-green-600 flex items-center">
                        <CheckCircle2 className="h-2 w-2 mr-0.5" /> All requirements met
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-2 rounded-lg space-y-1.5">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <CheckCircle2 className="h-2 w-2 text-green-600" />
                        </div>
                        <div className="text-[10px]">Black pants, white shirt</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <CheckCircle2 className="h-2 w-2 text-green-600" />
                        </div>
                        <div className="text-[10px]">Basic bartending/server experience</div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <CheckCircle2 className="h-2 w-2 text-green-600" />
                        </div>
                        <div className="text-[10px]">Transport allowance provided</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg mb-4 animate-fadeIn" style={{ animationDelay: '400ms' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-3 w-3 text-primary" />
                      <div className="text-[11px] font-medium">Booking summary - Friday, Apr 19</div>
                    </div>
                    
                    <div className="flex justify-between items-center text-[10px] mb-1">
                      <div className="text-gray-500">Shift duration</div>
                      <div>4 hours (6:00 PM - 10:00 PM)</div>
                    </div>
                    
                    <div className="flex justify-between items-center text-[10px] mb-1">
                      <div className="text-gray-500">Hourly rate</div>
                      <div>$22.00/hour</div>
                    </div>
                    
                    <div className="flex justify-between items-center text-[10px] font-medium pt-1 border-t border-gray-200 mt-1">
                      <div>Estimated earnings</div>
                      <div className="text-green-600">$88.00</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 animate-fadeIn" style={{ animationDelay: '500ms' }}>
                    <button className="flex-1 bg-gray-100 text-gray-700 text-xs font-medium py-2.5 rounded-lg">
                      Save for later
                    </button>
                    <button className="flex-1 bg-primary text-gray-900 text-xs font-medium py-2.5 rounded-lg flex items-center justify-center">
                      Book shift <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </PhoneMockup>
            </div>
            
            <div className={`transition-opacity duration-700 ${activeStep === 3 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              <PhoneMockup bgColor={steps[2].bgColor}>
                <div className="bg-white p-3 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 mr-2">
                        <ArrowRight className="h-3 w-3 -rotate-180" />
                      </div>
                      <div className="text-xs font-medium">Payment Details</div>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200">
                      <span className="text-xs">⨯</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6 animate-fadeIn" style={{ animationDelay: '100ms' }}>
                    <div className="inline-block p-1 bg-green-50 rounded-full mb-3">
                      <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                      </div>
                    </div>
                    <div className="text-sm font-medium mb-1">Payment processed!</div>
                    <div className="text-2xl font-bold mb-1">$88.00</div>
                    <div className="text-[10px] text-gray-500">Harry's @ Boat Quay • Server • Apr 19</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4 animate-fadeIn" style={{ animationDelay: '200ms' }}>
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-xs font-medium">Payment details</div>
                      <div className="bg-blue-50 px-2 py-0.5 rounded text-[10px] text-blue-600">Success</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-y-3 text-[10px]">
                      <div className="text-gray-500">Date & Time</div>
                      <div className="text-right">Apr 22, 2025 • 9:32 AM</div>
                      
                      <div className="text-gray-500">Payment method</div>
                      <div className="text-right flex items-center justify-end">
                        <CreditCard className="h-2.5 w-2.5 mr-1" /> Bank transfer
                      </div>
                      
                      <div className="text-gray-500">Account</div>
                      <div className="text-right">DBS Bank •••• 1234</div>
                      
                      <div className="text-gray-500">Reference</div>
                      <div className="text-right">WRK-982365</div>
                    </div>
                  </div>
                  
                  <div className="mb-4 animate-fadeIn" style={{ animationDelay: '300ms' }}>
                    <div className="text-xs font-medium mb-2">Earnings breakdown</div>
                    
                    <div className="border border-gray-100 rounded-lg overflow-hidden">
                      <div className="p-2.5 flex justify-between items-center text-[10px]">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 text-gray-400 mr-1.5" />
                          <span>4 hours @ $22.00/hr</span>
                        </div>
                        <div>$88.00</div>
                      </div>
                      
                      <div className="p-2.5 flex justify-between items-center text-[10px] bg-gray-50 border-t border-gray-100">
                        <div className="flex items-center">
                          <DollarSign className="h-3 w-3 text-gray-400 mr-1.5" />
                          <span>Platform fee</span>
                        </div>
                        <div>$0.00</div>
                      </div>
                      
                      <div className="p-2.5 flex justify-between items-center text-[10px] font-medium border-t border-gray-100">
                        <div>Total earned</div>
                        <div className="text-green-600">$88.00</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="animate-fadeIn" style={{ animationDelay: '400ms' }}>
                    <div className="text-xs font-medium mb-2">Your next shifts</div>
                    
                    <div className="border border-gray-100 rounded-lg p-2.5 mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full overflow-hidden mr-1.5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg" alt="Harry's" className="w-full h-full object-cover" />
                          </div>
                          <div className="text-[10px] font-medium">Harry's @ Boat Quay</div>
                        </div>
                        <div className="text-[9px] text-primary">View details</div>
                      </div>
                      
                      <div className="text-[9px] text-gray-500 flex items-center mb-1">
                        <Calendar className="h-2 w-2 mr-0.5" /> Saturday, Apr 20 • 5:00 PM - 11:00 PM
                      </div>
                      
                      <div className="flex items-center justify-between text-[9px]">
                        <div className="flex items-center">
                          <Briefcase className="h-2 w-2 mr-0.5" /> Server
                        </div>
                        <div className="text-green-600 font-medium">$120.00 estimated</div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-primary text-gray-900 text-xs font-medium py-2.5 rounded-lg flex items-center justify-center">
                      Find more shifts <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </PhoneMockup>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-primary/20 rounded-xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-primary/20 rounded-xl -z-10"></div>
            
            {/* Floating badges */}
            <div className="absolute top-10 -right-2 bg-white rounded-xl shadow-lg p-3 hidden md:flex items-center transform rotate-3 z-10 animate-float">
              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
              <div className="text-sm font-medium">Easy 3-step process</div>
            </div>
            
            <div className="absolute -bottom-2 -left-2 bg-white rounded-xl shadow-lg p-3 hidden md:flex items-center transform -rotate-2 z-10 animate-float-delayed">
              <div className="flex items-center bg-green-100 px-2 py-1 rounded-lg text-xs text-green-700 font-medium mr-2">
                <DollarSign className="h-3 w-3 mr-1" /> $25/hr
              </div>
              <div className="text-sm font-medium">Premium rates</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
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
                  <p className="text-white/80 max-w-xl text-lg">Join Worksta for free and start earning at Singapore's top F&B venues.</p>
                  
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
      </div>
    </section>
  );
};

export default HowItWorks;