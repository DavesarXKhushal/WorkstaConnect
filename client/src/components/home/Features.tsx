import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Smartphone, 
  Utensils, 
  Users, 
  Diamond, 
  Wallet 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="text-blue-500" size={24} />,
      title: "Flexibility",
      description: "Work as much or as little as you want. Pick up only the gigs you like. It's totally up to you."
    },
    {
      icon: <Smartphone className="text-blue-500" size={24} />,
      title: "Convenience",
      description: "We bring the gigs to you. Review offers, track earnings, manage your schedule all in your app."
    },
    {
      icon: <Utensils className="text-blue-500" size={24} />,
      title: "Learn new skills",
      description: "Gain a broad range of experiences across cuisines & techniques with different venues or chefs."
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "Build a network",
      description: "Meet and connect with people in the industry who can help you develop and expand your career."
    },
    {
      icon: <Diamond className="text-blue-500" size={24} />,
      title: "Gain reputation",
      description: "Prove yourself by earning positive ratings and reviews from your gigs at a variety of restaurants."
    },
    {
      icon: <Wallet className="text-blue-500" size={24} />,
      title: "Get paid weekly",
      description: "See your earnings show up in your bank account or on your debit card every week."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Why work with Worksta?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold mb-6">Sign up and get shifts</h4>
          <p className="text-gray-600 mb-8">Join Worksta for free and earn more money now.</p>
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

export default Features;
