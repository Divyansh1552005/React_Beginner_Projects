import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'


function PostCard({$id, title, featuredImage}) {
    // we are using $id here because we are getting the data from the database and it has an id field
    // which is used to uniquely identify each post.
    // featuredImage is the image url of the post which is stored in the database.
    // $ is used before id becoz of appwrite convention.
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.get_file(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard