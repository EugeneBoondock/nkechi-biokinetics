import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'} md:bg-white/90 md:backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/nkechi_logo.png" alt="Nkechi Biokinetics" className="h-12 w-auto" />
            <span className="text-xl font-bold text-primary-600">Nkechi does Biokinetics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="btn btn-primary text-sm px-6 py-2"
            >
              Book Appointment
            </Link>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-primary-50 text-primary-800 hover:bg-primary-100 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden mt-4 pb-4 bg-white shadow-lg rounded-lg border border-gray-100"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2.5 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary-100 text-primary-900'
                      : 'text-gray-900 hover:bg-primary-50 hover:text-primary-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                className="btn btn-primary w-full text-center py-2.5 mt-2"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
