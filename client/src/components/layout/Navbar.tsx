import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Initialize mounted state for animations
    setMounted(true);
    
    // Add scroll event listener
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo with animation */}
          <div className={`transition-all duration-700 transform ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <Logo showText={true} size="medium" className="hover:scale-105 transition-transform duration-300" />
          </div>
          
          {/* Main Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/find-work', label: 'Find work' },
              { path: '/hire-staff', label: 'Hire staff' },
              { path: '/faq', label: 'FAQ' }
            ].map((item, index) => (
              <NavButton 
                key={item.path} 
                href={item.path} 
                active={location === item.path}
                className={`transition-all duration-700 delay-${index * 100} transform ${
                  mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {item.label}
              </NavButton>
            ))}
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className={`hidden sm:inline-block text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-full transition-all hover:bg-gray-50 duration-700 transform ${
                mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className={`flex items-center transition-all duration-700 delay-100 transform ${
                mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <Button className="btn-primary rounded-full px-6 py-2 h-auto group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Get started 
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              type="button" 
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu with animations */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-5 space-y-3">
            {[
              { path: '/', label: 'Home' },
              { path: '/find-work', label: 'Find work' },
              { path: '/hire-staff', label: 'Hire staff' },
              { path: '/faq', label: 'FAQ' },
              { path: '/login', label: 'Log in' }
            ].map((item, index) => (
              <Link 
                key={item.path}
                href={item.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-lg font-medium ${
                  location === item.path ? 'text-primary' : 'text-gray-800 hover:text-primary'
                } transition-all hover:translate-x-1 duration-300 ease-in-out`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/signup" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 mt-4"
            >
              <Button className="w-full btn-primary rounded-full py-2 h-auto group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Get started 
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavButtonProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
}

const NavButton = ({ href, active, children, className = '' }: NavButtonProps) => {
  return (
    <Link 
      href={href} 
      className={`px-4 py-2 font-medium rounded-full relative group ${
        active 
          ? 'text-primary font-semibold' 
          : 'text-gray-700 hover:text-primary'
      } ${className}`}
    >
      {children}
      
      {/* Animated underline effect */}
      <span 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
          active ? 'w-8' : 'w-0 group-hover:w-6'
        }`}
      />
    </Link>
  );
};

export default Navbar;
