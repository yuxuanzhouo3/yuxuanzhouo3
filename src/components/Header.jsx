// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Menu, X, Rocket } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: '首页',
    href: '#home'
  }, {
    name: '功能',
    href: '#features'
  }, {
    name: '体验',
    href: '#experience'
  }, {
    name: '联系我们',
    href: '#contact'
  }];
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">OrbitChat</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                {item.name}
              </a>)}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden py-4">
            {navItems.map(item => <a key={item.name} href={item.href} className="block py-2 text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>)}
          </div>}
      </div>
    </header>;
}