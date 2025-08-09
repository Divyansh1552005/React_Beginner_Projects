import React, { useState } from 'react'
import {Container , Logo, LogoutBtn} from '../index.js'
import UserDropdown from './UserDropdown'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to scroll to top when navigating
  const handleNavClick = (slug) => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Function to check if current path matches the nav item
  const isActive = (slug) => {
    return location.pathname === slug;
  };

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "About Us",
      slug: "/about",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Create Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-xl'>
      <Container>
        <nav className='flex items-center justify-between py-4'>
          {/* Logo Section */}
          <div className='flex items-center space-x-2'>
            <Link to='/' className='flex items-center space-x-2 hover:opacity-80 transition-opacity'>
              <Logo width='40px' />
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
                BlogSpace
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex items-center space-x-1'>
            {navItems.map((item) => 
              item.active ? (
                <Link
                  key={item.name}
                  to={item.slug}
                  onClick={() => handleNavClick(item.slug)}
                  className={`relative px-4 py-2 font-medium transition-all duration-200 cursor-pointer ${
                    isActive(item.slug) 
                      ? 'text-sky-400' 
                      : 'text-gray-300 hover:text-white'
                  } hover:bg-gray-800 rounded-lg`}
                >
                  {item.name}
                  {isActive(item.slug) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-sky-400 rounded-full"></div>
                  )}
                </Link>
              ) : null
            )}
          </div>

          {/* Mobile Menu Button & Auth Section */}
          <div className='flex items-center space-x-4'>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200 cursor-pointer'
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Auth Section */}
            {authStatus ? (
              <UserDropdown />
            ) : (
              <div className='hidden md:flex items-center space-x-3'>
                <Link
                  to="/login"
                  onClick={() => handleNavClick("/login")}
                  className='px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors duration-200 cursor-pointer'
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => handleNavClick("/signup")}
                  className='px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer'
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden border-t border-gray-700 py-4'>
            <div className='space-y-2'>
              {navItems.map((item) => 
                item.active ? (
                  <Link
                    key={item.name}
                    to={item.slug}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavClick(item.slug);
                    }}
                    className={`relative block px-4 py-3 font-medium transition-all duration-200 rounded-lg cursor-pointer ${
                      isActive(item.slug) 
                        ? 'text-sky-400 bg-gray-800' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                    {isActive(item.slug) && (
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-sky-400 rounded-full"></div>
                    )}
                  </Link>
                ) : null
              )}
              
              {/* Mobile Auth Buttons */}
              {!authStatus && (
                <div className='pt-4 border-t border-gray-700 space-y-2'>
                  <Link
                    to="/login"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavClick("/login");
                    }}
                    className='block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200 font-medium text-center cursor-pointer'
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavClick("/signup");
                    }}
                    className='block px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-200 font-medium text-center shadow-lg cursor-pointer'
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Mobile Profile Menu */}
              {authStatus && (
                <div className='pt-4 border-t border-gray-700'>
                  <div className='px-4 py-2 mb-2'>
                    <p className='text-sm font-medium text-white'>{userData?.name || 'User'}</p>
                    <p className='text-xs text-gray-400'>{userData?.email || 'user@example.com'}</p>
                  </div>
                  <Link
                    to="/my-posts"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavClick("/my-posts");
                    }}
                    className='block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200 cursor-pointer'
                  >
                    My Posts
                  </Link>
                  <Link
                    to="/account"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavClick("/account");
                    }}
                    className='block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200 cursor-pointer'
                  >
                    Account Settings
                  </Link>
                  <div className='px-4 pt-2'>
                    <LogoutBtn />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header