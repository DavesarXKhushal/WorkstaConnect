import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";

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
  // Mock job listings to match Staffie design
  const mockShifts: Shift[] = [
    {
      id: 1,
      businessId: 1,
      businessName: "Clos Pasoh",
      businessType: "French Restaurant",
      location: "Outram Park",
      role: "Server",
      hourlyRate: 16,
      shifts: 10,
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      businessId: 2,
      businessName: "Harry's Chijmes",
      businessType: "Bar",
      location: "City Hall",
      role: "Server",
      hourlyRate: 14,
      shifts: 9,
      imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      businessId: 3,
      businessName: "Super Loco",
      businessType: "Mexican Restaurant",
      location: "Robertson Quay",
      role: "Server",
      hourlyRate: 13,
      shifts: 14,
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const { data: shifts = [] } = useQuery<Shift[]>({
    queryKey: ['/api/shifts'],
    initialData: mockShifts,
  });

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shifts.map((shift) => (
            <div 
              key={shift.id}
              className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={shift.imageUrl} 
                alt={shift.businessName} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="text-2xl font-bold mb-1 text-black">{shift.businessName}</h4>
                <p className="text-gray-600 mb-4">{shift.businessType} at {shift.location}</p>
                
                <div className="space-y-2">
                  <div className="flex gap-2 text-sm">
                    <div>
                      <p className="font-medium text-gray-600">{shift.role}</p>
                      <p className="font-bold text-black">S${shift.hourlyRate}/hr</p>
                    </div>
                    <p className="mx-2 text-gray-400">•</p>
                    <div>
                      <p className="font-medium text-gray-600">Cook</p>
                      <p className="font-bold text-black">S${shift.hourlyRate + 2}/hr</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{shift.shifts} shifts</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600/30 via-purple-400/20 to-pink-300/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">Book these and more, instantly →</h3>
            <p className="text-gray-700 max-w-xl">Find businesses that fit your preferred roles, weekly schedule, and location.</p>
          </div>
          <Link href="/signup" className="mt-6 md:mt-0">
            <Button className="bg-black text-white rounded-lg hover:bg-black/80 text-lg px-6 py-3">
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
