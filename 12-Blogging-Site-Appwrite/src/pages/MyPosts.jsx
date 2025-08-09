import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../Components'
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MyPosts() {
    const [posts, setPosts] = useState([])
    const [sortedPosts, setSortedPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [sortBy, setSortBy] = useState('latest')
    const userData = useSelector((state) => state.auth.userData);
    
    useEffect(() => {
        if (userData?.$id) {
            appwriteService.get_all_posts([]).then((posts) => {
                if (posts) {
                    // Filter posts by current user
                    const userPosts = posts.documents.filter(post => post.userId === userData.$id);
                    setPosts(userPosts);
                }
                setLoading(false)
            }).catch((error) => {
                console.error('MyPosts - Error fetching posts:', error);
                setLoading(false)
            })
        } else {
            setLoading(false);
        }
    }, [userData])

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
                    <div className='w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
                    <p className='text-gray-300'>Loading your stories...</p>
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
                            My Stories
                        </h1>
                        <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                            Manage and view all your published content
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <Link
                                to="/add-post"
                                className='px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                            >
                                Create New Story
                            </Link>
                            <div className='flex items-center space-x-2 text-blue-100'>
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                                </svg>
                                <span>{posts.length} {posts.length === 1 ? 'story' : 'stories'} published</span>
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
                            <div className='text-6xl mb-6'>✍️</div>
                            <h2 className='text-2xl font-bold text-white mb-4'>No Stories Yet</h2>
                            <p className='text-gray-300 mb-8 max-w-md mx-auto'>
                                You haven't published any stories yet. Start sharing your thoughts with the world!
                            </p>
                            <Link
                                to="/add-post"
                                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl'
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
                                <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg'>
                                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                                        <div className='flex items-center space-x-4'>
                                            <h2 className='text-lg font-semibold text-white'>
                                                {posts.length} {posts.length === 1 ? 'Story' : 'Stories'} Found
                                            </h2>
                                            <div className='hidden md:flex items-center space-x-2 text-sm text-gray-400'>
                                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                                                </svg>
                                                <span>Your personal collection</span>
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
                                            <Link
                                                to="/add-post"
                                                className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200'
                                            >
                                                New Post
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Posts Grid */}
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {sortedPosts.map((post) => (
                                    <div key={post.$id} className='transform hover:-translate-y-2 transition-all duration-300'>
                                        <PostCard 
                                            {...post} 
                                            author={userData?.name || 'You'}
                                            publishedDate={post.$createdAt}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </Container>
            </section>
        </div>
    )
}

export default MyPosts
