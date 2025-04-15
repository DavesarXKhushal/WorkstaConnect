import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Work anytime, get paid on time.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Worksta is the easiest way to pick up shifts at F&B businesses across Singapore. Work at nearby venues in your own time and get paid weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button className="bg-[#fdf568] text-gray-900 hover:bg-[#f7e436] w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="link" className="text-primary hover:text-primary-dark w-full sm:w-auto">
                  Learn more →
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Restaurant staff working" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
