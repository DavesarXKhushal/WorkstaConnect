import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Award, Star } from "lucide-react";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePartner, setActivePartner] = useState<number | null>(null);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  const { data: partners = [] } = useQuery({
    queryKey: ['/api/partners'],
    initialData: [
      {
        id: 1,
        name: "Harry's Singapore",
        description: "One of Singapore's most established bar and dining chains",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg",
        rating: 4.8,
        locations: 20,
        founded: "1992"
      },
      {
        id: 2,
        name: "Burnt Ends",
        description: "One-Michelin-starred modern Australian barbecue restaurant",
        logoUrl: "https://burntends.com.sg/wp-content/uploads/2015/02/burntendslogo.png",
        rating: 4.9,
        locations: 1,
        founded: "2013"
      },
      {
        id: 3,
        name: "Raffles Hotel",
        description: "Iconic colonial-style luxury hotel",
        logoUrl: "https://seeklogo.com/images/R/raffles-hotel-singapore-logo-A8D12E58BD-seeklogo.com.png",
        rating: 4.9,
        locations: 1,
        founded: "1887"
      },
      {
        id: 4,
        name: "Atlas Bar",
        description: "Art Deco-inspired grand lobby and bar",
        logoUrl: "https://assets.website-files.com/61cd08286c9cafd5eb4ca1f4/61cfe51e9f11fb2d8e342f55_Atlas%20logo.png",
        rating: 4.7,
        locations: 1,
        founded: "2017"
      },
      {
        id: 5,
        name: "Culina",
        description: "Premium gourmet food marketplace and bistro",
        logoUrl: "https://www.culinaatyork.com.sg/images/logo-black.png",
        rating: 4.8,
        locations: 2,
        founded: "2012"
      }
    ]
  });

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center mb-16">
          {partners.map((partner, index) => (
            <div 
              key={partner.id}
              className={`group cursor-pointer transform transition-all duration-500 ${
                activePartner === index ? 'scale-110' : 'hover:scale-105'
              }`}
              onClick={() => setActivePartner(index)}
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-24 flex items-center justify-center">
                <img 
                  src={partner.logoUrl} 
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                  {partner.name}
                </p>
                {partner.rating && (
                  <div className="flex items-center justify-center mt-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-gray-500 ml-1">{partner.rating}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {activePartner !== null && partners[activePartner] && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <img 
                  src={partners[activePartner].logoUrl} 
                  alt={partners[activePartner].name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{partners[activePartner].name}</h3>
                <p className="text-gray-600">{partners[activePartner].description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500">Founded</div>
                <div className="text-lg font-semibold">{partners[activePartner].founded}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500">Rating</div>
                <div className="text-lg font-semibold flex items-center">
                  {partners[activePartner].rating}
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500">Locations</div>
                <div className="text-lg font-semibold">{partners[activePartner].locations}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500">Active Staff</div>
                <div className="text-lg font-semibold">25+</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;