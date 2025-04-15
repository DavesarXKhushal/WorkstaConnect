import { useQuery } from '@tanstack/react-query';

interface Partner {
  id: number;
  name: string;
  imageUrl: string;
}

const Partners = () => {
  // Mock partner logos for now
  const mockPartners = [
    {
      id: 1,
      name: "Harry's",
      imageUrl: "https://images.unsplash.com/photo-1603376774576-66fad0e74c58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Burnt Ends",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Privé",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Little Farms",
      imageUrl: "https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "Tanglin",
      imageUrl: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 6,
      name: "Super Loco",
      imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const { data: partners = [] } = useQuery<Partner[]>({
    queryKey: ['/api/partners'],
    initialData: mockPartners,
  });

  return (
    <section className="bg-black py-16 border-t border-white/5">
      <div className="container">
        <div className="flex flex-wrap gap-16 md:gap-12 justify-center items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="filter invert opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={partner.imageUrl} 
                alt={partner.name} 
                className="max-h-12 max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
