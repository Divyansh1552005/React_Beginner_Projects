import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../Components'
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [sortedPosts, setSortedPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [sortBy, setSortBy] = useState('latest')
    const userData = useSelector((state) => state.auth.userData)
    
    useEffect(() => {
        appwriteService.get_all_posts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoading(false)
        }).catch((error) => {
            console.error('AllPosts - Error fetching posts:', error);
            setLoading(false)
        })
    }, [])

    // Sort posts whenever posts or sortBy changes
    useEffect(() => {
        let sorted = [...posts];
        
        switch (sortBy) {
            case 'latest':
                sorted.sort((a, b) => new Date(b.$createdAt) - new Date(a.$createdAt));
                break;
            case 'oldest':
                sorted.sort((a, b) => new Date(a.$createdAt) - new Date(b.$createdAt));
                break;
            default:
                sorted = posts;
        }
        
        setSortedPosts(sorted);
    }, [posts, sortBy])

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    }

    if (loading) {
        return (
            <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center'>
                <div className='text-center'>
                    <div className='w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
                    <p className='text-gray-300'>Loading amazing stories...</p>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
            {/* Header Section */}
            <section className='bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16'>
                <Container>
                    <div className='text-center'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                            All Posts
                        </h1>
                        <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                            Discover amazing content from our community of writers
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <Link
                                to="/add-post"
                                className='px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                            >
                                Share Your Post
                            </Link>
                            <div className='flex items-center space-x-2 text-blue-100'>
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                                </svg>
                                <span>{posts.length} posts and counting</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Posts Section */}
            <section className='py-16'>
                <Container>
                    {posts.length === 0 ? (
                        <div className='text-center py-16'>
                            <div className='text-6xl mb-6'>📝</div>
                            <h2 className='text-2xl font-bold text-white mb-4'>No Posts Yet</h2>
                            <p className='text-gray-300 mb-8 max-w-md mx-auto'>
                                Be the first to share your post with our community. Your voice matters!
                            </p>
                            <Link
                                to="/add-post"
                                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl'
                            >
                                Write Your First Post
                                <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                </svg>
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Filter/Sort Bar */}
                            <div className='mb-12'>
                                <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg'>
                                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                                        <div className='flex items-center space-x-4'>
                                            <h2 className='text-lg font-semibold text-white'>
                                                {posts.length} {posts.length === 1 ? 'Post' : 'Posts'} Found
                                            </h2>
                                            <div className='hidden md:flex items-center space-x-2 text-sm text-gray-400'>
                                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                                                </svg>
                                                <span>Updated regularly</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <select 
                                                value={sortBy}
                                                onChange={handleSortChange}
                                                className='px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white'
                                            >
                                                <option value="latest">Latest First</option>
                                                <option value="oldest">Oldest First</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Posts Grid */}
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {sortedPosts.map((post) => (
                                    <div key={post.$id} className='h-96 transform hover:-translate-y-2 transition-all duration-300'>
                                        <PostCard 
                                            {...post} 
                                            author={post.userId === userData?.$id ? (userData?.name || 'You') : null}
                                            publishedDate={post.$createdAt}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Load More Section */}
                            <div className='text-center mt-16'>
                                <p className='text-gray-600 mb-6'>
                                    You've reached the end! Want to share your own post?
                                </p>
                                <Link
                                    to="/add-post"
                                    className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl'
                                >
                                    Write a Blog
                                    <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' />
                                    </svg>
                                </Link>
                            </div>
                        </>
                    )}
                </Container>
            </section>
        </div>
    )
}

export default AllPosts