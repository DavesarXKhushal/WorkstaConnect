
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, MapPin, DollarSign, Calendar, Star, Search, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

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
  logoUrl?: string;
  rating?: number;
  date?: string;
  featured?: boolean;
  startTime?: string;
  endTime?: string;
}

const mockShifts: Shift[] = [
  {
    id: 1,
    businessId: 1,
    businessName: "Clos Pasoh",
    businessType: "French Brasserie",
    location: "Bukit Pasoh",
    role: "Server",
    hourlyRate: 18,
    shifts: 5,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://www.staffie.app/static/clos-pasoh-aa7138b998ada3b2496745db10302698.jpg",
    rating: 4.8,
    date: "Saturday, Apr 20",
    featured: true,
    startTime: "6:00 PM",
    endTime: "11:00 PM"
  },
  {
    id: 2,
    businessId: 2,
    businessName: "Harry's Bar",
    businessType: "Bar & Restaurant",
    location: "Boat Quay",
    role: "Bartender",
    hourlyRate: 22,
    shifts: 3,
    imageUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://www.staffie.app/static/harry-chijmes-0714ead2ea09babfce9705f19192c2ed.jpeg",
    rating: 4.7,
    date: "Sunday, Apr 21",
    startTime: "7:00 PM",
    endTime: "1:00 AM"
  },
  {
    id: 3,
    businessId: 3,
    businessName: "Super Loco",
    businessType: "Mexican Restaurant",
    location: "Robertson Quay",
    role: "Server",
    hourlyRate: 16,
    shifts: 4,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://www.staffie.app/static/super-loco-db744603ff84a7de15636874ceacb705.jpeg",
    rating: 4.6,
    date: "Monday, Apr 22",
    startTime: "5:00 PM",
    endTime: "10:00 PM"
  },
  {
    id: 4,
    businessId: 4,
    businessName: "PS.Cafe",
    businessType: "Casual Dining",
    location: "Palais Renaissance",
    role: "Host",
    hourlyRate: 17,
    shifts: 6,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://www.staffie.app/static/ps-cafe-4a7138b998ada3b2496745db10302698.jpg",
    rating: 4.5,
    date: "Tuesday, Apr 23",
    startTime: "11:00 AM",
    endTime: "4:00 PM"
  }
];

const JobListings = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { data: shifts = mockShifts } = useQuery<Shift[]>({
    queryKey: ['/api/shifts'],
    initialData: mockShifts
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-blue-500" />
          <span className="text-blue-500 font-medium">Hot Opportunities</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-2">New shifts this week</h2>
        <p className="text-gray-600 mb-8">See the latest premium opportunities at Singapore's top F&B venues</p>

        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search by role, business, or location..." 
                className="pl-10 bg-blue-50 border-0 rounded-lg"
              />
            </div>
          </div>
          <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600">
            Filter
          </Button>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <Button 
            variant="ghost"
            className={cn(
              "rounded-full",
              activeFilter === "all" && "bg-blue-100 text-blue-500 hover:bg-blue-200"
            )}
            onClick={() => setActiveFilter("all")}
          >
            <Clock className="h-4 w-4 mr-2" />
            All Shifts
          </Button>
          <Button 
            variant="ghost"
            className={cn(
              "rounded-full",
              activeFilter === "featured" && "bg-blue-100 text-blue-500 hover:bg-blue-200"
            )}
            onClick={() => setActiveFilter("featured")}
          >
            <Star className="h-4 w-4 mr-2" />
            Featured
            <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">Hot</span>
          </Button>
          <Button 
            variant="ghost"
            className={cn(
              "rounded-full",
              activeFilter === "server" && "bg-blue-100 text-blue-500 hover:bg-blue-200"
            )}
            onClick={() => setActiveFilter("server")}
          >
            Server
          </Button>
          <Button 
            variant="ghost"
            className={cn(
              "rounded-full",
              activeFilter === "bartender" && "bg-blue-100 text-blue-500 hover:bg-blue-200"
            )}
            onClick={() => setActiveFilter("bartender")}
          >
            Bartender
          </Button>
          <Button 
            variant="ghost"
            className={cn(
              "rounded-full",
              activeFilter === "chef" && "bg-blue-100 text-blue-500 hover:bg-blue-200"
            )}
            onClick={() => setActiveFilter("chef")}
          >
            Chef
          </Button>
        </div>

        <p className="text-sm text-gray-500 mb-6">Showing {shifts.length} shifts</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shifts.map((shift) => (
            <div key={shift.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={shift.imageUrl} 
                  alt={shift.businessName} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {shift.featured && (
                  <div className="absolute top-3 left-3 z-20">
                    <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center">
                      <Sparkles className="h-3 w-3 mr-1" /> Featured
                    </div>
                  </div>
                )}

                {shift.rating && (
                  <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-xs font-medium">{shift.rating}</span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {shift.businessName}
                    </h4>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
                      <span className="text-sm">{shift.businessType} • {shift.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{shift.role}</span>
                    <span className="text-green-600 font-medium">S${shift.hourlyRate}/hr</span>
                  </div>

                  <div className="text-xs text-gray-600 space-y-1.5">
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                      {shift.startTime} - {shift.endTime}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                      {shift.date}
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
