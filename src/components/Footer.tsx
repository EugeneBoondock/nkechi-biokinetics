import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-400">Nkechi</span>
              <span className="text-2xl font-bold text-white">Biokinetics</span>
            </div>
            <p className="text-gray-400">
              Empowering your health journey through personalized biokinetics care in Gauteng, South Africa.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">My Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/book" className="text-gray-400 hover:text-primary-400 transition-colors">Book Appointment</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 mt-0.5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">7584+GF, Philip Nel Park, Pretoria,<br />Gauteng, 0029<br />South Africa</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 text-primary-400" />
                <a href="tel:+27676791066" className="text-gray-400 hover:text-primary-400 transition-colors">+27 67 679 1066</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="h-4 w-4 text-primary-400" />
                <a href="mailto:aniamankechi@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">aniamankechi@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-white">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center">
                <FaClock className="h-5 w-5 text-primary-400 mr-2" />
                <span className="text-sm font-medium">Emergency appointments available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Nkechi Biokinetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
