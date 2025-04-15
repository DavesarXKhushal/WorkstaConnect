import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-gray-600 mt-6 max-w-xs">The F&B gig platform that works for both businesses and staff across Singapore.</p>
            <div className="flex space-x-4 mt-8">
              <a href="https://instagram.com" className="bg-white p-2 rounded-full text-gray-500 hover:text-primary shadow-sm border border-gray-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="bg-white p-2 rounded-full text-gray-500 hover:text-primary shadow-sm border border-gray-100 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="bg-white p-2 rounded-full text-gray-500 hover:text-primary shadow-sm border border-gray-100 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-3 gap-12">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-5">Looking for work?</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/find-work" className="text-gray-600 hover:text-primary transition-colors">
                    Find Work
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-600 hover:text-primary transition-colors">
                    Sign up as Pro
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-5">Hire your staff</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/hire-staff" className="text-gray-600 hover:text-primary transition-colors">
                    Business Home
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-600 hover:text-primary transition-colors">
                    Sign up as Business
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-600 hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                    Contact Sales
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-5">Contact us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <a href="mailto:hello@worksta.sg" className="text-gray-600 hover:text-primary transition-colors">
                    hello@worksta.sg
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <a href="tel:+6565551234" className="text-gray-600 hover:text-primary transition-colors">
                    +65 6555 1234
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    71 Ayer Rajah Crescent, #06-01, Singapore 139951
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; 2025 Worksta Pte. Ltd. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-500 text-sm hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-500 text-sm hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
