import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1 className='text-4xl font-bold text-center text-blue-600 bg-gray-400 p-6 rounded-lg shadow-md mb-8'> Context API Started </h1>

      <Login />
      <Profile />

    </UserContext.Provider>


  )
}

export default App
