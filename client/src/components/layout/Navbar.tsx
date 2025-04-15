import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Just show the logo without text */}
          <Logo showText={false} size="large" />
          
          {/* Main Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-4">
            <NavButton href="/" active={location === '/'}>
              Home
            </NavButton>
            <NavButton href="/find-work" active={location === '/find-work'}>
              Find work
            </NavButton>
            <NavButton href="/hire-staff" active={location === '/hire-staff'}>
              Hire staff
            </NavButton>
            <NavButton href="/faq" active={location === '/faq'}>
              FAQ
            </NavButton>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden sm:inline-block text-gray-700 hover:text-primary font-medium">
              Log in
            </Link>
            <Link href="/signup" className="flex items-center">
              <Button className="btn-primary rounded-full px-6 py-2 h-auto">
                Get started <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              type="button" 
              className="md:hidden p-2 text-gray-700"
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
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg border-b border-gray-100">
            <div className="px-6 py-5 space-y-3">
              <Link href="/" className="block py-2 text-lg font-medium text-gray-800 hover:text-primary">
                Home
              </Link>
              <Link href="/find-work" className="block py-2 text-lg font-medium text-gray-800 hover:text-primary">
                Find work
              </Link>
              <Link href="/hire-staff" className="block py-2 text-lg font-medium text-gray-800 hover:text-primary">
                Hire staff
              </Link>
              <Link href="/faq" className="block py-2 text-lg font-medium text-gray-800 hover:text-primary">
                FAQ
              </Link>
              <Link href="/login" className="block py-2 text-lg font-medium text-gray-800 hover:text-primary">
                Log in
              </Link>
              <Link href="/signup" className="block py-2 mt-4">
                <Button className="w-full btn-primary rounded-full py-2 h-auto">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavButtonProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

const NavButton = ({ href, active, children }: NavButtonProps) => {
  const className = `px-4 py-2 font-medium rounded-full transition-colors ${
    active 
      ? 'text-primary font-semibold' 
      : 'text-gray-700 hover:text-primary'
  }`;
  
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default Navbar;
