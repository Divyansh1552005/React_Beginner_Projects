import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GreetUser({user}){
  return (
    <div className='mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600'>
      <h3 className='text-lg font-semibold text-white mb-2'>User Greeting:</h3>
      <p className='text-green-400 text-base'>
        Hello, <span className='font-bold'>{user.name}</span>! 
        You are <span className='font-bold'>{user.age}</span> years old.
      </p>
      <div className='mt-3'>
        <button 
          className='bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-xl text-sm transition-colors duration-200'
          onClick={() => alert(`Nice to meet you, ${user.name}!`)}
        >
          Say Hello Back
        </button>
      </div>
    </div>
  );
}




function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  // Increment and Decrement functions to update count state using functional updates

 
const user = { name: "Divyansh Sharma", age: 20 };


  return (
    <>
      <h1 className='text-3xl font-bold text-center text-white bg-blue-800'> Revising React</h1>


      {/* lets create a counter app */}

      <div className='flex flex-col items-center justify-center min-h-screen py-8'>
        <h2 className='text-2xl font-bold text-white mb-4'>Count: {count}</h2>
        <div className='flex space-x-4'>
          <button 
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200 cursor-pointer' 
            onClick={increment}
          >
            Increment
          </button>
          <button 
            className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200 cursor-pointer' 
            onClick={decrement}
          >
            Decrement
          </button>
        </div>

        {/* User Greeting Component */}
        <GreetUser user={user}/>
      </div>
      </>
  )
}

export default App;

