import React, { useState } from 'react'
import {Container , Logo, LogoutBtn} from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

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
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  const profileMenuItems = [
    { name: 'Profile', action: () => navigate('/profile') },
    { name: 'Settings', action: () => navigate('/settings') },
    { name: 'Account', action: () => navigate('/account') },
  ];

  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm'>
      <Container>
        <nav className='flex items-center justify-between py-4'>
          {/* Logo Section */}
          <div className='flex items-center space-x-2'>
            <Link to='/' className='flex items-center space-x-2 hover:opacity-80 transition-opacity'>
              <Logo width='40px' />
              <span className='text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                BlogSpace
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex items-center space-x-1'>
            {navItems.map((item) => 
              item.active ? (
                <Link
                  key={item.name}
                  to={item.slug}
                  className='px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium'
                >
                  {item.name}
                </Link>
              ) : null
            )}
          </div>

          {/* Auth Section */}
          <div className='flex items-center space-x-4'>
            {authStatus ? (
              <div className='relative'>
                {/* Profile Dropdown */}
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className='flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200'
                >
                  {/* Avatar */}
                  <div className='w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                    {userData?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  {/* User Info */}
                  <div className='hidden md:block text-left'>
                    <p className='text-sm font-medium text-gray-900'>
                      {userData?.name || 'User'}
                    </p>
                    <p className='text-xs text-gray-500'>
                      {userData?.email || 'user@example.com'}
                    </p>
                  </div>
                  {/* Dropdown Arrow */}
                  <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className='absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50'>
                    {/* User Info in Dropdown */}
                    <div className='px-4 py-3 border-b border-gray-100'>
                      <p className='text-sm font-medium text-gray-900'>{userData?.name || 'User'}</p>
                      <p className='text-sm text-gray-500 truncate'>{userData?.email || 'user@example.com'}</p>
                    </div>
                    
                    {/* Menu Items */}
                    {profileMenuItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          item.action();
                          setIsProfileOpen(false);
                        }}
                        className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200'
                      >
                        {item.name}
                      </button>
                    ))}
                    
                    <div className='border-t border-gray-100 mt-2 pt-2'>
                      <div onClick={() => setIsProfileOpen(false)}>
                        <LogoutBtn />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className='flex items-center space-x-3'>
                <Link
                  to="/login"
                  className='px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200'
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className='px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header