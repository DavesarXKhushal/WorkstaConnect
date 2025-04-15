import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-xl font-bold">1</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1611095973763-414019e72400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Looking at phone" 
              className="rounded-lg h-48 w-full object-cover mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Find businesses you like</h3>
            <p className="text-gray-600">Find restaurants with your preferred areas, roles, or working hours.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-xl font-bold">2</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Scheduling calendar" 
              className="rounded-lg h-48 w-full object-cover mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Book shifts you want</h3>
            <p className="text-gray-600">Check the days that you can work and book these shifts.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-xl font-bold">3</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Getting paid" 
              className="rounded-lg h-48 w-full object-cover mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Work and get paid every week</h3>
            <p className="text-gray-600">Add your bank account, show up, and work. Worksta credits your weekly pay to your bank account every Monday.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold mb-6">Download Worksta now</h4>
          <p className="text-gray-600 mb-8">Join Worksta for free and book shifts instantly.</p>
          <Link href="/signup">
            <Button className="bg-[#fdf568] text-gray-900 hover:bg-[#f7e436]">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
