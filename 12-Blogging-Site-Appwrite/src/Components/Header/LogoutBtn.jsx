import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authservice from '../../appwrite/auth'

function LogoutBtn() {
  const dispatch = useDispatch();
  
  const logout_handler = () => {
    authservice.logout()
    .then(() => {
        dispatch(logout());
    })
    .catch((error) => {
        console.error("Logout failed:", error);
    })
  }
  
  return (
    <button 
      className='w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-colors duration-200 flex items-center space-x-2' 
      onClick={logout_handler}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
      <span>Logout</span>
    </button>
  )
}

export default LogoutBtn