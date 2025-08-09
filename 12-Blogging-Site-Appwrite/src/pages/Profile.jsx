import React, { useState } from 'react'
import { Container, Input, Button } from '../Components'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'

function Profile() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const userData = useSelector((state) => state.auth.userData)
    const dispatch = useDispatch()
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: userData?.name || '',
            email: userData?.email || '',
            bio: userData?.bio || '',
        }
    })

    const updateProfile = async (data) => {
        setLoading(true)
        setError('')
        setMessage('')
        
        try {
            // Note: In a real app, you'd have an updateProfile method in your auth service
            // For now, we'll simulate the update
            console.log('Updating profile with:', data)
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            setMessage('Profile updated successfully!')
            
            // In a real implementation, you'd update the user data in your auth service
            // and then dispatch the updated data to Redux
            
        } catch (error) {
            setError('Failed to update profile. Please try again.')
            console.error('Profile update error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8'>
            <Container>
                <div className='max-w-4xl mx-auto'>
                    {/* Header */}
                    <div className='text-center mb-8'>
                        <h1 className='text-3xl md:text-4xl font-bold text-white mb-4'>Profile Settings</h1>
                        <p className='text-gray-300'>Manage your account information and preferences</p>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-8'>
                        {/* Profile Picture Section */}
                        <div className='lg:col-span-1'>
                            <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-xl'>
                                <h3 className='text-lg font-semibold text-white mb-4'>Profile Picture</h3>
                                <div className='text-center'>
                                    <div className='w-32 h-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-4xl mx-auto mb-4'>
                                        {userData?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </div>
                                    <p className='text-gray-300 text-sm mb-4'>
                                        Click to upload a new profile picture
                                    </p>
                                    <Button className='w-full' bgColor='bg-gray-700 hover:bg-gray-600'>
                                        Upload Picture
                                    </Button>
                                </div>
                            </div>

                            {/* Account Stats */}
                            <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-xl mt-6'>
                                <h3 className='text-lg font-semibold text-white mb-4'>Account Stats</h3>
                                <div className='space-y-3'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-gray-300'>Posts Published</span>
                                        <span className='text-white font-semibold'>0</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-gray-300'>Member Since</span>
                                        <span className='text-white font-semibold'>2024</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-gray-300'>Profile Views</span>
                                        <span className='text-white font-semibold'>--</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Form Section */}
                        <div className='lg:col-span-2'>
                            <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl'>
                                <h3 className='text-xl font-semibold text-white mb-6'>Personal Information</h3>
                                
                                {message && (
                                    <div className='mb-4 p-3 bg-green-900/20 border border-green-800 rounded-lg text-green-400'>
                                        {message}
                                    </div>
                                )}
                                
                                {error && (
                                    <div className='mb-4 p-3 bg-red-900/20 border border-red-800 rounded-lg text-red-400'>
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit(updateProfile)} className='space-y-6'>
                                    <div className='grid md:grid-cols-2 gap-6'>
                                        <Input
                                            label="Full Name"
                                            placeholder="Enter your full name"
                                            {...register("name", { 
                                                required: "Name is required",
                                                minLength: { value: 2, message: "Name must be at least 2 characters" }
                                            })}
                                        />
                                        <Input
                                            label="Email Address"
                                            placeholder="Enter your email"
                                            type="email"
                                            {...register("email", { 
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="inline-block mb-2 pl-1 text-sm font-medium text-gray-300">
                                            Bio
                                        </label>
                                        <textarea
                                            placeholder="Tell us about yourself..."
                                            rows="4"
                                            {...register("bio", { maxLength: { value: 500, message: "Bio must be less than 500 characters" } })}
                                            className="px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:bg-gray-600 focus:ring-2 focus:ring-blue-500 border border-gray-600 hover:border-gray-500 transition-all duration-200 w-full resize-none"
                                        />
                                    </div>

                                    <div className='border-t border-gray-600 pt-6'>
                                        <h4 className='text-lg font-semibold text-white mb-4'>Preferences</h4>
                                        <div className='space-y-4'>
                                            <div className='flex items-center justify-between'>
                                                <div>
                                                    <p className='text-white font-medium'>Email Notifications</p>
                                                    <p className='text-gray-400 text-sm'>Receive email updates about your posts</p>
                                                </div>
                                                <label className='relative inline-flex items-center cursor-pointer'>
                                                    <input type='checkbox' className='sr-only peer' defaultChecked />
                                                    <div className='w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
                                                </label>
                                            </div>
                                            
                                            <div className='flex items-center justify-between'>
                                                <div>
                                                    <p className='text-white font-medium'>Public Profile</p>
                                                    <p className='text-gray-400 text-sm'>Make your profile visible to other users</p>
                                                </div>
                                                <label className='relative inline-flex items-center cursor-pointer'>
                                                    <input type='checkbox' className='sr-only peer' defaultChecked />
                                                    <div className='w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col sm:flex-row gap-4 pt-6'>
                                        <Button
                                            type="submit"
                                            disabled={loading}
                                            className='flex-1'
                                            bgColor='bg-blue-600 hover:bg-blue-700'
                                        >
                                            {loading ? 'Saving...' : 'Save Changes'}
                                        </Button>
                                        <Button
                                            type="button"
                                            className='flex-1'
                                            bgColor='bg-gray-700 hover:bg-gray-600'
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Profile
