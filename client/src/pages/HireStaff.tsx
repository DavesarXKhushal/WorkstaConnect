import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Users, Clock, Calendar, Ticket } from "lucide-react";

const HireStaff = () => {
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Qualified Staff On-Demand",
      description: "Access a pool of pre-vetted F&B professionals ready to fill your staffing gaps."
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      title: "Fast Response Times",
      description: "Get shifts filled within hours, not days. Our platform connects you with available workers instantly."
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-500" />,
      title: "Flexible Scheduling",
      description: "Post shifts for any time period - from same-day emergency cover to planned staffing needs."
    },
    {
      icon: <Ticket className="h-10 w-10 text-blue-500" />,
      title: "Simple Pricing",
      description: "Pay only for the hours worked, with no long-term contracts or hidden fees."
    }
  ];

  const steps = [
    "Create your business profile and verify your account",
    "Post shifts with details on roles, skills needed, and hourly rates",
    "Review applications from qualified professionals",
    "Confirm bookings and welcome your temporary staff"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Staff your business with qualified F&B professionals
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Say goodbye to staffing shortages. Worksta connects your Singapore F&B business with experienced, vetted staff on-demand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button className="bg-[#fdf568] text-gray-900 hover:bg-[#f7e436] w-full sm:w-auto">
                    Post Your First Shift
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Restaurant team" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why businesses choose Worksta</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">
              Getting staff for your F&B business has never been easier
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-[#fdf568] w-10 h-10 rounded-full flex items-center justify-center text-gray-900 font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/signup">
              <Button className="bg-[#fdf568] text-gray-900 hover:bg-[#f7e436]">
                Start Hiring Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="border-none max-w-4xl mx-auto">
            <CardContent className="pt-10">
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400 h-6 w-6" />
                  ))}
                </div>
                <blockquote className="text-2xl font-medium italic mb-6">
                  "Worksta has been a game-changer for our restaurant. We've been able to fill shifts within hours, even during peak holiday seasons."
                </blockquote>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-gray-600">Operations Manager, The Bistro Group</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to solve your staffing challenges?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of Singapore's top F&B venues using Worksta to build reliable, flexible teams.
          </p>
          <Link href="/signup">
            <Button className="bg-[#fdf568] text-gray-900 hover:bg-[#f7e436]">
              Create Business Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HireStaff;
