import React, { useState } from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    const [imgError, setImgError] = useState(false);
    const [useAlternative, setUseAlternative] = useState(false);
    
    // Generate the image URL and log it
    const imageUrl = featuredImage ? 
        (useAlternative ? appwriteService.get_file_view(featuredImage) : appwriteService.get_file(featuredImage)) 
        : null;
    
  return (
    <Link to={`/post/${$id}`} className="group block">
        <article className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100'>
            {/* Image Container */}
            <div className='relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50'>
                {featuredImage && !imgError ? (
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300' 
                        onError={(e) => {
                            if (!useAlternative) {
                                setUseAlternative(true);
                            } else {
                                setImgError(true);
                            }
                        }}
                        onLoad={() => {
                            console.log('Image loaded successfully for:', title);
                        }}
                    />
                ) : (
                    <div className='w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center'>
                        <div className='text-center'>
                            <div className='text-4xl text-indigo-400 mb-2'>📝</div>
                            <span className='text-indigo-600 font-medium'>
                                {featuredImage ? 'Image Unavailable' : 'No Image'}
                            </span>
                        </div>
                    </div>
                )}
                
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                {/* Read More Badge */}
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                    Read More
                </div>
            </div>
            
            {/* Content */}
            <div className='p-6'>
                <h2 className='text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2 leading-tight'>
                    {title}
                </h2>
                
                {/* Meta Info */}
                <div className='mt-4 flex items-center justify-between'>
                    <div className='flex items-center space-x-2 text-sm text-gray-500'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        <span>5 min read</span>
                    </div>
                    
                    <div className='flex items-center space-x-1 text-indigo-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300'>
                        <span>Read article</span>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </div>
                </div>
            </div>
        </article>
    </Link>
  )
}

export default PostCard