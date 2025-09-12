'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, User, ShoppingCart, Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      name: 'SERVICES',
      submenu: [
        { name: 'General Car Service', href: '/services/general-service' },
        { name: 'Engine Diagnostics', href: '/services/diagnostics' },
        { name: 'Battery Replacement', href: '/services/battery' },
        { name: 'AC Service', href: '/services/ac-service' },
        { name: 'Denting & Painting', href: '/services/denting-painting' },
        { name: 'Brakes & Suspension', href: '/services/brakes-suspension' },
        { name: 'Tyre Replacement', href: '/services/tyre-replacement' },
      ]
    },
    {
      name: 'INSURANCE',
      submenu: [
        { name: 'Claim Assistance', href: '/insurance/claim-assistance' },
        { name: 'Documentation Help', href: '/insurance/documentation' },
        { name: 'Surveyor Coordination', href: '/insurance/surveyor' },
        { name: 'Direct Settlement', href: '/insurance/settlement' },
      ]
    },
    {
      name: 'PRICING',
      submenu: [
        { name: 'Service Pricing', href: '/pricing/services' },
        { name: 'Maintenance Packages', href: '/pricing/packages' },
        { name: 'Get Quote', href: '/pricing/quote' },
      ]
    },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-800 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📞 Contact us for service</span>
            <span>✉️ info@addaxautomotive.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-red-500 transition-colors">
              <User size={18} />
            </button>
            <button className="hover:text-red-500 transition-colors">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-red-500 bruno-ace-sc-regular">
            ADDAX<span className="text-white">AUTOMOTIVE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href || '#'}
                  className="flex items-center space-x-1 hover:text-red-500 transition-colors py-2 bruno-ace-regular"
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-black border border-gray-800 rounded-lg shadow-lg py-2 w-48 z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-red-500 hover:text-white transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-red-500 transition-colors">
              <Search size={20} />
            </button>
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.name} className="mb-4">
                  <Link
                    href={item.href || '#'}
                    className="block py-2 text-lg font-medium border-b border-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="mt-2 ml-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-gray-300 hover:text-red-500 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;