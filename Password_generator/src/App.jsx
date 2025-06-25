import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  // defining all the variables states we will need
  const [length, setlength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("")

  // use ref hook
  const passwordRef = useRef(null)


  // Lets make a password generator now
  const passwordGenerator = useCallback(()=>{
 let pass = "", str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
 // pass will contain the generated password and str se ham password nikalenge

  if(numberAllowed) str += "0123456789";
  if(charAllowed) str += "!@#$%^&*()";

  for (let i = 1; i <= length; i++){
    let char = Math.floor(Math.random() * str.length + 1); // ye ek index aayega jisko uthana padega str se aage niche
    pass += str.charAt(char);
    
  }

  setpassword(pass);

  } , [length, numberAllowed, charAllowed, setpassword]);


  useEffect(()=>{
    passwordGenerator(); 
  } , [length, numberAllowed,charAllowed, passwordGenerator])
  


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // this is to select the text thats being copied so user ko pata chal sake copy hogya hai
    passwordRef.current?.setSelectionRange(0, 101); // kitna values select hongi password ie 999 values select hongi , jaisi 0 se 3 hota toh shuru ki 3 hi select hoti
    window.navigator.clipboard.writeText(password) // ye next js mein window object ka access nahi hota becoz its SSR
  }, [password]); // password pe dependent hai copy button becoz vo change hone pe hi toh value change hovegi copy hone  aali





  return (
    <>
      
      <div className='min-h-screen flex items-center justify-center bg-gray-900'>
      <div className="w-full max-w-xl mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-800 h-60">
         <h1 className='text-4xl text-center text-white p-5'> Password Generator </h1>

          {/* now we will put input */}
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
          
          <input type='text' value={password} className='outline-none w-full py-1 px-3'
          placeholder='Password' readOnly ref={passwordRef}>
          
          </input>

          {/* {copy button} */}
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-green-700 text-black px-3 py-3' >Copy </button>

          </div>

        <div className='flex text-sm gap-x-2'>
          
          {/* {Length aala label} */}
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>

      {/* for div checkbox */}
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() =>{
              setNumberAllowed((prev) => !prev); // to reverse prev value
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      {/* {label for characterInput} */}
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev ) // to understand more see counter imp interview question vala video
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>

      </div>

      </div>
    </>
  )
}

export default App
