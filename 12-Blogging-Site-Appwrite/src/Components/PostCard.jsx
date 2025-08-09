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
        <article className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-gray-800/70 transition-all duration-300 transform group-hover:-translate-y-2'>
            {/* Image Container */}
            <div className='relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800'>
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
                    <div className='w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center'>
                        <div className='text-center'>
                            <div className='text-4xl text-blue-400 mb-2'>📝</div>
                            <span className='text-blue-400 font-medium'>
                                {featuredImage ? 'Image Unavailable' : 'No Image'}
                            </span>
                        </div>
                    </div>
                )}
                
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                {/* Read More Badge */}
                <div className='absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                    Read More
                </div>
            </div>
            
            {/* Content */}
            <div className='p-6'>
                <h2 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 leading-tight'>
                    {title}
                </h2>
                
                {/* Meta Info */}
                <div className='mt-4 flex items-center justify-between'>
                    <div className='flex items-center space-x-2 text-sm text-gray-400'>
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        <span>5 min read</span>
                    </div>
                    
                    <div className='flex items-center space-x-1 text-blue-400 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300'>
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