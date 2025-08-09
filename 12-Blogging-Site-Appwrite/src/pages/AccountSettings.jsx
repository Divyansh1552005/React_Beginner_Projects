import React, { useState, useEffect } from 'react'
import { Container, Button, Input } from '../Components'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'

function AccountSettings() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ type: '', text: '' })
    
    const userData = useSelector((state) => state.auth.userData)
    const dispatch = useDispatch()

    // Form for profile updates
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            name: userData?.name || ''
        }
    })

    useEffect(() => {
        if (userData) {
            setValue('name', userData.name || '')
        }
    }, [userData, setValue])

    const showMessage = (type, text) => {
        setMessage({ type, text })
        setTimeout(() => setMessage({ type: '', text: '' }), 5000)
    }

    // Update profile name
    const updateProfile = async (data) => {
        setLoading(true)
        try {
            const response = await authService.update_profile(data.name)
            dispatch(login({ userData: response }))
            showMessage('success', 'Profile updated successfully!')
        } catch (error) {
            showMessage('error', error.message || 'Failed to update profile')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12'>
            <Container>
                <div className='max-w-2xl mx-auto'>
                    {/* Header */}
                    <div className='text-center mb-12'>
                        <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                            Account Settings
                        </h1>
                        <p className='text-xl text-gray-400'>
                            Manage your basic account information
                        </p>
                    </div>

                    {/* Message Display */}
                    {message.text && (
                        <div className={`mb-6 p-4 rounded-lg ${
                            message.type === 'success' 
                                ? 'bg-green-900/30 border border-green-700 text-green-400'
                                : 'bg-red-900/30 border border-red-700 text-red-400'
                        }`}>
                            {message.text}
                        </div>
                    )}

                    {/* Main Content */}
                    <div className='bg-gray-800 rounded-xl p-8 border border-gray-700'>
                        <h2 className='text-2xl font-semibold text-white mb-6'>Basic Information</h2>
                        
                        {/* Profile Form */}
                        <form onSubmit={handleSubmit(updateProfile)} className='space-y-6'>
                            <div>
                                <Input
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    {...register('name', {
                                        required: 'Name is required',
                                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                                    })}
                                />
                                {errors.name && (
                                    <p className='text-red-400 text-sm mt-1'>{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label className='inline-block mb-1 pl-1 text-gray-300'>Email</label>
                                <input
                                    type="email"
                                    value={userData?.email || ''}
                                    disabled
                                    className='px-3 py-2 rounded-lg bg-gray-700 text-gray-400 border border-gray-600 w-full cursor-not-allowed'
                                />
                                <p className='text-gray-500 text-sm mt-1'>Email cannot be changed</p>
                            </div>

                            <div>
                                <label className='inline-block mb-1 pl-1 text-gray-300'>Account Created</label>
                                <input
                                    type="text"
                                    value={userData?.$createdAt ? new Date(userData.$createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    }) : 'N/A'}
                                    disabled
                                    className='px-3 py-2 rounded-lg bg-gray-700 text-gray-400 border border-gray-600 w-full cursor-not-allowed'
                                />
                            </div>

                            <div className='pt-4'>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    bgColor='bg-blue-600 hover:bg-blue-700'
                                    className='w-full md:w-auto'
                                >
                                    {loading ? 'Updating...' : 'Update Profile'}
                                </Button>
                            </div>
                        </form>

                        {/* Account Info Display */}
                        <div className='mt-8 pt-6 border-t border-gray-700'>
                            <h3 className='text-lg font-semibold text-white mb-4'>Account Summary</h3>
                            <div className='grid md:grid-cols-2 gap-4'>
                                <div className='bg-gray-700 p-4 rounded-lg'>
                                    <p className='text-gray-400 text-sm'>Account Status</p>
                                    <p className='text-green-400 font-semibold'>Active</p>
                                </div>
                                <div className='bg-gray-700 p-4 rounded-lg'>
                                    <p className='text-gray-400 text-sm'>User ID</p>
                                    <p className='text-white font-mono text-sm'>{userData?.$id || 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AccountSettings
