import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search, Calendar, CreditCard } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">How it works</h2>
          <p className="section-subtitle mx-auto">Three simple steps to start working at top venues in Singapore</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="group">
            <div className="mb-8 relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Person looking at restaurant listings on phone" 
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-4 left-4 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                <div className="flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Find businesses you like</h3>
            <p className="text-gray-600">Browse through our premium selection of restaurants, cafes, and bars in Singapore. Filter by location, role type, and working hours to find the perfect match.</p>
          </div>
          
          <div className="group">
            <div className="mb-8 relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Person booking shifts on calendar" 
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-4 left-4 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                <div className="flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Book shifts you want</h3>
            <p className="text-gray-600">Select the days and times that work for you. With Worksta, you have complete flexibility to choose when and where you want to work - no minimum hours required.</p>
          </div>
          
          <div className="group">
            <div className="mb-8 relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Person receiving payment" 
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-4 left-4 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                <div className="flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Work and get paid weekly</h3>
            <p className="text-gray-600">Show up, do great work, and get paid every Monday like clockwork. No chasing payments or waiting for payday - reliable income on your schedule.</p>
          </div>
        </div>
        
        <div className="mt-20 bg-gray-900 text-white p-10 md:p-12 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-3">Download Worksta now</h3>
              <p className="text-white/80 mb-8 md:mb-0 max-w-xl">Join thousands of professionals on Worksta and start booking premium shifts instantly.</p>
            </div>
            <Link href="/signup">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-md">
                Get Started <ChevronRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
