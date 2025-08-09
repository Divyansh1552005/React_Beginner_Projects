import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../Components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        console.log('AllPosts - Fetching posts...'); // Debug log
        appwriteService.get_all_posts([]).then((posts) => {
            console.log('AllPosts - Posts received:', posts); // Debug log
            if (posts) {
                console.log('AllPosts - Posts documents:', posts.documents); // Debug log
                setPosts(posts.documents)
            }
        }).catch((error) => {
            console.error('AllPosts - Error fetching posts:', error);
        })
    }, [])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts