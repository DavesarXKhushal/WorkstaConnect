import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar, 
  Star, 
  Utensils, 
  Award, 
  ArrowRight, 
  Search, 
  ChefHat, 
  Heart, 
  Calendar as CalendarIcon, 
  Sparkles,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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
}

const JobListings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // Animation on mount
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);
  
  // Expanded mock shifts with more details
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
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      logoUrl: "https://res.cloudinary.com/tf-lab/image/upload/restaurant/cb4bd4af-ad3e-4d92-b55a-bbf6e5c8e3d9/70c7a86c-3b3c-458a-84f4-c83abe363a39.png",
      rating: 4.8,
      date: "Saturday, Apr 20",
      featured: true,
      roles: ["Server", "Host"],
      startTime: "6:00 PM",
      endTime: "11:00 PM"
    },
    {
      id: 2,
      businessId: 2,
      businessName: "Harry's",
      businessType: "Bar & Restaurant",
      location: "Boat Quay",
      role: "Bartender",
      hourlyRate: 22,
      shifts: 3,
      imageUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg",
      rating: 4.6,
      date: "Friday, Apr 19",
      roles: ["Bartender", "Server"],
      startTime: "7:00 PM",
      endTime: "1:00 AM"
    },
    {
      id: 3,
      businessId: 3,
      businessName: "Super Loco",
      businessType: "Mexican Restaurant",
      location: "Robertson Quay",
      role: "Chef",
      hourlyRate: 25,
      shifts: 4,
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      logoUrl: "https://www.super-loco.com/wp-content/uploads/2022/06/Super-Loco-Logo.png",
      rating: 4.7,
      date: "Sunday, Apr 21",
      featured: true,
      roles: ["Chef", "Kitchen Helper"],
      startTime: "10:00 AM",
      endTime: "3:00 PM"
    },
    {
      id: 4,
      businessId: 4,
      businessName: "Atlas Bar",
      businessType: "Cocktail Bar",
      location: "Parkview Square",
      role: "Bartender",
      hourlyRate: 24,
      shifts: 2,
      imageUrl: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      logoUrl: "https://assets.website-files.com/61cd08286c9cafd5eb4ca1f4/61cfe51e9f11fb2d8e342f55_Atlas%20logo.png",
      rating: 4.9,
      date: "Thursday, Apr 18",
      roles: ["Bartender", "Server"],
      startTime: "6:00 PM",
      endTime: "12:00 AM"
    }
  ];

  const { data: allShifts = [] } = useQuery<Shift[]>({
    queryKey: ['/api/shifts'],
    initialData: mockShifts,
  });
  
  // Filter shifts based on search and filter
  const filteredShifts = allShifts.filter(shift => {
    const matchesSearch = searchTerm === "" || 
      shift.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shift.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shift.location.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesFilter = activeFilter === "all" || 
      (activeFilter === "featured" && shift.featured) ||
      shift.role.toLowerCase() === activeFilter.toLowerCase();
      
    return matchesSearch && matchesFilter;
  });
  
  // Filter options
  const filterOptions = [
    { id: "all", label: "All Shifts", icon: <Clock className="h-4 w-4" /> },
    { id: "featured", label: "Featured", icon: <Award className="h-4 w-4" /> },
    { id: "server", label: "Server", icon: <Utensils className="h-4 w-4" /> },
    { id: "bartender", label: "Bartender", icon: <DollarSign className="h-4 w-4" /> },
    { id: "chef", label: "Chef", icon: <ChefHat className="h-4 w-4" /> }
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-20 w-72 h-72 bg-primary/5 rounded-full opacity-50 -z-10"></div>
      <div className="absolute -left-20 bottom-40 w-60 h-60 bg-yellow-50 rounded-full opacity-40 -z-10"></div>
      
      <div className="container relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4">
            <div className="bg-primary/10 rounded-full py-1 px-3 text-sm text-primary font-medium flex items-center justify-center">
              <Sparkles className="h-4 w-4 mr-2" /> Hot Opportunities
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">New shifts this week</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the latest premium opportunities at Singapore's top F&B venues
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className={`max-w-4xl mx-auto mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="text" 
                  placeholder="Search by role, business, or location..." 
                  className="pl-10 py-6 border-gray-200 rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="bg-primary text-gray-900 hover:bg-primary/90 py-6 px-8 font-medium rounded-lg hidden md:flex">
                <Filter className="mr-2 h-5 w-5" /> Filter
              </Button>
            </div>
          </div>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filterOptions.map(option => (
              <button
                key={option.id}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === option.id 
                    ? 'bg-primary text-gray-900 shadow-sm' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                onClick={() => setActiveFilter(option.id)}
              >
                {option.icon}
                <span className="ml-1.5">{option.label}</span>
                {option.id === "featured" && (
                  <span className="ml-1.5 bg-red-500 text-white text-xs py-0.5 px-1.5 rounded-full">Hot</span>
                )}
              </button>
            ))}
          </div>
        </div>
      
        {/* Results count */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredShifts.length}</span> shifts
            {activeFilter !== 'all' && ` for "${activeFilter}"`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
      
        {/* Shift Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          {filteredShifts.map((shift, index) => (
            <div 
              key={shift.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <div className="relative overflow-hidden">
                {/* Image with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={shift.imageUrl} 
                  alt={shift.businessName} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Featured badge */}
                {shift.featured && (
                  <div className="absolute top-3 left-3 z-20">
                    <div className="bg-primary text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center animate-pulse-slow">
                      <Sparkles className="h-3 w-3 mr-1" /> Featured
                    </div>
                  </div>
                )}
                
                {/* Business logo */}
                {shift.logoUrl && (
                  <div className="absolute bottom-3 left-3 z-20 bg-white rounded-full h-12 w-12 p-1 shadow-md flex items-center justify-center">
                    <img 
                      src={shift.logoUrl} 
                      alt={`${shift.businessName} logo`}
                      className="h-10 w-10 object-contain rounded-full"
                    />
                  </div>
                )}
                
                {/* Rating */}
                {shift.rating && (
                  <div className="absolute top-3 right-3 z-20 bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center shadow-sm">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-xs font-medium">{shift.rating}</span>
                  </div>
                )}
                
                {/* Date */}
                {shift.date && (
                  <div className="absolute bottom-3 right-3 z-20 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium flex items-center shadow-sm">
                    <CalendarIcon className="h-3 w-3 mr-1 text-primary" />
                    {shift.date}
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-gray-900 group-hover:text-primary transition-colors">{shift.businessName}</h4>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400 flex-shrink-0" />
                      <span className="text-xs">{shift.businessType} • {shift.location}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                    <Heart className="h-4 w-4 text-gray-400 hover:text-red-500 transition-colors" />
                  </Button>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 my-3">
                  <div className="flex justify-between items-center mb-1">
                    <div className="font-medium text-sm">{shift.role}</div>
                    <div className="text-green-600 font-medium text-sm flex items-center">
                      <DollarSign className="h-3.5 w-3.5 mr-0.5" />
                      S${shift.hourlyRate}/hr
                    </div>
                  </div>
                  
                  {shift.startTime && shift.endTime && (
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <Clock className="h-3 w-3 mr-1 text-gray-400" />
                      {shift.startTime} - {shift.endTime}
                    </div>
                  )}
                  
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                    {shift.shifts} {shift.shifts === 1 ? 'shift' : 'shifts'} available
                  </div>
                </div>
                
                {/* Roles */}
                {shift.roles && shift.roles.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-1.5">Available Roles</div>
                    <div className="flex flex-wrap gap-1.5">
                      {shift.roles.map((role, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <Button className="w-full bg-primary text-gray-900 hover:bg-primary/90 mt-1 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center text-sm">
                    Book Shift
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredShifts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">No matching shifts found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
            >
              Clear Search
            </Button>
          </div>
        )}
        
        {/* CTA Section */}
        <div className={`mt-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-10 md:p-16 shadow-lg relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[length:20px_20px] opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)' }}></div>
            
            {/* Floating elements */}
            <div className="absolute top-12 left-12 w-16 h-16 rounded-full bg-white/10 animate-float"></div>
            <div className="absolute bottom-12 right-12 w-12 h-12 rounded-full bg-white/10 animate-float-delayed"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 text-white">Book these and more, instantly</h3>
                  <p className="text-white/90 max-w-2xl text-lg">
                    Find businesses that fit your preferred roles, weekly schedule, and location. 
                    Start working at Singapore's top F&B venues today.
                  </p>
                </div>
                <Link href="/signup">
                  <Button className="bg-white hover:bg-gray-50 text-gray-900 text-lg px-8 py-6 rounded-xl shadow-xl transition-transform hover:scale-105 flex items-center">
                    Get Started <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
