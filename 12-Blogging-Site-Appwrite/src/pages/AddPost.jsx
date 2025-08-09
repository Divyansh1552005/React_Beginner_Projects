import React from 'react'
import { Container, PostForm } from '../Components'

function AddPost() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost