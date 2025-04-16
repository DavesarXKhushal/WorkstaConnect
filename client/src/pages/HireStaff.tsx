import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Calendar, 
  Ticket, 
  ChevronRight,
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  DollarSign,
  Award,
  ChefHat,
  Utensils,
  Building,
  BadgeCheck,
  Badge
} from "lucide-react";

const HireStaff = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);
  
  const partners = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg",
      name: "Harry's Singapore"
    },
    {
      logo: "https://burntends.com.sg/wp-content/uploads/2015/02/burntendslogo.png",
      name: "Burnt Ends"
    },
    {
      logo: "https://seeklogo.com/images/R/raffles-hotel-singapore-logo-A8D12E58BD-seeklogo.com.png",
      name: "Raffles Hotel"
    },
    {
      logo: "https://assets.website-files.com/61cd08286c9cafd5eb4ca1f4/61cfe51e9f11fb2d8e342f55_Atlas%20logo.png",
      name: "Atlas Bar"
    },
    {
      logo: "https://www.culinaatyork.com.sg/images/logo-black.png",
      name: "Culina"
    }
  ];
  
  const benefits = [
    {
      icon: <Users className="h-12 w-12 text-primary p-2 bg-primary/10 rounded-lg" />,
      title: "Qualified Staff On-Demand",
      description: "Access a pool of pre-vetted F&B professionals ready to fill your staffing gaps."
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-500 p-2 bg-blue-100 rounded-lg" />,
      title: "Fast Response Times",
      description: "Get shifts filled within hours, not days. Our platform connects you with available workers instantly."
    },
    {
      icon: <Calendar className="h-12 w-12 text-purple-500 p-2 bg-purple-100 rounded-lg" />,
      title: "Flexible Scheduling",
      description: "Post shifts for any time period - from same-day emergency cover to planned staffing needs."
    },
    {
      icon: <Ticket className="h-12 w-12 text-green-500 p-2 bg-green-100 rounded-lg" />,
      title: "Simple Pricing",
      description: "Pay only for the hours worked, with no long-term contracts or hidden fees."
    }
  ];

  const steps = [
    {
      title: "Create your business profile",
      description: "Sign up, verify your business, and set up your company profile in minutes.",
      icon: <Building className="h-6 w-6 text-primary" />
    },
    {
      title: "Post available shifts",
      description: "Post shifts with details on roles, skills needed, and hourly rates.",
      icon: <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "Review qualified candidates",
      description: "Browse profiles, ratings, and experience of interested workers.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Confirm and manage bookings",
      description: "Approve staff and welcome them to your team. Manage everything in one place.",
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />
    }
  ];
  
  const testimonials = [
    {
      quote: "Worksta has been a game-changer for our restaurant. We've been able to fill shifts within hours, even during peak holiday seasons.",
      author: "Sarah Chen",
      role: "Operations Manager, The Bistro Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      quote: "Finding reliable staff used to be our biggest challenge. Now with Worksta, we can scale our team up or down as needed.",
      author: "Michael Tan",
      role: "Owner, Loco Burger",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];
  
  const staffTypes = [
    {
      role: "Servers",
      icon: <Utensils className="h-12 w-12 text-primary" />,
      description: "Experienced front-of-house staff ready to provide excellent service"
    },
    {
      role: "Chefs & Cooks",
      icon: <ChefHat className="h-12 w-12 text-primary" />,
      description: "Culinary professionals skilled in various cuisines and kitchen environments"
    },
    {
      role: "Bartenders",
      icon: <Ticket className="h-12 w-12 text-primary" />,
      description: "Mixology experts who can elevate your bar service and customer experience"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-primary/5 rounded-full"></div>
          <div className="absolute left-1/4 -bottom-20 w-60 h-60 bg-blue-50 rounded-full"></div>
          <div className="absolute right-1/3 top-1/4 w-40 h-40 bg-yellow-50 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className={`lg:w-1/2 mb-10 lg:mb-0 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="inline-block mb-4">
                <div className="bg-primary/10 rounded-full py-1 px-3 text-sm text-primary font-medium flex items-center justify-center w-fit">
                  <Badge className="h-4 w-4 mr-2" /> For Singapore F&B Businesses
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Staff your business with <span className="text-primary">qualified F&B</span> professionals
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Say goodbye to staffing shortages. Worksta connects your Singapore F&B business with experienced, vetted staff on-demand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/signup">
                  <Button className="bg-primary text-gray-900 hover:bg-primary/90 py-6 px-8 text-lg font-medium rounded-xl group relative overflow-hidden shadow-md hover:shadow-lg">
                    <span className="relative z-10 flex items-center">
                      Post Your First Shift
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button variant="outline" className="py-6 px-8 text-lg font-medium rounded-xl border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-medium text-blue-600">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <strong>250+ businesses</strong> already using Worksta
                </div>
              </div>
            </div>
            
            <div className={`lg:w-1/2 lg:pl-12 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-30 group-hover:opacity-50 animate-pulse-soft"></div>
                <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Restaurant team" 
                    className="w-full rounded-2xl transform transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Decorative element: Floating card */}
                  <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 w-48">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium">Shift Filled!</span>
                    </div>
                    <div className="text-xs text-gray-600">You've successfully booked a server for Friday evening</div>
                  </div>
                  
                  {/* Decorative element: Stats card */}
                  <div className="absolute -top-5 -right-5 bg-white rounded-xl shadow-xl p-4 w-48">
                    <div className="text-xs text-gray-500 mb-1">Average time to fill</div>
                    <div className="text-xl font-bold text-gray-900 mb-1">2.5 hours</div>
                    <div className="text-xs text-green-600 flex items-center">
                      <ArrowRight className="h-3 w-3 mr-1" /> 75% faster than agencies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partner logos */}
          <div className={`mt-20 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Trusted by Singapore's top F&B businesses</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partners.map((partner, idx) => (
                <div key={idx} className="transition-all hover:scale-110 duration-300">
                  <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Staff Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find the right staff for your business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects you with qualified F&B professionals across multiple roles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {staffTypes.map((type, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{type.role}</h3>
                <p className="text-gray-600 text-center">{type.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/signup">
              <Button variant="outline" className="mt-6 group">
                View All Available Roles <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why businesses choose Worksta</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes staffing your F&B business simple, fast, and reliable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{benefit.icon}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Shifts filled within 24 hours</div>
            </div>
            <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-gray-600">Average worker rating</div>
            </div>
            <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">250+</div>
              <div className="text-gray-600">Businesses in Singapore</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting staff for your F&B business has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute hidden md:block top-10 left-[50%] w-full h-0.5 bg-gray-200"></div>
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center text-white font-bold mb-6 shadow-md group-hover:shadow-lg transition-shadow">
                    {step.icon}
                    <div className="absolute -right-1 -top-1 w-8 h-8 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <Link href="/signup">
              <Button className="bg-primary text-gray-900 hover:bg-primary/90 py-6 px-8 text-lg font-medium rounded-xl shadow-md hover:shadow-lg group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Hiring Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What our customers say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from F&B businesses across Singapore that use Worksta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex h-full">
                  <div className="w-1/3 h-full hidden md:block">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <CardContent className="pt-10 h-full flex flex-col">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-yellow-400 h-5 w-5" />
                        ))}
                      </div>
                      <blockquote className="text-xl font-medium mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className={`md:w-1/2 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <img 
                src="https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?auto=format&fit=crop&w=800&q=80" 
                alt="Staff management dashboard" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            <div className={`md:w-1/2 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h2 className="text-3xl font-bold mb-6">Powerful tools for seamless staff management</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform provides everything you need to manage your temporary staff efficiently, all in one place.
              </p>
              
              <div className="space-y-4">
                {[
                  "Real-time worker tracking and shift management",
                  "Instant messaging with staff for seamless coordination",
                  "Automated timesheets and payment processing",
                  "Performance ratings and feedback system",
                  "Comprehensive reporting and analytics dashboard"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/faq">
                  <Button variant="outline" className="group">
                    Learn About All Features <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90 animate-gradient bg-[length:400%_400%]"></div>
        <div className="absolute inset-0 overflow-hidden bg-[length:20px_20px] opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)' }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-[10%] w-20 h-20 rounded-full bg-white/10 animate-float"></div>
        <div className="absolute bottom-20 right-[15%] w-16 h-16 rounded-full bg-white/10 animate-float-delayed"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to solve your staffing challenges?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Join hundreds of Singapore's top F&B venues using Worksta to build reliable, flexible teams.
            </p>
            <Link href="/signup">
              <Button className="bg-white hover:bg-gray-50 text-gray-900 text-xl px-10 py-6 rounded-full shadow-xl transition-transform hover:scale-105 hover:shadow-2xl group">
                Create Business Account <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Trust badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <Shield className="h-8 w-8 mb-2 text-gray-400 mx-auto" />
              <p className="text-sm text-gray-500">Secure Payments</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="h-8 w-8 mb-2 text-gray-400 mx-auto" />
              <p className="text-sm text-gray-500">Verified Staff</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mb-2 text-gray-400 mx-auto" />
              <p className="text-sm text-gray-500">Quality Guaranteed</p>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 mb-2 text-gray-400 mx-auto" />
              <p className="text-sm text-gray-500">No Hidden Fees</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireStaff;
