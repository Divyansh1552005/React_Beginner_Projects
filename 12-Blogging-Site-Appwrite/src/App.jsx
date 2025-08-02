import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite'
import {login,logout} from './store/authSlice'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  // loading state banayenge coz network request mein time lagega toh kuch toh dikhana padega na screen par
  // agar loading true hui toh loading icon dikha denge varna data

  // initially true coz shhuru mein app load hote hi useEffect kuch kaam karega and uska kaam toh ho hi jayega 
  // aage ham false kar denge components mein

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
      authservice.get_current_user()
      .then((userData) => {
        if(userData){
          dispatch(login(userData)); 
        }
        else{
          dispatch(logout());

        }

      })
      .finally(() => {
        setLoading(false);
      });




  } , [dispatch])

  return (!loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-blue-300 '> 
    <div className='w-full-block'>

      <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
      
      <Footer/>

    </div>
    
    
    
    <h1>Blog application using Appwrite</h1> 
    
    
    
    
    </div>
  ) : null)

}

export default App
