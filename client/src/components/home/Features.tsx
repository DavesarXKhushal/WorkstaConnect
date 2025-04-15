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
      icon: <Calendar className="text-[#fdf568]" size={32} />,
      title: "Flexibility",
      description: "Work as much or as little as you want. Pick up only the gigs you like. It's totally up to you."
    },
    {
      icon: <Smartphone className="text-[#fdf568]" size={32} />,
      title: "Convenience",
      description: "We bring the gigs to you. Review offers, track earnings, manage your schedule all in your app."
    },
    {
      icon: <Utensils className="text-[#fdf568]" size={32} />,
      title: "Learn new skills",
      description: "Gain a broad range of experiences across cuisines & techniques with different venues or chefs."
    },
    {
      icon: <Users className="text-[#fdf568]" size={32} />,
      title: "Build a network",
      description: "Meet and connect with people in the industry who can help you develop and expand your career."
    },
    {
      icon: <Award className="text-[#fdf568]" size={32} />,
      title: "Gain reputation",
      description: "Prove yourself by earning positive ratings and reviews from your gigs at a variety of restaurants."
    },
    {
      icon: <Wallet className="text-[#fdf568]" size={32} />,
      title: "Get paid weekly",
      description: "See your earnings show up in your bank account or on your debit card every week."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-blue-950 py-20 md:py-28">
      <div className="container">
        <h2 className="text-4xl font-bold mb-16">Why work with Worksta?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="gradient-card p-8 rounded-xl">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between bg-black/50 p-8 rounded-xl border border-white/10">
          <div>
            <h3 className="text-3xl font-bold mb-3">Sign up and get shifts</h3>
            <p className="text-white/70 mb-6 md:mb-0">Join Worksta for free and earn more money now.</p>
          </div>
          <Link href="/signup">
            <Button className="btn-primary px-8 py-4 text-lg">
              GET STARTED <ChevronRight className="h-5 w-5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
