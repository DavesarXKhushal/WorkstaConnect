import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight, MapPin, Clock, DollarSign } from "lucide-react";

interface Shift {
  id: number;
  businessId: number;
  businessName: string;
  businessType: string;
  location: string;
  role: string;
  hourlyRate: number;
  shifts: number;
  imageUrl: string;
}

const JobListings = () => {
  // High-quality job listings with real Singapore F&B businesses
  const mockShifts: Shift[] = [
    {
      id: 1,
      businessId: 1,
      businessName: "Clos Pasoh",
      businessType: "French Brasserie",
      location: "Bukit Pasoh",
      role: "Server",
      hourlyRate: 16,
      shifts: 10,
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      businessId: 2,
      businessName: "Harry's",
      businessType: "Bar & Restaurant",
      location: "Boat Quay",
      role: "Bartender",
      hourlyRate: 18,
      shifts: 8,
      imageUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      businessId: 3,
      businessName: "Super Loco",
      businessType: "Mexican Restaurant",
      location: "Robertson Quay",
      role: "Server",
      hourlyRate: 16,
      shifts: 12,
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const { data: shifts = [] } = useQuery<Shift[]>({
    queryKey: ['/api/shifts'],
    initialData: mockShifts,
  });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">New shifts this week</h2>
          <p className="section-subtitle mx-auto">See some of the premium shifts other professionals are picking up</p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shifts.map((shift) => (
            <div 
              key={shift.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={shift.imageUrl} 
                  alt={shift.businessName} 
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary border border-blue-100">
                  {shift.shifts} shifts available
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold mb-1 text-gray-900">{shift.businessName}</h4>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  <span className="text-sm">{shift.businessType} • {shift.location}</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">Flexible hours</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">From <span className="font-bold text-gray-900">S${shift.hourlyRate}/hr</span></span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-gray-500">Available Roles</span>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs bg-blue-50 text-primary px-2 py-1 rounded-full">Server</span>
                        <span className="text-xs bg-blue-50 text-primary px-2 py-1 rounded-full">Bartender</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs rounded-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gray-50 rounded-2xl p-10 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Book these and more, instantly</h3>
              <p className="text-gray-600 max-w-2xl">Find businesses that fit your preferred roles, weekly schedule, and location. Start working at Singapore's top F&B venues.</p>
            </div>
            <Link href="/signup" className="mt-8 md:mt-0">
              <Button className="btn-primary px-8 py-4 text-lg rounded-full">
                Get Started <ChevronRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
