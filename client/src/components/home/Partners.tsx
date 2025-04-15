import { useQuery } from '@tanstack/react-query';

interface Partner {
  id: number;
  name: string;
  imageUrl: string;
}

const Partners = () => {
  // Real Singapore F&B business logos
  const mockPartners = [
    {
      id: 1,
      name: "Harry's",
      imageUrl: "https://images.unsplash.com/photo-1581954548122-53359cc70018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Burnt Ends",
      imageUrl: "https://images.unsplash.com/photo-1581954549494-61926b248ee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Raffles Hotel",
      imageUrl: "https://images.unsplash.com/photo-1578404452872-669d7cf9534c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Atlas Bar",
      imageUrl: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "Culina",
      imageUrl: "https://images.unsplash.com/photo-1591167880223-5dbc9359de97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 6,
      name: "Super Loco",
      imageUrl: "https://images.unsplash.com/photo-1583665347434-f326badc98d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const { data: partners = [] } = useQuery<Partner[]>({
    queryKey: ['/api/partners'],
    initialData: mockPartners,
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500">
            Trusted by Singapore's top F&B establishments
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="bg-white rounded-xl shadow-sm p-4 w-[150px] h-[100px] flex items-center justify-center border border-gray-100">
                <img 
                  src={partner.imageUrl} 
                  alt={partner.name} 
                  className="max-h-16 max-w-[100px] object-contain"
                />
              </div>
              <p className="text-center mt-2 text-sm font-medium text-gray-600">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
