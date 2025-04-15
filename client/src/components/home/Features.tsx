import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { 
  Calendar, 
  Smartphone, 
  Utensils, 
  Users, 
  Award, 
  Wallet 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="text-primary" size={28} />,
      title: "Flexibility",
      description: "Work as much or as little as you want. Pick up only the gigs you like. It's totally up to you."
    },
    {
      icon: <Smartphone className="text-primary" size={28} />,
      title: "Convenience",
      description: "We bring the gigs to you. Review offers, track earnings, manage your schedule all in your app."
    },
    {
      icon: <Utensils className="text-primary" size={28} />,
      title: "Learn new skills",
      description: "Gain a broad range of experiences across cuisines & techniques with different venues or chefs."
    },
    {
      icon: <Users className="text-primary" size={28} />,
      title: "Build a network",
      description: "Meet and connect with people in the industry who can help you develop and expand your career."
    },
    {
      icon: <Award className="text-primary" size={28} />,
      title: "Gain reputation",
      description: "Prove yourself by earning positive ratings and reviews from your gigs at a variety of restaurants."
    },
    {
      icon: <Wallet className="text-primary" size={28} />,
      title: "Get paid weekly",
      description: "See your earnings show up in your bank account or on your debit card every week."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why work with Worksta?</h2>
          <p className="section-subtitle mx-auto">We connect you with top F&B businesses in Singapore looking for qualified staff</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl shadow-sm border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Sign up and get shifts</h3>
              <p className="text-gray-600 mb-6 md:mb-0 max-w-xl">Join Worksta for free and earn more money now. Top venues are looking for staff like you.</p>
            </div>
            <Link href="/signup">
              <Button className="btn-primary px-8 py-4 text-lg">
                Get Started <ChevronRight className="h-5 w-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
