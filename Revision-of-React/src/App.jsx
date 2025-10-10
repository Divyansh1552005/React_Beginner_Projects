import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import { useCallback, useEffect } from 'react'


function App() {
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [length, setlength] = useState(12);
  const [inputValue, setInputValue] = useState('12'); // Separate state for input display
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = "", str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // pass will contain the generated password and str se ham password nikalenge

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // ye ek index aayega jisko uthana padega str se aage niche
      pass += str.charAt(char);

    }

    setpassword(pass);

  }, [length, numberAllowed, charAllowed, setpassword]);

  // useEffect(() => {
  //   passwordGenerator();
  // }, [length, numberAllowed, charAllowed, passwordGenerator])






  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Maximum Value:", maxValue);
    console.log("Minimum Value:", minValue);

    // if(maxValue != NaN || minValue != NaN){
    //   alert("Please enter valid number");
    // }
    if (maxValue <= minValue) {
      alert("Maximum value must be greater than Minimum value");
    }

    // Generate random number when form is submitted
    const random = Math.random() * (parseFloat(maxValue) - parseFloat(minValue)) + parseFloat(minValue);
    setRandomNumber(random.toFixed(2)); // Round to 2 decimal places
  };






  const card = [
    {
      title: "Bleach",
      description: "Manga 1 aefboaclca w"
    },
    {
      title: "Gintama",
      description: "Manga 2 aoibw fe bak bw.lc bja "
    },
    {
      title: "AOT",
      description: "Manga 3, its is really great."
    },
  ]

  return (
    <>
      {card.map(function (obj, index) {
        return (
          <Card key={index} title={obj.title} description={obj.description} />
        )
      })}

      <form onSubmit={handleSubmit} className="p-4 text-white">
        <label htmlFor="Max_Value">Maximum value:</label> <br />
        <input
          type="text"
          id="Max_Value"
          name="Max_value"
          required
          placeholder='Enter maximum value'
          className="border border-white bg-transparent text-white p-2"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
        />
        <br /><br />

        <label htmlFor="Min_Value">Minimum value:</label> <br />
        <input
          type="text"
          id="Min_Value"
          name="Min_value"
          required
          placeholder='Enter minimum value'
          className="border border-white bg-transparent text-white p-2"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
        />
        <br /><br />

        <button type="submit" className="bg-blue-600 px-4 py-2 rounded cursor-pointer">
          Submit
        </button>
      </form>






      <div className="mt-4 p-4 bg-gray-800 rounded">
        <h3 className="text-white text-xl mb-2">Random Number Generator</h3>
        {randomNumber ? (
          <p className="text-green-400 text-lg">Generated Number: {randomNumber}</p>
        ) : (
          <p className="text-gray-400">Submit the form to generate a random number</p>
        )}
      </div>

        <div className="mt-4 p-4 bg-blue-700 rounded">
      <h2> Password Generator </h2>


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
                    // ref={passwordRef}
                  />
                  <button 
                    // onClick={copyPasswordToClipboard}
                    className='outline-none bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-4 font-medium tracking-wide transition-all duration-200 hover:shadow-lg focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    Copy
                  </button>
                </div>

                {/* Controls */}
                <div className='flex flex-wrap text-base gap-4 justify-center items-center bg-gray-700 rounded-lg p-4 border border-gray-600'>
                  
                  {/* Length Control */}
                  <div className='flex flex-col items-center gap-3 bg-gray-600 rounded-lg px-4 py-3 border border-gray-500 shadow-sm min-w-[200px]'>
                    <label className='text-gray-200 font-medium text-center'>
                      Password Length: <span className='text-cyan-400 font-semibold'>{length}</span>
                    </label>
                    
                    {/* Min/Max Length Indicator */}
                    <div className="flex justify-between w-full text-xs text-gray-400">
                      <span>Min: 8</span>
                      <span>Max: 100</span>
                    </div>
                    
                    {/* Slider */}
                    <input 
                      type="range"
                      min={8}
                      max={100}
                      value={length}
                      className='cursor-pointer accent-cyan-500 h-2 w-full'
                      onChange={(e) => {
                        const newLength = e.target.value;
                        setlength(newLength);
                        setInputValue(newLength);
                      }}
                    />
                    
                    {/* Custom Input Box */}
                    <div className="flex items-center gap-2 w-full">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                          const inputVal = e.target.value;
                          setInputValue(inputVal);
                          
                          // If it's a valid number, update the length
                          const numValue = parseInt(inputVal);
                          if (!isNaN(numValue) && numValue >= 8 && numValue <= 100) {
                            setlength(numValue);
                          }
                        }}
                        onBlur={(e) => {
                          const inputVal = e.target.value;
                          const numValue = parseInt(inputVal);
                          
                          if (inputVal === '' || isNaN(numValue) || numValue < 8) {
                            setlength(8);
                            setInputValue('8');
                          } else if (numValue > 100) {
                            setlength(100);
                            setInputValue('100');
                          } else {
                            setlength(numValue);
                            setInputValue(numValue.toString());
                          }
                        }}
                        className="w-20 px-2 py-1 text-center bg-gray-700 text-gray-200 border border-gray-500 rounded focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
                        placeholder="8-100"
                      />
                      <span className="text-gray-400 text-sm">chars</span>
                    </div>
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


                  {/* Generate Button */}
                  <button
                  className=''
                  onClick={passwordGenerator}>
                    Generate password!
                    </button>
                </div>
              </div>
            </div>
          </div>

    </>
  )
}

export default App;

