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
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/80 border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />
          
          {/* Main Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-2">
            <NavButton href="/find-work" active={location === '/find-work'}>
              Find work
            </NavButton>
            <NavButton href="/hire-staff" active={location === '/hire-staff'}>
              Hire staff
            </NavButton>
            <NavButton href="/" active={location === '/'}>
              Home
            </NavButton>
            <NavButton href="/faq" active={location === '/faq'}>
              Pro FAQ
            </NavButton>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:inline-block text-white hover:text-[#fdf568] font-medium">
              Log in
            </Link>
            <Link href="/signup" className="flex items-center">
              <Button className="rounded-full bg-white text-black font-bold hover:bg-white/90">
                Get started <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              type="button" 
              className="md:hidden p-2 text-white"
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
          <div className="md:hidden absolute left-0 right-0 bg-black/95 border-b border-white/10">
            <div className="px-4 py-5 space-y-3">
              <Link href="/find-work" className="block py-2 text-lg font-medium text-white hover:text-[#fdf568]">
                Find work
              </Link>
              <Link href="/hire-staff" className="block py-2 text-lg font-medium text-white hover:text-[#fdf568]">
                Hire staff
              </Link>
              <Link href="/" className="block py-2 text-lg font-medium text-white hover:text-[#fdf568]">
                Home
              </Link>
              <Link href="/faq" className="block py-2 text-lg font-medium text-white hover:text-[#fdf568]">
                Pro FAQ
              </Link>
              <Link href="/login" className="block py-2 text-lg font-medium text-white hover:text-[#fdf568]">
                Log in
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
  return (
    <Link href={href}>
      <Button 
        variant={active ? "default" : "ghost"} 
        className={`rounded-full px-4 ${active ? 'bg-white/20 text-white hover:bg-white/30' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
      >
        {children}
      </Button>
    </Link>
  );
};

export default Navbar;
