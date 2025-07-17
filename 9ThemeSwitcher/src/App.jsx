import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Contexts/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
        const [themeMode, setThemeMode] = useState("light");

        const lightMode = ()=>{
          setThemeMode("light");
        }
        const darkMode = ()=>{
          setThemeMode("dark");
        }

        useEffect(() => {
          const obj = document.querySelector('html');
          obj.classList.remove("light" , "dark");
          obj.classList.add(themeMode);

        }, [themeMode])
        

  return (
    <>
      <h1 className='text-4xl font-bold text-center text-white bg-gray-800 p-6 rounded-lg shadow-lg mb-8'>Theme Switcher</h1>


      <ThemeProvider value={{themeMode, darkMode , lightMode}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Toggle Button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/*  Card Component aayega idhar*/}
            <Card />

          </div>
        </div>
      </div>
      </ThemeProvider>

    </>
  )
}

export default App
