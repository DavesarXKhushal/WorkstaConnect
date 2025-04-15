import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-md p-1">
              <span className="text-2xl font-bold text-[#fdf568]">Worksta</span>
            </div>
          </Link>
          
          {/* Main Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/find-work" className={`text-gray-700 hover:text-primary font-medium ${location === '/find-work' ? 'text-primary' : ''}`}>
              Find work
            </Link>
            <Link href="/hire-staff" className={`text-gray-700 hover:text-primary font-medium ${location === '/hire-staff' ? 'text-primary' : ''}`}>
              Hire staff
            </Link>
            <Link href="/" className={`text-gray-700 hover:text-primary font-medium ${location === '/' ? 'text-primary' : ''}`}>
              Home
            </Link>
            <Link href="/faq" className={`text-gray-700 hover:text-primary font-medium ${location === '/faq' ? 'text-primary' : ''}`}>
              Pro FAQ
            </Link>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="hidden sm:inline-block text-gray-700 hover:text-primary font-medium">
              Log in
            </Link>
            <Link href="/signup">
              <Button className="bg-[#fdf568] text-gray-900 hover:bg-[#f7e436]">
                Get started
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              type="button" 
              className="md:hidden bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/find-work" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                Find work
              </Link>
              <Link href="/hire-staff" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                Hire staff
              </Link>
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                Home
              </Link>
              <Link href="/faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                Pro FAQ
              </Link>
              <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                Log in
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
