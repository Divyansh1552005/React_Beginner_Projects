import React, { useState } from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'


function PostCard({$id, title, featuredImage}) {
    const [imgError, setImgError] = useState(false);
    const [useAlternative, setUseAlternative] = useState(false);
    
    console.log('PostCard - featuredImage:', featuredImage); // Debug log
    
    // Generate the image URL and log it
    const imageUrl = featuredImage ? 
        (useAlternative ? appwriteService.get_file_view(featuredImage) : appwriteService.get_file(featuredImage)) 
        : null;
    console.log('Generated image URL:', imageUrl);
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {featuredImage && !imgError ? (
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className='rounded-xl w-full h-48 object-cover' 
                        onError={(e) => {
                            console.error('Image failed to load:', e);
                            console.error('Failed URL:', e.target.src);
                            console.error('featuredImage ID:', featuredImage);
                            
                            if (!useAlternative) {
                                console.log('Trying alternative method (getFileView)');
                                setUseAlternative(true);
                            } else {
                                console.log('Both methods failed, hiding image');
                                setImgError(true);
                            }
                        }}
                        onLoad={() => {
                            console.log('Image loaded successfully for:', title);
                        }}
                    />
                ) : (
                    <div className='w-full h-48 bg-gray-300 rounded-xl flex items-center justify-center'>
                        <span className='text-gray-500'>
                            {featuredImage ? 'Image Load Failed' : 'No Image'}
                        </span>
                    </div>
                )}
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard