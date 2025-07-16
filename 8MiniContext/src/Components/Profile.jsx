import React from 'react'
import UserContext from '../context/UserContext'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'


function Profile() {
  
    const {user, setUser} = useContext(UserContext)
    const {theme} = useContext(ThemeContext)
    
    const handleLogout = () => {
        setUser(null)
    }
    
    if (!user) {
        return (
            <div className={`max-w-md mx-auto rounded-xl shadow-lg p-8 text-center transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            }`}>
                <div className="mb-4">
                    <svg className={`mx-auto h-16 w-16 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h3 className={`text-lg font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Not Logged In</h3>
                <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>Please login to view your profile</p>
            </div>
        )
    }

    return (
        <div className={`max-w-md mx-auto rounded-xl shadow-lg p-8 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}>
            <div className="text-center">
                <div className="mb-6">
                    <div className={`mx-auto h-20 w-20 rounded-full flex items-center justify-center text-2xl font-bold ${
                        theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                    }`}>
                        {user.username.charAt(0).toUpperCase()}
                    </div>
                </div>
                
                <h2 className={`text-2xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                    Welcome back!
                </h2>
                
                <p className={`text-lg mb-6 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                    Hello, <span className="font-semibold text-blue-600">{user.username}</span>
                </p>
                
                <div className={`p-4 rounded-lg mb-6 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                    <h3 className={`font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>Account Details</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>Username:</span>
                            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{user.username}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>Status:</span>
                            <span className="text-green-500 font-medium">Online</span>
                        </div>
                    </div>
                </div>
                
                <button 
                    onClick={handleLogout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Logout
                </button>
            </div>
        </div>
    )
  
}

export default Profile