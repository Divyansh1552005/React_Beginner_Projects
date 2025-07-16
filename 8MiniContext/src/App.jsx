import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/UserContext'
import ThemeContext from './context/ThemeContext'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div className={`min-h-screen transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
          <div className="container mx-auto px-4 py-8">
            {/* Theme Toggle Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>

            <h1 className={`text-4xl font-bold text-center p-6 rounded-lg shadow-md mb-8 transition-colors duration-300 ${
              theme === 'dark' 
                ? 'text-white bg-gray-800' 
                : 'text-blue-600 bg-white'
            }`}> 
              Context API Started 
            </h1>

            <Login />
            <Profile />
          </div>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>


  )
}

export default App
