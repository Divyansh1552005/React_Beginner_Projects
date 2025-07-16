import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import ThemeContext from '../context/ThemeContext'



function Login() {
  const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const {theme} = useContext(ThemeContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div className={`max-w-md mx-auto rounded-xl shadow-lg p-8 mb-8 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`}>
        <h2 className={`text-2xl font-bold text-center mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`}>Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Username</label>
                <input 
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter your username'
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>
            <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Password</label>
                <input 
                    type='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>
            <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Sign In
            </button>
        </form>
    </div>
  )
}

export default Login