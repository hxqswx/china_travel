import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Globe, Menu, Search, User, Globe2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface-light/90 backdrop-blur-md border-b border-[#e7f3f2]">
      <div className="flex justify-center w-full">
        <div className="px-4 md:px-10 flex flex-1 items-center justify-between h-16 max-w-[1440px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 text-text-main group cursor-pointer">
            <div className="size-8 text-primary transition-transform group-hover:rotate-12">
              <Globe className="w-full h-full" />
            </div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight">
              China Travel <span className="font-normal opacity-80 text-sm md:text-base">| 中国旅游</span>
            </h1>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Destinations / 目的地</Link>
            <Link to="/details" className="text-sm font-medium hover:text-primary transition-colors">Itineraries / 行程</Link>
            <Link to="/booking" className="text-sm font-medium hover:text-primary transition-colors">Tickets / 门票</Link>
            <Link to="/profile" className="text-sm font-medium hover:text-primary transition-colors">Community / 社区</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/profile')}
              className="hidden sm:flex items-center justify-center rounded-full h-9 px-4 bg-primary text-text-main text-sm font-bold hover:bg-primary-dark transition-colors shadow-sm shadow-primary/20"
            >
              Log In / 登录
            </button>
            <button className="flex items-center justify-center size-9 rounded-full bg-[#e7f3f2] text-text-main hover:bg-[#d5ebe9] transition-colors">
              <span className="text-xs font-bold">CN</span>
            </button>
            <button 
              className="lg:hidden flex items-center justify-center size-9 text-text-main"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-surface-light border-b border-[#e7f3f2] p-4 flex flex-col gap-4 shadow-lg">
           <Link to="/" className="text-sm font-medium py-2 border-b border-gray-100">Destinations / 目的地</Link>
           <Link to="/details" className="text-sm font-medium py-2 border-b border-gray-100">Itineraries / 行程</Link>
           <Link to="/booking" className="text-sm font-medium py-2 border-b border-gray-100">Hotels / 酒店</Link>
           <Link to="/profile" className="text-sm font-medium py-2">Community / 社区</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;