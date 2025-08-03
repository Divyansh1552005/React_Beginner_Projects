import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authservice from '../../appwrite/config'

 
function LogoutBtn() {
  const dispatch = useDispatch();
  // logout is a promise that resolves when the user is logged out
  const logout_handler = ()=>{
    authservice.logout()
    .then(
      ()=>{
        dispatch(logout());

      })
      .catch((error)=>{
        console.error("Logout failed:", error);
      })
    
  }
  return (
    <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={logout_handler}>
      Logout
    </button>
  )
}

export default LogoutBtn

 