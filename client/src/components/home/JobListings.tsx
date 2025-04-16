import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, DollarSign, Calendar, Star, Search, ArrowRight, Heart, Award, Utensils, ChefHat, CalendarIcon, CheckCircle2, Sparkles } from "lucide-react";

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
  roles?: string[];
  startTime?: string;
  endTime?: string;
  description?: string;
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
    roles: ["Server", "Host"],
    startTime: "6:00 PM",
    endTime: "11:00 PM",
    description: "Upscale French dining experience"
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
    featured: true,
    roles: ["Bartender"],
    startTime: "7:00 PM",
    endTime: "1:00 AM",
    description: "Vibrant riverside bar atmosphere"
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
    roles: ["Server", "Runner"],
    startTime: "5:00 PM",
    endTime: "10:00 PM",
    description: "Vibrant Mexican dining concept"
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
    roles: ["Host", "Server"],
    startTime: "11:00 AM",
    endTime: "4:00 PM",
    description: "Sophisticated casual dining venue"
  }
];

const JobListings = () => {
  const { data: shifts = mockShifts } = useQuery<Shift[]>({
    queryKey: ['/api/shifts'],
    initialData: mockShifts
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">New shifts this week</h2>
          <Button variant="outline" className="text-sm">
            View all shifts <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shifts.map((shift) => (
            <div key={shift.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
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

                {shift.logoUrl && (
                  <div className="absolute -bottom-6 left-4 z-20">
                    <div className="bg-white rounded-full p-1.5 shadow-lg h-12 w-12">
                      <img 
                        src={shift.logoUrl} 
                        alt={`${shift.businessName} logo`}
                        className="h-full w-full object-contain rounded-full"
                      />
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

              <div className="p-5 pt-8">
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

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{shift.role}</span>
                    <span className="text-green-600 font-medium">S${shift.hourlyRate}/hr</span>
                  </div>

                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                      {shift.startTime} - {shift.endTime}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                      {shift.shifts} shifts available
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                  Apply Now
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