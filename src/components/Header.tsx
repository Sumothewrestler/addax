'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, User, ShoppingCart, Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToService = (serviceId: number) => {
    const element = document.getElementById(`service-${serviceId}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest' 
      });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest' 
      });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      name: 'SERVICES',
      submenu: [
        { name: 'General Car Service', serviceId: 1 },
        { name: 'Engine Diagnostics', serviceId: 2 },
        { name: 'Battery Replacement', serviceId: 3 },
        { name: 'AC Service', serviceId: 4 },
        { name: 'Denting & Painting', serviceId: 5 },
        { name: 'Brakes & Suspension', serviceId: 6 },
        { name: 'Tyre Replacement', serviceId: 7 },
      ]
    },
    {
      name: 'INSURANCE',
      submenu: [
        { name: 'Insurance Claim Assistance', serviceId: 8 },
        { name: 'Insurance Section', sectionId: 'insurance' },
      ]
    },
    {
      name: 'PRICING',
      submenu: [
        { name: 'Service Pricing', sectionId: 'pricing' },
        { name: 'Maintenance Packages', sectionId: 'pricing' },
      ]
    },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', sectionId: 'contact' },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-800 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📞 Contact us for Service & Assistance - 93630 39969</span>
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
                <button
                  onClick={() => {
                    if (item.href) {
                      window.location.href = item.href;
                    } else if (item.sectionId) {
                      scrollToSection(item.sectionId);
                    }
                  }}
                  className="flex items-center space-x-1 hover:text-red-500 transition-colors py-2 bruno-ace-regular"
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown size={16} />}
                </button>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-black border border-gray-800 rounded-lg shadow-lg py-2 w-48 z-50">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => {
                          if (subItem.serviceId) {
                            scrollToService(subItem.serviceId);
                          } else if (subItem.sectionId) {
                            scrollToSection(subItem.sectionId);
                          }
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white transition-colors"
                      >
                        {subItem.name}
                      </button>
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
                  <button
                    onClick={() => {
                      if (item.href) {
                        window.location.href = item.href;
                      } else if (item.sectionId) {
                        scrollToSection(item.sectionId);
                      }
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-lg font-medium border-b border-gray-800"
                  >
                    {item.name}
                  </button>
                  {item.submenu && (
                    <div className="mt-2 ml-4">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => {
                            if (subItem.serviceId) {
                              scrollToService(subItem.serviceId);
                            } else if (subItem.sectionId) {
                              scrollToSection(subItem.sectionId);
                            }
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left py-1 text-gray-300 hover:text-red-500 transition-colors"
                        >
                          {subItem.name}
                        </button>
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