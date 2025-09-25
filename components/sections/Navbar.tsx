'use client';

import Link from 'next/link';
import { useState } from 'react';
import { X, User } from 'lucide-react';
import CartIcon from '@/components/ui/CartIcon';
import { useAuth } from '@/contexts/AuthContext';
import UserDropdown from '@/components/auth/UserDropdown';
import AuthModal from '@/components/auth/AuthModal';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, loading } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer group">
              <img 
                src="/logo.png" 
                alt="9G Speednet Logo" 
                width="120"
                height="48"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="#services" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link href="/store" className="relative text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium text-sm group">
              Store
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Button & Cart & Auth */}
          <div className="hidden md:flex items-center space-x-3">
            <CartIcon />
            
            {!loading && (
              <>
                {user ? (
                  <UserDropdown />
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="flex items-center px-4 py-2.5 text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </button>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center space-x-2">
            <CartIcon />
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary-500 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium py-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <a 
              href="#services" 
              className="block text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium py-2"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a 
              href="#features" 
              className="block text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium py-2"
              onClick={closeMobileMenu}
            >
              Features
            </a>
            <a 
              href="#about" 
              className="block text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium py-2"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium py-2"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
            <Link 
              href="/store" 
              className="block text-gray-700 hover:text-primary-500 transition-colors duration-300 font-medium py-2"
              onClick={closeMobileMenu}
            >
              Store
            </Link>

            {/* Auth Buttons */}
            <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
              {!loading && (
                <>
                  {user ? (
                    <div className="flex items-center space-x-3 px-2 py-2 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {(user.user_metadata?.full_name || user.email?.split('@')[0] || 'U').charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        closeMobileMenu();
                      }}
                      className="w-full flex items-center justify-center px-4 py-3 border-2 border-primary-500 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
}