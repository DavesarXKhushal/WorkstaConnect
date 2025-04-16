import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Calendar, Star, Search, ChevronRight, CheckCircle2, ArrowRight, Filter, Sparkles } from "lucide-react";

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
    imageUrl: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://www.staffie.app/static/clos-pasoh-aa7138b998ada3b2496745db10302698.jpg",
    rating: 4.5,
    distance: "1.2 km",
    date: "Sat, Apr 20",
    requirements: ["Black uniform", "Prior experience"],
    featured: true
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
    imageUrl: "https://www.staffie.app/static/harry-chijmes-0714ead2ea09babfce9705f19192c2ed.jpeg",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg",
    rating: 4.8,
    distance: "3.5 km",
    date: "Mon, Apr 22",
    requirements: ["Smart casual attire", "F&B experience"]
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
    imageUrl: "https://www.staffie.app/static/super-loco-db744603ff84a7de15636874ceacb705.jpeg",
    logoUrl: "https://www.super-loco.com/wp-content/uploads/2022/06/Super-Loco-Logo.png",
    rating: 4.7,
    distance: "0.8 km",
    date: "Tue, Apr 16",
    requirements: ["Customer service skills", "English proficiency"]
  }
];

const FindWork = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [filteredShifts, setFilteredShifts] = useState<Shift[]>([]);

  const { data: shifts = mockShifts } = useQuery<Shift[]>({
    queryKey: ['/api/shifts'],
    initialData: mockShifts
  });

  useEffect(() => {
    const filtered = shifts.filter((shift) => {
      const matchesSearch = shift.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          shift.businessType.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = !location || shift.location === location;
      const matchesRole = !role || shift.role === role;
      return matchesSearch && matchesLocation && matchesRole;
    });
    setFilteredShifts(filtered);
  }, [searchTerm, location, role, shifts]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Find your next shift</h1>
            <p className="text-xl text-white/90 mb-8">
              Browse through available shifts at top F&B venues across Singapore
            </p>

            {/* Search Box */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative col-span-2">
                  <Input
                    type="text"
                    placeholder="Search venues or roles..."
                    className="pl-10 h-12"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    <SelectItem value="outram-park">Outram Park</SelectItem>
                    <SelectItem value="city-hall">City Hall</SelectItem>
                    <SelectItem value="robertson-quay">Robertson Quay</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="h-12 bg-primary hover:bg-primary/90 text-white">
                  Search Shifts
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Available Shifts</h2>
            <p className="text-gray-600">{filteredShifts.length} opportunities found</p>
          </div>
          <div className="flex gap-4">
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All roles</SelectItem>
                <SelectItem value="Server">Server</SelectItem>
                <SelectItem value="Cook">Cook</SelectItem>
                <SelectItem value="Bartender">Bartender</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShifts.map((shift) => (
            <Card key={shift.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={shift.imageUrl}
                  alt={shift.businessName}
                  className="w-full h-48 object-cover"
                />
                {shift.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
                {shift.logoUrl && (
                  <div className="absolute -bottom-6 left-4">
                    <div className="bg-white rounded-full p-1 shadow-md">
                      <img
                        src={shift.logoUrl}
                        alt={`${shift.businessName} logo`}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="pt-8">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-1">{shift.businessName}</h3>
                  <p className="text-gray-600 text-sm">
                    {shift.businessType} • {shift.location}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text, font-medium">{shift.role}</span>
                    <span className="text-green-600 font-medium">
                      ${shift.hourlyRate}/hr
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    {shift.date}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {shift.shifts} shifts available
                  </div>

                  {shift.requirements && (
                    <div className="pt-2">
                      {shift.requirements.map((req, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600 mb-1">
                          <CheckCircle2 className="h-4 w-4 mr-1 text-green-500" />
                          {req}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="bg-gray-50 border-t">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Apply Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindWork;