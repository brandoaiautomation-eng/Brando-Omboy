import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCalculator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'works', label: 'Work', count: '6' },
    { id: 'services', label: 'Service', count: '4' },
    { id: 'experience', label: 'Experience', count: '5+' },
    { id: 'contact', label: 'Contact', count: null },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#7B7B7B]/20 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Pill: Brand Logo */}
          <button
            id="brand-availability-btn"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#7B7B7B]/30 hover:border-[#222222] transition-all text-xs font-bold text-[#222222] group shadow-sm"
          >
            <span className="font-syne tracking-wider text-sm">
              BRANDO <span className="text-[#7B7B7B]">OMBOY</span>
            </span>
          </button>

          {/* Center Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-[#FFFFFF] p-1.5 rounded-full border border-[#7B7B7B]/30 shadow-sm backdrop-blur-md">
            <button
              id="nav-link-hero"
              onClick={() => handleLinkClick('hero')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeSection === 'hero'
                  ? 'bg-[#222222] text-white shadow-sm'
                  : 'text-[#7B7B7B] hover:text-[#222222]'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                  activeSection === link.id
                    ? 'bg-[#222222] text-white shadow-sm'
                    : 'text-[#7B7B7B] hover:text-[#222222] hover:bg-[#F8F8F8]'
                }`}
              >
                <span>{link.label}</span>
                {link.count && (
                  <span className={`text-[10px] font-mono ${activeSection === link.id ? 'text-[#7B7B7B]' : 'text-[#7B7B7B]'}`}>
                    [{link.count}]
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              id="nav-talk-btn"
              onClick={() => handleLinkClick('contact')}
              className="flex items-center gap-2 text-xs font-bold text-white bg-[#222222] hover:bg-[#333333] px-5 py-2.5 rounded-full shadow-md transition-all active:scale-95 group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full text-[#222222] bg-[#FFFFFF] border border-[#7B7B7B]/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-dropdown" className="md:hidden bg-[#FFFFFF] border-b border-[#7B7B7B]/20 px-4 pt-4 pb-6 mt-3 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            <button
              id="mobile-nav-hero"
              onClick={() => handleLinkClick('hero')}
              className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeSection === 'hero' ? 'bg-[#222222] text-white' : 'text-[#7B7B7B] hover:bg-[#F8F8F8]'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#222222] text-white'
                    : 'text-[#7B7B7B] hover:bg-[#F8F8F8]'
                }`}
              >
                <span>{link.label}</span>
                {link.count && <span className="text-xs font-mono text-[#7B7B7B]">[{link.count}]</span>}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-[#7B7B7B]/20 flex flex-col gap-2">
              <button
                id="mobile-contact-btn"
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#222222] py-3 rounded-full"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

