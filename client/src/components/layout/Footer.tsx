import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-white/70 mt-6">The F&B gig platform that works</p>
            <div className="flex space-x-4 mt-8">
              <a href="https://instagram.com" className="text-white/70 hover:text-[#fdf568] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" className="text-white/70 hover:text-[#fdf568] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-white/70 hover:text-[#fdf568] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 md:col-span-3 gap-10">
            <div>
              <h4 className="font-bold text-xl mb-4">Looking for work?</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/find-work" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    Find Work
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    Sign up as Pro
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-4">Hire your staff</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/hire-staff" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    Business Home
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    Sign up as Business
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    Contact Sales
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@worksta.sg" className="text-white/70 hover:text-[#fdf568] transition-colors">
                    hello@worksta.sg
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">&copy; 2025 Worksta Pte. Ltd. All Rights Reserved.</p>
          <p className="text-white/50 text-sm">71 Ayer Rajah Crescent, #06-01, Singapore 139951</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
