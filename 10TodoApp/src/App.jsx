import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-500 underline font-bold'> To-do Application with Context API and Local Storage</h1>
    </>
  )
}

export default App
