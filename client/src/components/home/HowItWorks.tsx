import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-black">
      <div className="container">
        <h2 className="text-4xl font-bold mb-16">How it works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6 relative">
              <img 
                src="https://images.unsplash.com/photo-1611095973763-414019e72400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Looking at phone" 
                className="rounded-xl h-64 w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-2 bg-[#fdf568] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 mt-10">Find businesses you like</h3>
            <p className="text-white/70">Find restaurants with your preferred areas, roles, or working hours.</p>
          </div>
          
          <div>
            <div className="mb-6 relative">
              <img 
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Scheduling calendar" 
                className="rounded-xl h-64 w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-2 bg-[#fdf568] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 mt-10">Book shifts you want</h3>
            <p className="text-white/70">Check the days that you can work and book these shifts.</p>
          </div>
          
          <div>
            <div className="mb-6 relative">
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Getting paid" 
                className="rounded-xl h-64 w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-2 bg-[#fdf568] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 mt-10">Work and get paid every week</h3>
            <p className="text-white/70">Add your bank account, show up, and work. Worksta credits your weekly pay to your bank account every Monday.</p>
          </div>
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-3">Download Worksta now</h3>
            <p className="text-white/70 mb-8 md:mb-0">Join Worksta for free and book shifts instantly.</p>
          </div>
          <Link href="/signup">
            <Button className="btn-primary text-lg px-8 py-4">
              GET STARTED <ChevronRight className="h-5 w-5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
