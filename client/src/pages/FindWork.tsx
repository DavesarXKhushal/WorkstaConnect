
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Calendar, Star, Search, ChevronRight, CheckCircle2, ArrowRight, Filter, Sparkles, Briefcase, Award, Users } from "lucide-react";

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
  perks?: string[];
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
    featured: true,
    perks: ["Free meals", "Transport allowance"]
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
    requirements: ["Smart casual attire", "F&B experience"],
    perks: ["Performance bonus", "Flexible hours"]
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
    requirements: ["Customer service skills", "English proficiency"],
    perks: ["Team events", "Career growth"]
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
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/15 bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-300 mr-2" />
              <span className="text-sm font-medium text-white">New opportunities added daily</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find your next shift at Singapore's
              <span className="text-yellow-300"> top F&B venues</span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Browse through premium opportunities, work flexible hours, and earn competitive rates at the best restaurants and bars.
            </p>

            {/* Search Box */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="relative col-span-5">
                  <Input
                    type="text"
                    placeholder="Search venues or roles..."
                    className="pl-10 h-12"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                <Select value={location} onValueChange={setLocation} className="col-span-3">
                  <SelectTrigger className="h-12">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    <SelectItem value="outram-park">Outram Park</SelectItem>
                    <SelectItem value="city-hall">City Hall</SelectItem>
                    <SelectItem value="robertson-quay">Robertson Quay</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="h-12 bg-primary hover:bg-primary/90 text-white col-span-4 text-lg">
                  Search Shifts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-primary" />
                  Premium venues
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  Flexible hours
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-primary" />
                  Weekly payments
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Available Shifts</h2>
            <p className="text-gray-600">{filteredShifts.length} opportunities found</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-[160px]">
                <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All roles</SelectItem>
                <SelectItem value="Server">Server</SelectItem>
                <SelectItem value="Cook">Cook</SelectItem>
                <SelectItem value="Bartender">Bartender</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShifts.map((shift) => (
            <Card key={shift.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative">
                <img
                  src={shift.imageUrl}
                  alt={shift.businessName}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {shift.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-400/90 text-gray-900 backdrop-blur-sm font-semibold px-3 py-1">
                      <Star className="h-3.5 w-3.5 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
                {shift.logoUrl && (
                  <div className="absolute -bottom-6 left-4">
                    <div className="bg-white rounded-full p-1 shadow-lg">
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
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{shift.businessName}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{shift.businessType}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      {shift.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">{shift.role}</span>
                    <span className="text-lg font-semibold text-green-600">
                      ${shift.hourlyRate}/hr
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      {shift.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1.5" />
                      {shift.shifts} shifts
                    </div>
                  </div>

                  {shift.requirements && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">Requirements:</div>
                      <div className="flex flex-wrap gap-2">
                        {shift.requirements.map((req, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {shift.perks && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">Perks:</div>
                      <div className="flex flex-wrap gap-2">
                        {shift.perks.map((perk, i) => (
                          <Badge key={i} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                            <Star className="h-3 w-3 mr-1" />
                            {perk}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="bg-gray-50 border-t">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 group">
                  Apply Now
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
