import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../Components'
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    
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

    if (loading) {
        return (
            <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center'>
                <div className='text-center'>
                    <div className='w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
                    <p className='text-gray-600'>Loading amazing stories...</p>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50'>
            {/* Header Section */}
            <section className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16'>
                <Container>
                    <div className='text-center'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                            All Stories
                        </h1>
                        <p className='text-xl text-indigo-100 mb-8 max-w-2xl mx-auto'>
                            Discover amazing content from our community of writers
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <Link
                                to="/add-post"
                                className='px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                            >
                                Share Your Story
                            </Link>
                            <div className='flex items-center space-x-2 text-indigo-100'>
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                                </svg>
                                <span>{posts.length} stories and counting</span>
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
                            <h2 className='text-2xl font-bold text-gray-900 mb-4'>No Stories Yet</h2>
                            <p className='text-gray-600 mb-8 max-w-md mx-auto'>
                                Be the first to share your story with our community. Your voice matters!
                            </p>
                            <Link
                                to="/add-post"
                                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                            >
                                Write Your First Story
                                <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                </svg>
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Filter/Sort Bar */}
                            <div className='mb-12'>
                                <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
                                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                                        <div className='flex items-center space-x-4'>
                                            <h2 className='text-lg font-semibold text-gray-900'>
                                                {posts.length} {posts.length === 1 ? 'Story' : 'Stories'} Found
                                            </h2>
                                            <div className='hidden md:flex items-center space-x-2 text-sm text-gray-500'>
                                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                                                </svg>
                                                <span>Updated regularly</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <select className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white'>
                                                <option>Latest First</option>
                                                <option>Oldest First</option>
                                                <option>Most Popular</option>
                                            </select>
                                            <button className='p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200'>
                                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 10h16M4 14h16M4 18h16' />
                                                </svg>
                                            </button>
                                            <button className='p-2 text-indigo-600 bg-indigo-50 rounded-lg'>
                                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Posts Grid */}
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {posts.map((post) => (
                                    <div key={post.$id} className='transform hover:-translate-y-2 transition-all duration-300'>
                                        <PostCard {...post} />
                                    </div>
                                ))}
                            </div>

                            {/* Load More Section */}
                            <div className='text-center mt-16'>
                                <p className='text-gray-600 mb-6'>
                                    You've reached the end! Want to share your own story?
                                </p>
                                <Link
                                    to="/add-post"
                                    className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                                >
                                    Write a Story
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