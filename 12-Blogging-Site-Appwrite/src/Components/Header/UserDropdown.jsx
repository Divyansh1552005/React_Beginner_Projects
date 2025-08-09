import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'
import { toast } from 'react-toastify'

function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const dropdownRef = useRef(null)
    const userData = useSelector((state) => state.auth.userData)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        // Close dropdown with escape key
        function handleEscapeKey(event) {
            if (event.key === 'Escape') {
                setIsOpen(false)
                setShowLogoutModal(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('keydown', handleEscapeKey)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscapeKey)
        }
    }, [isOpen])

    const handleLogout = async () => {
        const toastId = toast.loading("Signing you out...");
        
        try {
            await authService.logout()
            dispatch(logout())
            toast.update(toastId, {
                render: "Successfully logged out! See you soon 👋",
                type: "success",
                isLoading: false,
                autoClose: 3000,
            });
            navigate('/')
            setShowLogoutModal(false)
            setIsOpen(false)
        } catch (error) {
            toast.update(toastId, {
                render: "Logout failed. Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 4000,
            });
            console.error('Logout failed:', error)
        }
    }

    // Function to scroll to top when navigating
    const handleNavClick = () => {
        setIsOpen(false);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    const menuItems = [
        {
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            label: 'My Posts',
            path: '/my-posts'
        },
        {
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Account Settings',
            path: '/account'
        }
    ]

    return (
        <div className="relative " ref={dropdownRef}>
            {/* Dropdown Trigger */}
            <button style={{ cursor: 'pointer' }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {/* Avatar */}
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-semibold text-sm ">
                    {userData?.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                
                {/* User Info - Hidden on small screens */}
                <div className="hidden lg:block text-left">
                    <p className="text-sm font-medium text-white">{userData?.name || 'User'}</p>
                </div>
                
                {/* Dropdown Arrow */}
                <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-xl border border-gray-700 py-2 z-50 animate-in slide-in-from-top-1 duration-200">
                    {/* Menu Items */}
                    <div className="py-2">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={handleNavClick}
                                className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 cursor-pointer"
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                    
                    {/* Logout Section */}
                    <div className="border-t border-gray-700 pt-2">
                        <button
                            onClick={() => {
                                setShowLogoutModal(true)
                                setIsOpen(false)
                            }}
                            className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-colors duration-200 cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Logout Confirmation Modal */}
            {showLogoutModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 max-w-md w-full animate-in zoom-in-95 duration-200">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-red-900/20 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Confirm Logout</h3>
                                <p className="text-gray-400 text-sm">Are you sure you want to logout?</p>
                            </div>
                        </div>
                        
                        <div className="flex space-x-3">
                            <button
                                onClick={handleLogout}
                                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200"
                            >
                                Yes, Logout
                            </button>
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserDropdown
