import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  // Function to scroll to top when navigating
  const handleNavClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Logo width="40px" />
              <span className="text-xl font-bold text-blue-400">
                BlogSpace
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering writers and readers to share stories that matter. Join our community and discover amazing content.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:officialdslc1552005@gmail.com" 
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                title="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/divyansh-sharma-b05897286/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://divyanshsharma.site/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                title="Portfolio"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com/divyanshsharma1552005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="sm:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/all-posts" 
                  onClick={handleNavClick}
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
                >
                  All Posts
                </Link>
              </li>
              <li>
                <Link 
                  to="/add-post" 
                  onClick={handleNavClick}
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
                >
                  Write a Post
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={handleNavClick}
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/community-guidelines" 
                  onClick={handleNavClick}
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
                >
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Feature Suggestion */}
          <div className="sm:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Suggest a Feature
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Have an idea to make BlogSpace better? We'd love to hear your suggestions!
            </p>
            <div className="space-y-3">
              <textarea
                id="featureSuggestion"
                placeholder="Describe your feature idea..."
                rows="3"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none text-sm"
              ></textarea>
              <button 
                onClick={() => {
                  const suggestion = document.getElementById('featureSuggestion').value;
                  if (suggestion.trim()) {
                     window.open(`mailto:officialdslc1552005@gmail.com?subject=BlogSpace Feature Suggestion&body=${encodeURIComponent(suggestion)}`, '_blank');
                  } else {
                    alert('Please enter your suggestion first!');
                  }
                }}
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium text-sm cursor-pointer"
              >
                Send Suggestion
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 BlogSpace. All rights reserved. Made with ❤️ for writers and readers.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy" 
                onClick={handleNavClick}
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                onClick={handleNavClick}
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer