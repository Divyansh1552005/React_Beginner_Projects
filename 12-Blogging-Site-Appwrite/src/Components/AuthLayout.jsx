import React, {useState, useEffect, use}from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

 export default function Protected({children, authentication = true}) {
    const [loader,setloader] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } 
        else if(!authentication && authStatus !== authentication) {
            navigate("/")
        }

        setloader(false);

    }, [authStatus, navigate, authentication])

  return (
    loader ? <h1>Loading...</h1> : <>{children}</>
  )
}

