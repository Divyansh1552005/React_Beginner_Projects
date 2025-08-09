import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../Components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

// Function to get author name from userId (same as in PostCard)
const getAuthorName = (userId) => {
    if (!userId) return 'Anonymous Author';
    
    // Generate a consistent random number from userId for anonymous display
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
        hash = userId.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Convert to positive number and limit to 4 digits
    const randomNum = Math.abs(hash) % 9999 + 1;
    return `User ${randomNum}`;
};

export default function Post() {
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [readingTime, setReadingTime] = useState(0);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.get_post(slug).then((post) => {
                if (post) {
                    setPost(post);
                    // Calculate reading time based on character count (same as PostCard)
                    const plainText = post.content.replace(/<[^>]*>/g, '').trim();
                    const charCount = plainText.length;
                    
                    let readingTimeMinutes;
                    if (charCount < 500) {
                        readingTimeMinutes = 1;
                    } else if (charCount < 1000) {
                        readingTimeMinutes = 2;
                    } else if (charCount < 1500) {
                        readingTimeMinutes = 3;
                    } else if (charCount < 2000) {
                        readingTimeMinutes = 4;
                    } else if (charCount < 2500) {
                        readingTimeMinutes = 5;
                    } else {
                        readingTimeMinutes = Math.ceil(charCount / 500);
                    }
                    
                    setReadingTime(readingTimeMinutes);
                    
                    // Fetch related posts
                    fetchRelatedPosts();
                } else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const fetchRelatedPosts = async () => {
        try {
            const posts = await appwriteService.get_posts([]);
            // Filter out current post and take first 3
            const filtered = posts.documents.filter(p => p.$id !== slug).slice(0, 3);
            setRelatedPosts(filtered);
        } catch (error) {
            console.error("Error fetching related posts:", error);
        }
    };

    const deletePost = () => {
        const toastId = toast.loading("Deleting post...");
        
        appwriteService.delete_post(post.$id).then((status) => {
            if (status) {
                appwriteService.delete_file(post.featuredImage);
                toast.update(toastId, {
                    render: "Post deleted successfully! 🗑️",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                });
                navigate("/");
            } else {
                toast.update(toastId, {
                    render: "Failed to delete post. Please try again.",
                    type: "error",
                    isLoading: false,
                    autoClose: 4000,
                });
            }
        }).catch((error) => {
            toast.update(toastId, {
                render: "Error deleting post. Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 4000,
            });
            console.error("Delete post error:", error);
        });
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return post ? (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Article Header */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-xl mb-8">
                        {/* Featured Image */}
                        <div className="relative h-64 md:h-96">
                            <img
                                src={appwriteService.get_file(post.featuredImage)}
                                alt={post.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback to file view if preview fails
                                    e.target.src = appwriteService.get_file_view(post.featuredImage);
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            
                            {/* Author Controls */}
                            {isAuthor && (
                                <div className="absolute top-4 right-4 flex space-x-3 z-10">
                                    <Link to={`/edit-post/${post.$id}`}>
                                        <Button 
                                            bgColor="bg-blue-600 hover:bg-blue-700" 
                                            className="px-4 py-2 text-sm font-medium cursor-pointer"
                                            onClick={() => toast.info("Redirecting to edit page... ✏️", { autoClose: 2000 })}
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button 
                                        bgColor="bg-red-600 hover:bg-red-700" 
                                        onClick={deletePost} 
                                        className="px-4 py-2 text-sm font-medium cursor-pointer"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Delete
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Article Info */}
                        <div className="p-6 md:p-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                {post.title}
                            </h1>
                            
                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold text-xs">
                                            {getAuthorName(post.userId).charAt(0)}
                                        </span>
                                    </div>
                                    <span className="font-medium text-gray-300">{getAuthorName(post.userId)}</span>
                                </div>
                                <span>•</span>
                                <time className="text-sm">{formatDate(post.$createdAt)}</time>
                                <span>•</span>
                                <span className="text-sm">{readingTime} min read</span>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <article className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 mb-12 shadow-xl">
                        <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-600 pb-4">Content</h2>
                        <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
                            <div className="text-gray-300 leading-relaxed space-y-6">
                                {parse(post.content)}
                            </div>
                        </div>
                    </article>

                    {/* Author Bio Section */}
                    {/* <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-12">
                        <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold text-lg">
                                    {userData?.name?.charAt(0) || 'A'}
                                </span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">{userData?.name || 'Anonymous Author'}</h4>
                                <p className="text-gray-400 mb-4">
                                    Passionate writer and content creator sharing insights and stories on BlogSpace. 
                                    Follow for more engaging content and thought-provoking articles.
                                </p>
                                <Link 
                                    to="/about" 
                                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                >
                                    View Profile
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div> */}

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-white mb-8">Related Posts</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.$id}
                                        to={`/post/${relatedPost.$id}`}
                                        className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={appwriteService.get_file(relatedPost.featuredImage)}
                                                alt={relatedPost.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.target.src = appwriteService.get_file_view(relatedPost.featuredImage);
                                                }}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                                                {relatedPost.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm">
                                                {formatDate(relatedPost.$createdAt)}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    ) : null;
}