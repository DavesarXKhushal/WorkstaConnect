import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CheckCircle2, DollarSign, Clock } from "lucide-react";
import { 
  Calendar, 
  Smartphone, 
  Utensils, 
  Users, 
  Award, 
  Wallet,
  MapPin,
  Star,
  Sparkles
} from "lucide-react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'flexibility' | 'earnings' | 'growth'>('flexibility');
  
  // Animation on mount
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);
  
  // Stats for Staff
  const statistics = [
    { value: "S$25+", label: "Average hourly rate" },
    { value: "1,500+", label: "Active workers" },
    { value: "10,000+", label: "Shifts completed" },
  ];
  
  // Success stories
  const testimonials = [
    {
      name: "Sarah L.",
      role: "Server",
      quote: "I've increased my monthly income by 35% working part-time shifts at top restaurants in Singapore.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5
    },
    {
      name: "Michael T.",
      role: "Bartender",
      quote: "Worksta lets me choose my own hours while completing my studies. I've been hired full-time at one of the venues I worked at through the platform.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5
    }
  ];
  
  // Tab content
  const tabContent = {
    flexibility: {
      title: "Work on your terms",
      description: "Choose when, where, and how much you work. No minimum hours or fixed schedules. Just flexibility that fits your lifestyle.",
      features: [
        {
          icon: <Calendar className="text-primary" size={28} />,
          title: "Flexible Schedule",
          description: "Work as much or as little as you want. Pick up only the gigs you like. It's totally up to you."
        },
        {
          icon: <Smartphone className="text-primary" size={28} />,
          title: "Mobile Convenience",
          description: "We bring the gigs to you. Review offers, track earnings, manage your schedule all in your app."
        },
        {
          icon: <MapPin className="text-primary" size={28} />,
          title: "Work Nearby",
          description: "Find shifts at venues close to your location. Cut commute times and work where it's convenient for you."
        }
      ],
      image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    earnings: {
      title: "Maximize your income",
      description: "Competitive hourly rates, weekly payments, and transparent earnings. No hidden fees or deductions.",
      features: [
        {
          icon: <DollarSign className="text-primary" size={28} />,
          title: "Competitive Rates",
          description: "Earn above-market wages for your skills and experience. Top venues value quality staff and pay accordingly."
        },
        {
          icon: <Wallet className="text-primary" size={28} />,
          title: "Weekly Payments",
          description: "Get paid weekly directly to your bank account or debit card. No long waits for your hard-earned money."
        },
        {
          icon: <Clock className="text-primary" size={28} />,
          title: "Peak Hour Bonuses",
          description: "Earn premium rates for working during high-demand periods like weekends, holidays, or special events."
        }
      ],
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    growth: {
      title: "Grow your career",
      description: "Expand your skills, build your professional network, and develop your F&B career through diverse experiences.",
      features: [
        {
          icon: <Utensils className="text-primary" size={28} />,
          title: "Diverse Experience",
          description: "Gain experience across different cuisines, venues, and service styles to broaden your skill set and versatility."
        },
        {
          icon: <Users className="text-primary" size={28} />,
          title: "Industry Network",
          description: "Meet and connect with people in the industry who can help you develop and expand your career opportunities."
        },
        {
          icon: <Award className="text-primary" size={28} />,
          title: "Build Reputation",
          description: "Earn positive ratings and reviews from top venues that enhance your profile and employment prospects."
        }
      ],
      image: "https://images.unsplash.com/photo-1577301403297-6e9e2447d5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    }
  };
  
  const activeContent = tabContent[activeTab];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-20 w-72 h-72 bg-blue-50 rounded-full opacity-50 -z-10"></div>
      <div className="absolute -left-20 bottom-40 w-60 h-60 bg-yellow-50 rounded-full opacity-40 -z-10"></div>
      
      <div className="container relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <div className="bg-primary/10 rounded-full py-1 px-3 text-sm text-primary font-medium flex items-center justify-center">
              <Sparkles className="h-4 w-4 mr-2" /> For F&B Professionals
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why work with Worksta?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of F&B professionals finding flexible work at Singapore's top restaurants, bars, and hotels
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className={`max-w-3xl mx-auto mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-gray-100 p-1.5 rounded-xl flex justify-between">
            <button
              className={`flex-1 py-3 px-4 rounded-lg text-sm md:text-base font-medium transition-all ${activeTab === 'flexibility' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('flexibility')}
            >
              Flexibility
            </button>
            <button
              className={`flex-1 py-3 px-4 rounded-lg text-sm md:text-base font-medium transition-all ${activeTab === 'earnings' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('earnings')}
            >
              Earnings
            </button>
            <button
              className={`flex-1 py-3 px-4 rounded-lg text-sm md:text-base font-medium transition-all ${activeTab === 'growth' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('growth')}
            >
              Growth
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className={`mb-20 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">{activeContent.title}</h3>
              <p className="text-lg text-gray-600 mb-8">{activeContent.description}</p>
              
              <div className="space-y-6">
                {activeContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 transition-all hover:scale-110 duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/signup" className="mt-8 inline-block">
                <Button className="bg-primary text-gray-900 hover:bg-primary/90 mt-8 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Start Working Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              {/* Image Frame */}
              <div className="relative z-10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-primary rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white p-3 rounded-2xl shadow-xl">
                  <img 
                    src={activeContent.image} 
                    alt={activeContent.title}
                    className="w-full h-80 md:h-96 object-cover rounded-xl"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-primary/20 rounded-xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-primary/20 rounded-xl -z-10"></div>
              
              {/* Floating feature badge - only visible on desktop */}
              <div className="absolute bottom-8 -right-6 bg-white rounded-xl shadow-xl p-4 hidden lg:block transform transition-transform hover:scale-105 z-20">
                <div className="flex items-center space-x-2 text-primary font-medium">
                  <Clock className="h-4 w-4" />
                  <span>Book shifts instantly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success Stories */}
        <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-2xl font-bold mb-8 text-center">Success Stories</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 overflow-hidden rounded-full mr-4 border-2 border-white shadow-sm">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 md:p-16 rounded-2xl shadow-lg relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[length:20px_20px] opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)' }}></div>
            
            {/* Floating elements */}
            <div className="absolute top-12 left-12 w-12 h-12 rounded-full bg-white/10 animate-float"></div>
            <div className="absolute bottom-12 right-12 w-8 h-8 rounded-full bg-white/10 animate-float-delayed"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 text-white">Ready to start earning?</h3>
                  <p className="text-white/90 max-w-xl text-lg">
                    Join thousands of F&B professionals working flexible shifts at Singapore's top venues.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                    {['Free to join', 'No commitments', 'Weekly payments'].map((item, index) => (
                      <div key={index} className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-sm">
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href="/signup">
                  <Button className="bg-white hover:bg-gray-50 text-gray-900 text-lg px-8 py-6 rounded-xl shadow-xl transition-transform hover:scale-105 flex items-center">
                    Create Your Profile <ChevronRight className="h-5 w-5 ml-2" />
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

export default Features;
