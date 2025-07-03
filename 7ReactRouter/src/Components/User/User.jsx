import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-zinc-800 text-white text-2xl  text-center p-4 rounded-md '>User : {userid}</div>
  )
}

export default User