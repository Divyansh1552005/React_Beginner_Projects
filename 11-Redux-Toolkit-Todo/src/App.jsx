import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
     <h1 className='text-2xl text-center text-white bg-blue-800'>Learning about Redux Toolkit</h1>
     <AddTodo/>
     <Todos/>

    </>
  )
}

export default App
