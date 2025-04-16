import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Calendar, Star, Search, ChevronRight, CheckCircle2, ArrowRight, Filter, Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/logo";

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
  distance?: string;
  date?: string;
  requirements?: string[];
  featured?: boolean;
}

// Mock data for shifts with better images and details
const mockShifts: Shift[] = [
  {
    id: 1,
    businessId: 1,
    businessName: "Harry's Singapore",
    businessType: "Bar & Restaurant",
    location: "Orchard Road",
    role: "Server",
    hourlyRate: 18,
    shifts: 5,
    imageUrl: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg",
    rating: 4.5,
    distance: "1.2 km",
    date: "Sat, Apr 20",
    requirements: ["Black uniform", "Prior experience"],
    featured: true
  },
  {
    id: 2,
    businessId: 2,
    businessName: "Burnt Ends",
    businessType: "Fine Dining",
    location: "Dempsey Hill",
    role: "Cook",
    hourlyRate: 25,
    shifts: 3,
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://burntends.com.sg/wp-content/uploads/2015/02/burntendslogo.png",
    rating: 4.8,
    distance: "3.5 km",
    date: "Mon, Apr 22",
    requirements: ["Chef certification", "Culinary school graduate"]
  },
  {
    id: 3,
    businessId: 3,
    businessName: "Atlas Bar",
    businessType: "Cocktail Bar",
    location: "City Hall",
    role: "Bartender",
    hourlyRate: 22,
    shifts: 7,
    imageUrl: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://assets.website-files.com/61cd08286c9cafd5eb4ca1f4/61cfe51e9f11fb2d8e342f55_Atlas%20logo.png",
    rating: 4.7,
    distance: "0.8 km",
    date: "Tue, Apr 16",
    requirements: ["Mixology experience", "TIPS certification"]
  },
  {
    id: 4,
    businessId: 4,
    businessName: "Super Loco",
    businessType: "Mexican Restaurant",
    location: "Robertson Quay",
    role: "Server",
    hourlyRate: 17,
    shifts: 4,
    imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://www.super-loco.com/wp-content/uploads/2022/06/Super-Loco-Logo.png",
    rating: 4.3,
    distance: "2.1 km",
    date: "Wed, Apr 17",
    requirements: ["Customer service skills", "English proficiency"]
  },
  {
    id: 5,
    businessId: 5,
    businessName: "Raffles Hotel",
    businessType: "Luxury Hotel",
    location: "Beach Road",
    role: "Server",
    hourlyRate: 20,
    shifts: 6,
    imageUrl: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://seeklogo.com/images/R/raffles-hotel-singapore-logo-A8D12E58BD-seeklogo.com.png",
    rating: 4.9,
    distance: "1.5 km",
    date: "Thu, Apr 18",
    requirements: ["Formal attire provided", "Hospitality experience preferred"],
    featured: true
  },
  {
    id: 6,
    businessId: 6,
    businessName: "Culina",
    businessType: "Gourmet Market",
    location: "Dempsey Hill",
    role: "Dishwasher",
    hourlyRate: 16,
    shifts: 8,
    imageUrl: "https://images.unsplash.com/photo-1586999768265-24af89630739?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://www.culinaatyork.com.sg/images/logo-black.png",
    rating: 4.2,
    distance: "3.7 km",
    date: "Fri, Apr 19",
    requirements: ["No experience required", "Transport provided"]
  }
];

const FindWork = () => {
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [filteredShifts, setFilteredShifts] = useState<Shift[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilters, setActiveFilters] = useState(0);

  const { data: shifts = mockShifts } = useQuery<Shift[]>({
    queryKey: ['/api/shifts'],
    initialData: mockShifts
  });

  // Apply filters when they change
  useEffect(() => {
    const filtered = shifts.filter((shift) => {
      return (
        (location === "" || shift.location.includes(location)) &&
        (role === "" || shift.role === role)
      );
    });
    setFilteredShifts(filtered);

    // Count active filters
    let count = 0;
    if (location !== "") count++;
    if (role !== "") count++;
    if (dayOfWeek !== "") count++;
    setActiveFilters(count);
  }, [location, role, dayOfWeek, shifts]);

  // Animation on mount
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-white/10 rounded-full"></div>
          <div className="absolute left-1/4 -bottom-20 w-60 h-60 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="container relative z-10 pt-16 pb-24 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="bg-white/20 backdrop-blur-md rounded-full py-1 px-3 text-sm text-white font-medium flex items-center justify-center mb-4 mx-auto w-fit animate-pulse-soft">
                <Sparkles size={16} className="mr-2" /> Singapore's Premier F&B Job Platform
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">Find Flexible Shifts</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 animate-fadeIn">
              Browse and book shifts at Singapore's top F&B venues instantly
            </p>
            
            {/* Quick Search Box */}
            <div className={`max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 relative transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin size={18} className="text-gray-400" />
                    </div>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger id="location-hero" className="pl-10 bg-gray-50 border border-gray-200">
                        <SelectValue placeholder="All locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All locations</SelectItem>
                        <SelectItem value="Orchard Road">Orchard Road</SelectItem>
                        <SelectItem value="City Hall">City Hall</SelectItem>
                        <SelectItem value="Robertson Quay">Robertson Quay</SelectItem>
                        <SelectItem value="Dempsey Hill">Dempsey Hill</SelectItem>
                        <SelectItem value="Beach Road">Beach Road</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock size={18} className="text-gray-400" />
                    </div>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger id="role-hero" className="pl-10 bg-gray-50 border border-gray-200">
                        <SelectValue placeholder="All roles" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All roles</SelectItem>
                        <SelectItem value="Server">Server</SelectItem>
                        <SelectItem value="Cook">Cook</SelectItem>
                        <SelectItem value="Bartender">Bartender</SelectItem>
                        <SelectItem value="Dishwasher">Dishwasher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90 text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105">
                  <Search size={18} className="mr-2" /> Find Shifts
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <div className="text-xs bg-blue-100 text-blue-800 rounded-full px-3 py-1 font-medium flex items-center">
                  <Star size={12} className="mr-1" /> Top-rated venues
                </div>
                <div className="text-xs bg-green-100 text-green-800 rounded-full px-3 py-1 font-medium flex items-center">
                  <DollarSign size={12} className="mr-1" /> Weekly payments
                </div>
                <div className="text-xs bg-purple-100 text-purple-800 rounded-full px-3 py-1 font-medium flex items-center">
                  <Calendar size={12} className="mr-1" /> Flexible scheduling
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Available Shifts</h2>
              <p className="text-gray-600">
                {filteredShifts.length} shift{filteredShifts.length !== 1 ? 's' : ''} available
                {activeFilters > 0 && ` • ${activeFilters} filter${activeFilters !== 1 ? 's' : ''} applied`}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} /> Advanced Filters
              </Button>
            </div>
          </div>
          
          <Card className="mb-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Filter className="mr-2 h-5 w-5 text-primary" /> Filter Shifts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="location" className="text-sm font-medium">Location</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger id="location" className="bg-white border border-gray-200 mt-1 hover:border-primary transition-colors">
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All locations</SelectItem>
                      <SelectItem value="Orchard Road">Orchard Road</SelectItem>
                      <SelectItem value="City Hall">City Hall</SelectItem>
                      <SelectItem value="Robertson Quay">Robertson Quay</SelectItem>
                      <SelectItem value="Dempsey Hill">Dempsey Hill</SelectItem>
                      <SelectItem value="Beach Road">Beach Road</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="role" className="text-sm font-medium">Role</Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger id="role" className="bg-white border border-gray-200 mt-1 hover:border-primary transition-colors">
                      <SelectValue placeholder="All roles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All roles</SelectItem>
                      <SelectItem value="Server">Server</SelectItem>
                      <SelectItem value="Cook">Cook</SelectItem>
                      <SelectItem value="Bartender">Bartender</SelectItem>
                      <SelectItem value="Dishwasher">Dishwasher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="day" className="text-sm font-medium">Day of Week</Label>
                  <Select value={dayOfWeek} onValueChange={setDayOfWeek}>
                    <SelectTrigger id="day" className="bg-white border border-gray-200 mt-1 hover:border-primary transition-colors">
                      <SelectValue placeholder="Any day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any day</SelectItem>
                      <SelectItem value="Monday">Monday</SelectItem>
                      <SelectItem value="Tuesday">Tuesday</SelectItem>
                      <SelectItem value="Wednesday">Wednesday</SelectItem>
                      <SelectItem value="Thursday">Thursday</SelectItem>
                      <SelectItem value="Friday">Friday</SelectItem>
                      <SelectItem value="Saturday">Saturday</SelectItem>
                      <SelectItem value="Sunday">Sunday</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 flex justify-between border-t border-gray-100">
              <Button 
                variant="ghost" 
                onClick={() => {
                  setLocation("");
                  setRole("");
                  setDayOfWeek("");
                }}
                className="text-gray-500 hover:text-gray-700"
                disabled={activeFilters === 0}
              >
                Clear Filters
              </Button>
              <Button className="bg-primary text-gray-900">
                Apply Filters
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredShifts.map((shift, index) => (
            <div
              key={shift.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {shift.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-primary text-xs text-gray-900 font-bold py-1 px-3 rounded-full shadow-md animate-pulse-soft">
                    Featured
                  </div>
                </div>
              )}
              
              <div className="relative">
                <img
                  src={shift.imageUrl}
                  alt={shift.businessName}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {shift.logoUrl && (
                  <div className="absolute bottom-4 left-4 bg-white rounded-full h-12 w-12 flex items-center justify-center p-1 shadow-md">
                    <img src={shift.logoUrl} alt={`${shift.businessName} logo`} className="max-h-10 max-w-10 object-contain rounded-full" />
                  </div>
                )}
                
                <div className="absolute bottom-4 right-4 flex items-center bg-white/90 backdrop-blur-sm rounded-full py-1 px-2 shadow-sm">
                  {shift.rating && (
                    <div className="flex items-center text-yellow-500 text-sm font-medium">
                      <Star size={14} className="fill-yellow-500 text-yellow-500" />
                      <span className="ml-1">{shift.rating}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-semibold">{shift.businessName}</h4>
                    <p className="text-gray-600 flex items-center text-sm">
                      <MapPin size={14} className="mr-1" />
                      {shift.businessType} • {shift.location}
                      {shift.distance && <span className="ml-1">• {shift.distance}</span>}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{shift.role}</span>
                    <span className="text-green-600 font-medium flex items-center">
                      <DollarSign size={16} />
                      S${shift.hourlyRate}/hr
                    </span>
                  </div>
                  
                  {shift.date && (
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Calendar size={14} className="mr-1" />
                      {shift.date}
                    </div>
                  )}
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={14} className="mr-1" />
                    {shift.shifts} {shift.shifts === 1 ? 'shift' : 'shifts'} available
                  </div>
                </div>
                
                {shift.requirements && shift.requirements.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2">Requirements:</div>
                    {shift.requirements.map((req, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600 mb-1">
                        <CheckCircle2 size={14} className="mr-1 text-primary" />
                        {req}
                      </div>
                    ))}
                  </div>
                )}

                <Button className="w-full bg-primary text-gray-900 hover:bg-primary/90 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Book Shift <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredShifts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">No shifts match your filters</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filter criteria to see more shifts</p>
            <Button
              variant="outline"
              onClick={() => {
                setLocation("");
                setRole("");
                setDayOfWeek("");
              }}
              className="hover:bg-gray-50"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[length:20px_20px] opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)' }}></div>
          
          <div className="relative z-10 p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-white">Get notified of new shifts</h3>
                <p className="text-white/90 max-w-xl text-lg">
                  Create an account to receive personalized job alerts and book shifts instantly
                </p>
              </div>
              <Link href="/signup">
                <Button className="bg-white hover:bg-gray-50 text-gray-900 text-lg px-8 py-4 rounded-full shadow-xl transition-transform hover:scale-105 flex items-center">
                  Create Account <ChevronRight className="h-5 w-5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="py-8 border-t border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">Trusted by Singapore's premium F&B businesses</h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg" alt="Harry's Logo" className="h-10 object-contain" />
            <img src="https://burntends.com.sg/wp-content/uploads/2015/02/burntendslogo.png" alt="Burnt Ends Logo" className="h-8 object-contain" />
            <img src="https://seeklogo.com/images/R/raffles-hotel-singapore-logo-A8D12E58BD-seeklogo.com.png" alt="Raffles Hotel Logo" className="h-10 object-contain" />
            <img src="https://assets.website-files.com/61cd08286c9cafd5eb4ca1f4/61cfe51e9f11fb2d8e342f55_Atlas%20logo.png" alt="Atlas Bar Logo" className="h-8 object-contain" />
            <img src="https://www.culinaatyork.com.sg/images/logo-black.png" alt="Culina Logo" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindWork;
