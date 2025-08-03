import React from 'react'


// we use this concept of container because it helps to center the content and limit the maximum width
// we will just add children later on inside this container  and like if we wanna change the width of all children inside we can just change the width of this container
// so this is a reusable component
function Container({ children }) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 '>
        {children}
    </div>
  )
}

export default Container