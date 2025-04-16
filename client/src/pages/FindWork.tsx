import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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

  useEffect(() => {
    const filtered = shifts.filter((shift) => {
      return (
        (location === "" || shift.location.includes(location)) &&
        (role === "" || shift.role === role)
      );
    });
    setFilteredShifts(filtered);

    let count = 0;
    if (location !== "") count++;
    if (role !== "") count++;
    if (dayOfWeek !== "") count++;
    setActiveFilters(count);
  }, [location, role, dayOfWeek, shifts]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Work anytime, get paid on time</h1>
            <p className="text-xl text-white/90 mb-8">
              Pick up shifts at top F&B venues across Singapore. Work at your own schedule and get paid weekly.
            </p>

            {/* Search Box */}
            <Card className={`p-6 bg-white/95 backdrop-blur-sm shadow-xl transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="pl-10 h-12">
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All locations</SelectItem>
                      <SelectItem value="Outram Park">Outram Park</SelectItem>
                      <SelectItem value="City Hall">City Hall</SelectItem>
                      <SelectItem value="Robertson Quay">Robertson Quay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger className="pl-10 h-12">
                      <SelectValue placeholder="All roles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All roles</SelectItem>
                      <SelectItem value="Server">Server</SelectItem>
                      <SelectItem value="Cook">Cook</SelectItem>
                      <SelectItem value="Bartender">Bartender</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="h-12 bg-primary hover:bg-primary/90 text-gray-900">
                  <Search className="h-5 w-5 mr-2" /> Find Shifts
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 mt-4 justify-center">
                <div className="text-xs bg-blue-100 text-blue-800 rounded-full px-3 py-1 font-medium">
                  <Star className="h-3 w-3 inline mr-1" /> Premium venues
                </div>
                <div className="text-xs bg-green-100 text-green-800 rounded-full px-3 py-1 font-medium">
                  <DollarSign className="h-3 w-3 inline mr-1" /> Weekly payments
                </div>
                <div className="text-xs bg-purple-100 text-purple-800 rounded-full px-3 py-1 font-medium">
                  <Calendar className="h-3 w-3 inline mr-1" /> Flexible schedule
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Available Shifts Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Available Shifts</h2>
              <p className="text-gray-600">
                {filteredShifts.length} shifts available
                {activeFilters > 0 && ` • ${activeFilters} filters applied`}
              </p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filters
            </Button>
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
                      <span className="bg-primary text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
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
                      <span className="font-medium">{shift.role}</span>
                      <span className="text-green-600 font-medium">
                        S${shift.hourlyRate}/hr
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
                            <CheckCircle2 className="h-4 w-4 mr-1 text-primary" />
                            {req}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="border-t bg-gray-50">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-gray-900">
                    Book Shift
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl overflow-hidden">
          <div className="px-8 py-12 md:py-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to start earning?</h3>
            <p className="text-white/90 text-lg mb-8">
              Create an account now to receive job alerts and book shifts instantly.
            </p>
            <Link href="/signup">
              <Button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-6 rounded-full text-lg">
                Get Started <ChevronRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindWork;