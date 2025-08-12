import { useState } from 'react'

import './App.css'
import InputBox from './components/InputBox.jsx';
import useCurrencyInfo from './hooks/useCurrencyInfo.js';



function App(){
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text py-8 tracking-wide drop-shadow-lg'>
              Currency Converter
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mt-4 max-w-3xl mx-auto">
              Convert currencies instantly with real-time exchange rates.
            </p>
          </div>

          {/* Main Converter Section */}
          <div className="flex justify-center items-center mb-20">
            <div className="w-full max-w-lg">
              <div className="bg-gradient-to-br from-slate-800/60 via-gray-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl px-6 sm:px-10 py-8 sm:py-10 shadow-2xl border border-slate-700/50 relative overflow-hidden hover:shadow-cyan-500/10 transition-all duration-500">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-pink-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}
                  >
                      <div className="w-full mb-6">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
                      </div>
                      
                      <div className="relative w-full flex justify-center my-6 sm:my-8">
                          <button
                              type="button"
                              className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-800 transform hover:scale-105 active:scale-95 border-2 border-white/20 text-sm sm:text-base"
                              onClick={swap}
                          >
                              <span className="hidden sm:inline">⇄ Swap Currencies</span>
                              <span className="sm:hidden">⇄ Swap</span>
                          </button>
                      </div>

                    <div className="w-full mb-6 sm:mb-8">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                          />
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-800 transform hover:scale-105 active:scale-95"
                      >
                          <span className="hidden sm:inline">Convert {from.toUpperCase()} to {to.toUpperCase()}</span>
                          <span className="sm:hidden">Convert</span>
                      </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>

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
                href="https://github.com/Divyansh1552005/React_Beginner_Projects/tree/main/6_currencyConverter" 
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
              Built using React, Tailwind CSS & Currency API
            </p>
          </div>
        </div>
      </footer>
    </>
);
}


export default App
