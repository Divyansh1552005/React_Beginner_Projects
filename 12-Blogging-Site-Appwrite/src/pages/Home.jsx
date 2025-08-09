import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import {Container, PostCard} from '../Components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
    const [sortedPosts, setSortedPosts] = useState([])
    const [sortBy, setSortBy] = useState('latest')
    const authStatus = useSelector((state) => state.auth.status)
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        appwriteService.get_all_posts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
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

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90'></div>
                <div className='relative'>
                    <Container>
                        <div className='py-24 md:py-32 text-center'>
                            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                                Welcome to{' '}
                                <span className='bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
                                    BlogSpace
                                </span>
                            </h1>
                            <p className='text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed'>
                                Discover amazing stories, share your thoughts, and connect with a community of passionate writers and readers.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                                {authStatus ? (
                                    <>
                                        <Link
                                            to="/add-post"
                                            className='px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                                        >
                                            Create Your Blog
                                        </Link>
                                        <Link
                                            to="/all-posts"
                                            className='px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300'
                                        >
                                            Explore Posts
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to="/signup"
                                            className='px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                                        >
                                            Get Started Free
                                        </Link>
                                        <Link
                                            to="/login"
                                            className='px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300'
                                        >
                                            Sign In
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </Container>
                </div>
                {/* Decorative elements */}
                <div className='absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-32 -translate-y-32'></div>
                <div className='absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-32 translate-y-32'></div>
            </section>

            {/* Features Section */}
            <section className='py-20'>
                <Container>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Why Choose BlogSpace?
                        </h2>
                        <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
                            Everything you need to create, share, and discover amazing content
                        </p>
                    </div>
                    
                    <div className='grid md:grid-cols-3 gap-8'>
                        {[
                            {
                                icon: '✍️',
                                title: 'Easy Writing',
                                description: 'Powerful editor with rich formatting options to bring your ideas to life'
                            },
                            {
                                icon: '🌟',
                                title: 'Community Driven',
                                description: 'Connect with fellow writers and readers in a supportive community'
                            },
                            {
                                icon: '📱',
                                title: 'Mobile Friendly',
                                description: 'Read and write on any device with our responsive design'
                            }
                        ].map((feature, index) => (
                            <div key={index} className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-2'>
                                <div className='text-4xl mb-4'>{feature.icon}</div>
                                <h3 className='text-xl font-semibold text-white mb-3'>{feature.title}</h3>
                                <p className='text-gray-300 leading-relaxed'>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Recent Posts Section */}
            {posts.length > 0 && (
                <section className='py-20 bg-gray-800/30'>
                    <Container>
                        <div className='text-center mb-16'>
                            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                                Latest Posts
                            </h2>
                            <p className='text-lg text-gray-300'>
                                Discover the most recent posts from our community
                            </p>
                        </div>

                        {/* Sort Controls */}
                        <div className='mb-8 flex justify-center'>
                            <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4'>
                                <div className='flex items-center space-x-3'>
                                    <span className='text-sm text-gray-300'>Sort by:</span>
                                    <select 
                                        value={sortBy}
                                        onChange={handleSortChange}
                                        className='px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white text-sm'
                                    >
                                        <option value="latest">Latest First</option>
                                        <option value="oldest">Oldest First</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {sortedPosts.slice(0, 6).map((post) => (
                                <div key={post.$id} className='transform hover:-translate-y-2 transition-all duration-300'>
                                    <PostCard 
                                        {...post} 
                                        author={post.userId === userData?.$id ? (userData?.name || 'You') : null}
                                        publishedDate={post.$createdAt}
                                    />
                                </div>
                            ))}
                        </div>
                        
                        <div className='text-center mt-12'>
                            <Link
                                to="/all-posts"
                                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl'
                            >
                                View All Posts
                                <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </Link>
                        </div>
                    </Container>
                </section>
            )}

            {/* Stats Section */}
            {/* <section className='py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white'>
                <Container>
                    <div className='grid md:grid-cols-3 gap-8 text-center'>
                        {[
                            { number: '500+', label: 'Stories Published' },
                            { number: '1K+', label: 'Active Writers' },
                            { number: '10K+', label: 'Monthly Readers' }
                        ].map((stat, index) => (
                            <div key={index} className=''>
                                <div className='text-4xl md:text-5xl font-bold mb-2'>{stat.number}</div>
                                <div className='text-blue-200 text-lg'>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section> */}

            {/* CTA Section */}
            {!authStatus && (
                <section className='py-20'>
                    <Container>
                        <div className='bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-3xl p-12 text-center'>
                            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                                Ready to Start Writing?
                            </h2>
                            <p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
                                Join our community of writers and readers. Share your stories and discover amazing content.
                            </p>
                            <Link
                                to="/signup"
                                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                            >
                                Join BlogSpace Today
                                <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                </svg>
                            </Link>
                        </div>
                    </Container>
                </section>
            )}
        </div>
    )
}

export default Home