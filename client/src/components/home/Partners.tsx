import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { Star, CheckCircle2, MapPin, Users, Award } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  description: string;
  logoUrl: string;
  imageUrl: string;
  quote?: string;
  author?: string;
  position?: string;
  stats?: {
    rating?: number;
    staffCount?: number;
    location?: string;
    founded?: string;
  };
}

const Partners = () => {
  const [activeLogo, setActiveLogo] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation on mount
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);
  
  // Singapore F&B business partners with enhanced data
  const mockPartners = [
    {
      id: 1,
      name: "Harry's Singapore",
      description: "One of Singapore's most established bar and dining chains with over 20 outlets",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg",
      imageUrl: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      quote: "Worksta has transformed how we handle staffing during peak seasons. We've reduced our hiring time by 70%.",
      author: "James Wong",
      position: "Operations Director, Harry's Singapore",
      stats: {
        rating: 4.8,
        staffCount: 145,
        location: "20 outlets across Singapore",
        founded: "1992"
      }
    },
    {
      id: 2,
      name: "Burnt Ends",
      description: "One-Michelin-starred modern Australian barbecue restaurant",
      logoUrl: "https://burntends.com.sg/wp-content/uploads/2015/02/burntendslogo.png",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      quote: "Finding qualified kitchen staff used to be our biggest hurdle. Worksta connects us with pre-vetted culinary talent instantly.",
      author: "Dave Pynt",
      position: "Executive Chef, Burnt Ends",
      stats: {
        rating: 4.9,
        staffCount: 35,
        location: "Dempsey Hill",
        founded: "2013"
      }
    },
    {
      id: 3,
      name: "Raffles Hotel",
      description: "Iconic colonial-style luxury hotel established in 1887",
      logoUrl: "https://seeklogo.com/images/R/raffles-hotel-singapore-logo-A8D12E58BD-seeklogo.com.png",
      imageUrl: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      quote: "The quality of staff we've hired through Worksta has been consistently excellent. It's our go-to platform for F&B recruitment.",
      author: "Christian Westbeld",
      position: "General Manager, Raffles Hotel",
      stats: {
        rating: 4.9,
        staffCount: 320,
        location: "Beach Road",
        founded: "1887"
      }
    },
    {
      id: 4,
      name: "Atlas Bar",
      description: "Art Deco-inspired grand lobby and bar featuring over 1,300 gins",
      logoUrl: "https://assets.website-files.com/61cd08286c9cafd5eb4ca1f4/61cfe51e9f11fb2d8e342f55_Atlas%20logo.png",
      imageUrl: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      quote: "For specialized roles like mixologists, Worksta has been invaluable. The platform's filtering options help us find exactly the skills we need.",
      author: "Jesse Vida",
      position: "Head Bartender, Atlas Bar",
      stats: {
        rating: 4.7,
        staffCount: 45,
        location: "Parkview Square",
        founded: "2017"
      }
    },
    {
      id: 5,
      name: "Culina",
      description: "Premium gourmet food marketplace and bistro",
      logoUrl: "https://www.culinaatyork.com.sg/images/logo-black.png",
      imageUrl: "https://images.unsplash.com/photo-1586999768265-24af89630739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      quote: "Worksta's temp staff have seamlessly integrated with our team during busy periods. The platform makes scaling our workforce effortless.",
      author: "Sarah Tan",
      position: "HR Manager, Culina",
      stats: {
        rating: 4.8,
        staffCount: 65,
        location: "Dempsey Hill",
        founded: "2012"
      }
    },
    {
      id: 6,
      name: "Super Loco",
      description: "Contemporary Mexican restaurant and cocktail bar",
      logoUrl: "https://www.super-loco.com/wp-content/uploads/2022/06/Super-Loco-Logo.png",
      imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      quote: "The flexibility Worksta offers has transformed our scheduling process. We can quickly adjust our team size based on bookings and events.",
      author: "Julian Tan",
      position: "Director, Super Loco Group",
      stats: {
        rating: 4.6,
        staffCount: 80,
        location: "Multiple locations in Singapore",
        founded: "2014"
      }
    }
  ];

  const { data: partners = [] } = useQuery<Partner[]>({
    queryKey: ['/api/partners'],
    initialData: mockPartners,
  });
  
  // Set active logo on a timer
  useEffect(() => {
    if (partners.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveLogo(prev => {
        if (prev === null) return 0;
        return (prev + 1) % partners.length;
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, [partners]);
  
  // Set initial active logo
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveLogo(0);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -right-20 top-40 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>
      <div className="absolute left-10 bottom-20 w-24 h-24 bg-yellow-50 rounded-full opacity-50"></div>
      
      <div className="container relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <div className="bg-primary/10 rounded-full py-1 px-3 text-sm text-primary font-medium flex items-center justify-center">
              <Award className="h-4 w-4 mr-2" /> Premium Partners
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Singapore's premium F&B businesses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of top restaurants, bars, and hotels in Singapore using Worksta to find qualified staff
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {partners.map((partner, index) => (
            <div 
              key={partner.id}
              className={`cursor-pointer transform transition-all duration-500 hover:scale-105 ${activeLogo === index ? 'scale-110 shadow-md' : 'opacity-70 grayscale hover:grayscale-0 hover:opacity-100'}`}
              onClick={() => setActiveLogo(index)}
            >
              <div className="bg-white rounded-xl shadow-sm p-5 aspect-video flex items-center justify-center border border-gray-100 h-[100px] group relative overflow-hidden">
                {/* Highlight effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${activeLogo === index ? 'opacity-100' : ''}`}></div>
                
                <div className="relative h-full w-full flex items-center justify-center">
                  <img 
                    src={partner.logoUrl} 
                    alt={partner.name} 
                    className={`max-h-12 max-w-full object-contain transition-transform duration-500 ${activeLogo === index ? 'scale-110' : 'group-hover:scale-110'}`}
                  />
                </div>
              </div>
              <p className={`text-center mt-2 text-sm font-medium transition-colors duration-300 ${activeLogo === index ? 'text-primary' : 'text-gray-600'}`}>{partner.name}</p>
            </div>
          ))}
        </div>
        
        {/* Featured partner spotlight */}
        {activeLogo !== null && (
          <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative">
              {/* Decorative corner details */}
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto relative overflow-hidden">
                  {/* Image with overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img 
                    src={partners[activeLogo].imageUrl} 
                    alt={partners[activeLogo].name} 
                    className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                  
                  {/* Rating badge */}
                  {partners[activeLogo].stats?.rating && (
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center shadow-md z-20">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-sm font-bold">{partners[activeLogo].stats.rating}</span>
                    </div>
                  )}
                  
                  {/* Location badge */}
                  {partners[activeLogo].stats?.location && (
                    <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-3 py-1 flex items-center shadow-md z-20">
                      <MapPin className="h-4 w-4 text-primary mr-1" />
                      <span className="text-xs font-medium">{partners[activeLogo].stats.location}</span>
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-primary/5 rounded-full"></div>
                  
                  <div className="h-12 mb-4 animate-fadeIn" style={{ animationDelay: '200ms' }}>
                    <img 
                      src={partners[activeLogo].logoUrl} 
                      alt={partners[activeLogo].name} 
                      className="h-full object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 animate-fadeIn" style={{ animationDelay: '300ms' }}>
                    {partners[activeLogo].name}
                  </h3>
                  
                  {/* Company stats */}
                  <div className="flex gap-4 mb-4 animate-fadeIn" style={{ animationDelay: '400ms' }}>
                    {partners[activeLogo].stats?.staffCount && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{partners[activeLogo].stats.staffCount}+ staff</span>
                      </div>
                    )}
                    {partners[activeLogo].stats?.founded && (
                      <div className="flex items-center text-sm text-gray-500">
                        <span>Est. {partners[activeLogo].stats.founded}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4 animate-fadeIn" style={{ animationDelay: '500ms' }}>
                    {partners[activeLogo].description}
                  </p>
                  
                  {/* Testimonial quote */}
                  {partners[activeLogo].quote && (
                    <div className="bg-gray-50 p-4 rounded-xl mb-4 relative animate-fadeIn" style={{ animationDelay: '600ms' }}>
                      <div className="absolute -top-2 -left-2 text-primary text-3xl opacity-20">"</div>
                      <div className="relative z-10">
                        <p className="text-gray-600 text-sm italic mb-2">{partners[activeLogo].quote}</p>
                        {partners[activeLogo].author && (
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2">
                              {partners[activeLogo].author.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{partners[activeLogo].author}</p>
                              {partners[activeLogo].position && (
                                <p className="text-xs text-gray-500">{partners[activeLogo].position}</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto flex items-center text-sm text-primary font-medium animate-fadeIn" style={{ animationDelay: '700ms' }}>
                    <CheckCircle2 className="h-4 w-4 mr-1" /> Verified Worksta Partner
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 gap-2">
              {partners.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeLogo === index ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                  onClick={() => setActiveLogo(index)}
                  aria-label={`View ${partners[index].name}`}
                ></button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
