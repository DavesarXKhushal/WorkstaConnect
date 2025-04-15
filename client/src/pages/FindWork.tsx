import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Calendar } from "lucide-react";

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

const FindWork = () => {
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  const { data: shifts = [] } = useQuery<Shift[]>({
    queryKey: ['/api/shifts'],
  });

  // Filter shifts based on selected filters
  const filteredShifts = shifts.filter((shift) => {
    return (
      (location === "" || shift.location.includes(location)) &&
      (role === "" || shift.role === role)
    );
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Work</h1>
        <p className="text-xl text-gray-600">
          Browse available shifts at Singapore's top F&B venues and book instantly.
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filter Shifts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="location">Location</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location">
                  <SelectValue placeholder="All locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All locations</SelectItem>
                  <SelectItem value="Orchard Road">Orchard Road</SelectItem>
                  <SelectItem value="City Hall">City Hall</SelectItem>
                  <SelectItem value="Robertson Quay">Robertson Quay</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="role">
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
              <Label htmlFor="day">Day of Week</Label>
              <Select value={dayOfWeek} onValueChange={setDayOfWeek}>
                <SelectTrigger id="day">
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
      </Card>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredShifts.map((shift) => (
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
              <p className="text-gray-600 mb-4 flex items-center">
                <MapPin size={16} className="mr-1" />
                {shift.businessType} at {shift.location}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{shift.role}</span>
                  <span className="text-green-600 font-medium flex items-center">
                    <DollarSign size={16} />
                    S${shift.hourlyRate}/hr
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  {shift.shifts} shifts available
                </div>
              </div>

              <Button className="w-full bg-[#fdf568] text-gray-900 hover:bg-[#f7e436]">
                Book Shift
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredShifts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No shifts match your filters</h3>
          <p className="text-gray-600 mb-6">Try adjusting your filter criteria to see more shifts</p>
          <Button
            variant="outline"
            onClick={() => {
              setLocation("");
              setRole("");
              setDayOfWeek("");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      <div className="text-center mt-8">
        <p className="text-gray-600 mb-6">
          Don't see what you're looking for? New shifts are added daily!
        </p>
        <Link href="/signup">
          <Button className="bg-[#fdf568] text-gray-900 hover:bg-[#f7e436]">
            Create Account to Get Notified
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FindWork;
