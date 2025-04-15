import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

interface Partner {
  id: number;
  name: string;
  imageUrl: string;
}

const Partners = () => {
  const { data: partners = [] } = useQuery<Partner[]>({
    queryKey: ['/api/partners'],
  });

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-12">Choose from hundreds of Singapore's top F&B venues</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="grayscale hover:grayscale-0 transition-all duration-300 w-32 h-16 flex items-center justify-center"
            >
              <img 
                src={partner.imageUrl} 
                alt={partner.name} 
                className="max-h-12 max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
