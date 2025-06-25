import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 

import App from './App.jsx'

function Oye(){
  return (
  <>
    <p>
      paragraph for learning
    </p>
    <a href='https://www.youtube.com' target='_blank'>
      Youtube Link
    </a>
  </>
  )
}

const element = <h1>yo boi</h1>

const element2 = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

const oke = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)
createRoot(document.getElementById('root')).render(
  
  <>
    {oke}
    {element}
    {element2}
    <App />
    <Oye />

   

    
    
    </>

  
)
