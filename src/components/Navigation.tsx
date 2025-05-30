
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-cyber-green/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-fira font-bold text-xl text-cyber-green">
            PK<span className="text-white">.</span>
          </Link>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyber-green transition-colors duration-300 font-space"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-cyber-green transition-colors duration-300 font-space"
            >
              Projects
            </button>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-cyber-green transition-colors duration-300 font-space"
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-cyber-green transition-colors duration-300 font-space"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-cyber-green hover:bg-cyber-green/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-cyber-green/20">
            <div className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-cyber-green transition-colors duration-300 font-space text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-cyber-green transition-colors duration-300 font-space text-left py-2"
              >
                Projects
              </button>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-cyber-green transition-colors duration-300 font-space text-left py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-cyber-green transition-colors duration-300 font-space text-left py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
