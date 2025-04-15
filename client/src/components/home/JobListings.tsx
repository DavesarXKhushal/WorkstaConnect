import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

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
  const { data: shifts = [] } = useQuery<Shift[]>({
    queryKey: ['/api/shifts'],
  });

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3">New shifts this week</h2>
        <p className="text-xl text-gray-600 mb-12">See some of the shifts other Pros are picking up this week.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shifts.map((shift) => (
            <div 
              key={shift.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={shift.imageUrl} 
                alt={shift.businessName} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-1">{shift.businessName}</h4>
                <p className="text-gray-600 mb-4">{shift.businessType} at {shift.location}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>{shift.role}</span>
                    <span className="font-medium">S${shift.hourlyRate}/hr</span>
                  </div>
                  <div className="text-sm text-gray-500">{shift.shifts} shifts</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-6">Book these and more, instantly →</h4>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Find businesses that fit your preferred roles, weekly schedule, and location.</p>
          <Link href="/signup">
            <Button className="bg-[#fdf568] text-gray-900 hover:bg-[#f7e436]">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
