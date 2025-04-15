import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

interface Partner {
  id: number;
  name: string;
  description: string;
  logoUrl: string;
  imageUrl: string;
}

const Partners = () => {
  const [activeLogo, setActiveLogo] = useState<number | null>(null);
  
  // Singapore F&B business partners
  const mockPartners = [
    {
      id: 1,
      name: "Harry's Singapore",
      description: "One of Singapore's most established bar and dining chains with over 20 outlets",
      logoUrl: "https://logos-world.net/wp-content/uploads/2022/01/Harry-Logo.png",
      imageUrl: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Burnt Ends",
      description: "One-Michelin-starred modern Australian barbecue restaurant",
      logoUrl: "https://static.wixstatic.com/media/e4ef56_28f33ecd7dbe41d0a4318fce9b6e98e6~mv2.png",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Raffles Hotel",
      description: "Iconic colonial-style luxury hotel established in 1887",
      logoUrl: "https://www.raffles.com/assets/0/72/136/55bc0df0-59ce-43b2-9ef8-c51032f8d1c8.png",
      imageUrl: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Atlas Bar",
      description: "Art Deco-inspired grand lobby and bar featuring over 1,300 gins",
      logoUrl: "https://www.atlasbar.sg/images/logo.png",
      imageUrl: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Culina",
      description: "Premium gourmet food marketplace and bistro",
      logoUrl: "https://www.culina.com.sg/wp-content/uploads/2018/02/COMO-Dempsey-Primary-Logo-White.png",
      imageUrl: "https://images.unsplash.com/photo-1586999768265-24af89630739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Super Loco",
      description: "Contemporary Mexican restaurant and cocktail bar",
      logoUrl: "https://www.super-loco.com/wp-content/uploads/2017/09/Logo-with-Location-big.png",
      imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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
    }, 3000);
    
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
    <section className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-center mb-4">Trusted by Singapore's premium F&B businesses</h2>
          <p className="section-subtitle mx-auto text-center">
            Join hundreds of top restaurants, bars, and hotels in Singapore using Worksta to find qualified staff
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center mb-16">
          {partners.map((partner, index) => (
            <div 
              key={partner.id}
              className={`cursor-pointer transform transition-all duration-500 ${activeLogo === index ? 'scale-110' : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`}
              onClick={() => setActiveLogo(index)}
            >
              <div className="bg-white rounded-xl shadow-sm p-5 aspect-video flex items-center justify-center border border-gray-100 h-[100px]">
                <div className="relative h-full w-full flex items-center justify-center">
                  <img 
                    src={partner.logoUrl} 
                    alt={partner.name} 
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-center mt-2 text-sm font-medium text-gray-600">{partner.name}</p>
            </div>
          ))}
        </div>
        
        {/* Featured partner spotlight */}
        {activeLogo !== null && (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto relative overflow-hidden">
                  <img 
                    src={partners[activeLogo].imageUrl} 
                    alt={partners[activeLogo].name} 
                    className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="h-12 mb-4">
                    <img 
                      src={partners[activeLogo].logoUrl} 
                      alt={partners[activeLogo].name} 
                      className="h-full object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {partners[activeLogo].name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {partners[activeLogo].description}
                  </p>
                  <div className="text-sm text-gray-500">
                    Worksta helps us find qualified staff quickly during our busiest seasons.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
