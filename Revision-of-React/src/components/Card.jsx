import React from 'react'

function Card({
    title,
    description
}) {
  return (
    <>
    <h2 className='text-xl font-bold'>{title}</h2>
    <p> {description}</p>
    </>
  )
}

export default Card