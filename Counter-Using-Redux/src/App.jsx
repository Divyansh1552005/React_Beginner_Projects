import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'

function App() {
  

  return (
    <>
      <h1>Counter App using Redux</h1>

      <p>Check the console for Redux state changes.</p>

      {/* The Counter component will be rendered here */}
      
      <Counter/>
      
    </>
  )
}

export default App
