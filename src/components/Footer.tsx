'use client';

import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Phone, 
  MapPin, 
  Clock,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' }
  ];

  const services = [
    { name: 'General Car Service', href: '/services/general-service' },
    { name: 'Engine Diagnostics', href: '/services/diagnostics' },
    { name: 'Battery Replacement', href: '/services/battery' },
    { name: 'AC Service', href: '/services/ac-service' },
    { name: 'Brakes & Suspension', href: '/services/brakes-suspension' }
  ];

  const insurance = [
    { name: 'Claim Assistance', href: '/insurance/claim-assistance' },
    { name: 'Documentation Help', href: '/insurance/documentation' },
    { name: 'Surveyor Coordination', href: '/insurance/surveyor' },
    { name: 'Direct Settlement', href: '/insurance/settlement' },
    { name: 'Insurance Partners', href: '/insurance/partners' }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="text-2xl font-bold text-red-500 mb-6 block bruno-ace-sc-regular">
                ADDAX<span className="text-white">AUTOMOTIVE</span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted automotive service center in Chennai. We provide professional 
                car repair, AC services, denting & painting, and general maintenance 
                with quality workmanship and reasonable prices.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone size={16} className="text-red-500 mr-3" />
                  <span className="text-gray-400">Contact us for Service & Assistance - 93630 39969</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={16} className="text-red-500 mr-3 mt-1" />
                  <span className="text-gray-400">
                    No.17, Andal Nagar, Masilamani Street,<br />
                    Opposite To SV High School, Vanagaram,<br />
                    Chennai, Tamil Nadu 600095
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="text-red-500 mr-3" />
                  <span className="text-gray-400">Open 24/7 - All days</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                    >
                      <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                    >
                      <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insurance */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Insurance</h4>
              <ul className="space-y-3">
                {insurance.map((insuranceItem) => (
                  <li key={insuranceItem.name}>
                    <Link
                      href={insuranceItem.href}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                    >
                      <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {insuranceItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ADDAX AUTOMOTIVE. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <Facebook size={20} />
              </Link>
              <Link 
                href="https://www.instagram.com/addax_automotive/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <Instagram size={20} />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <Twitter size={20} />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
          
          {/* Additional Links */}
          <div className="mt-4 pt-4 border-t border-gray-900 flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-red-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-red-500 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-red-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;