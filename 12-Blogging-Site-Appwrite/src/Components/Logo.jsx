import React from 'react'
import logo from '../assets/blogspace-removebg-preview.png'

function Logo({ width = '100px' }) {
  return (
    <div className='flex items-center'>
      <img 
        src={logo} 
        alt='BlogSpace Logo' 
        style={{ width }}
        className='h-auto object-contain'
      />
    </div>
  )
}

export default Logo

