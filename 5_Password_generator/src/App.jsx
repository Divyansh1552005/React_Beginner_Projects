import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PasswordStrengthLayout from './Components/PasswordStrengthLayout';
import PasswordGeneratorFAQs from './Components/PasswordGeneratorFAQs';


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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text py-8 tracking-wide drop-shadow-lg'>
              Generate Secure Passwords
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mt-4 max-w-3xl mx-auto">
              Create strong and secure passwords to keep your account safe online.
            </p>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Lock SVG and Info */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 mb-8 relative">
                {/* Animated background circle */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
                
                {/* Better Lock SVG */}
                <svg 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-full h-full relative z-10"
                >
                  {/* Lock Body */}
                  <rect 
                    x="25" 
                    y="45" 
                    width="50" 
                    height="40" 
                    rx="8" 
                    fill="url(#lockGradient)" 
                    stroke="url(#borderGradient)" 
                    strokeWidth="2"
                  />
                  
                  {/* Lock Shackle */}
                  <path 
                    d="M35 45V35C35 26.1634 42.1634 19 51 19V19C59.8366 19 67 26.1634 67 35V45" 
                    stroke="url(#borderGradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    fill="none"
                  />
                  
                  {/* Keyhole */}
                  <circle 
                    cx="50" 
                    cy="60" 
                    r="4" 
                    fill="url(#keyholeGradient)"
                  />
                  <rect 
                    x="48.5" 
                    y="60" 
                    width="3" 
                    height="8" 
                    rx="1.5" 
                    fill="url(#keyholeGradient)"
                  />
                  
                  {/* Security dots */}
                  <circle cx="40" cy="52" r="1.5" fill="url(#dotGradient)" opacity="0.6"/>
                  <circle cx="60" cy="52" r="1.5" fill="url(#dotGradient)" opacity="0.6"/>
                  <circle cx="40" cy="75" r="1.5" fill="url(#dotGradient)" opacity="0.6"/>
                  <circle cx="60" cy="75" r="1.5" fill="url(#dotGradient)" opacity="0.6"/>
                  
                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9"/>
                      <stop offset="50%" stopColor="#334155" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#475569" stopOpacity="0.9"/>
                    </linearGradient>
                    
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4"/>
                      <stop offset="50%" stopColor="#8b5cf6"/>
                      <stop offset="100%" stopColor="#06b6d4"/>
                    </linearGradient>
                    
                    <linearGradient id="keyholeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0f172a"/>
                      <stop offset="100%" stopColor="#1e293b"/>
                    </linearGradient>
                    
                    <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4"/>
                      <stop offset="100%" stopColor="#8b5cf6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-center max-w-md">
                <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our password generator creates cryptographically strong passwords using advanced algorithms to ensure maximum security for your accounts.
                </p>
              </div>
            </div>

            {/* Right Side - Password Generator */}
            <div className="w-full">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl px-8 py-8 shadow-2xl border border-slate-700/50">
                <h2 className='text-2xl font-semibold text-center text-gray-200 pb-6 tracking-wide'>Password Generator</h2>

                {/* Input and Copy Button */}
                <div className="flex shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-600">
                  <input 
                    type='text' 
                    value={password} 
                    className='outline-none w-full py-4 px-4 bg-gray-700 text-gray-100 text-lg font-mono tracking-wide placeholder-gray-400 focus:bg-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200'
                    placeholder='Generated Password Will Appear Here...' 
                    readOnly 
                    ref={passwordRef}
                  />
                  <button 
                    onClick={copyPasswordToClipboard}
                    className='outline-none bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-4 font-medium tracking-wide transition-all duration-200 hover:shadow-lg focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    Copy
                  </button>
                </div>

                {/* Controls */}
                <div className='flex flex-wrap text-base gap-4 justify-center items-center bg-gray-700 rounded-lg p-4 border border-gray-600'>
                  
                  {/* Length Control */}
                  <div className='flex items-center gap-x-3 bg-gray-600 rounded-lg px-4 py-3 border border-gray-500 shadow-sm'>
                    <input 
                      type="range"
                      min={8}
                      max={100}
                      value={length}
                      className='cursor-pointer accent-cyan-500 h-2 w-24'
                      onChange={(e) => {setlength(e.target.value)}}
                    />
                    <label className='text-gray-200 font-medium min-w-[80px]'>
                      Length: <span className='text-cyan-400 font-semibold'>{length}</span>
                    </label>
                  </div>

                  {/* Numbers Checkbox */}
                  <div className="flex items-center gap-x-3 bg-gray-600 rounded-lg px-4 py-3 border border-gray-500 shadow-sm">
                    <input
                      type="checkbox"
                      defaultChecked={numberAllowed}
                      id="numberInput"
                      className='w-4 h-4 accent-cyan-500 cursor-pointer'
                      onChange={() =>{
                          setNumberAllowed((prev) => !prev);
                      }}
                    />
                    <label htmlFor="numberInput" className='text-gray-200 font-medium cursor-pointer'>Numbers</label>
                  </div>

                  {/* Symbols Checkbox */}
                  <div className="flex items-center gap-x-3 bg-gray-600 rounded-lg px-4 py-3 border border-gray-500 shadow-sm">
                    <input
                      type="checkbox"
                      defaultChecked={charAllowed}
                      id="characterInput"
                      className='w-4 h-4 accent-cyan-500 cursor-pointer'
                      onChange={() => {
                          setcharAllowed((prev) => !prev )
                      }}
                    />
                    <label htmlFor="characterInput" className='text-gray-200 font-medium cursor-pointer'>Symbols</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <PasswordStrengthLayout />

      <PasswordGeneratorFAQs />

      {/* Footer */}
      <footer className="bg-slate-900/90 border-t border-slate-700/50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-300 text-lg mb-4">
              Made with ❤️ by <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">Divyansh</span> using React
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-4">
              <a 
                href="https://github.com/Divyansh1552005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 transform"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/divyansh-sharma-b05897286/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:scale-105 transform"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/Divyansh1552005/React_Beginner_Projects/tree/main/5_Password_generator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:scale-105 transform"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                </svg>
                <span>Source Code</span>
              </a>
            </div>
            
            {/* Project Info */}
            <p className="text-gray-500 text-sm">
              Built using React, Tailwind CSS & Lucide Icons
            </p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
