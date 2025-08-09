import React, { useState } from 'react'
import { Container, Button } from '../Components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Account() {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const userData = useSelector((state) => state.auth.userData)

    const handleExportData = async () => {
        setLoading(true)
        try {
            // Simulate data export
            await new Promise(resolve => setTimeout(resolve, 2000))
            // In a real app, this would trigger a download
            alert('Your data export has been prepared and sent to your email!')
        } catch (error) {
            alert('Failed to export data. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteAccount = async () => {
        setLoading(true)
        try {
            // Simulate account deletion
            await new Promise(resolve => setTimeout(resolve, 2000))
            alert('Account deletion request submitted. You will receive a confirmation email.')
            setShowDeleteModal(false)
        } catch (error) {
            alert('Failed to process deletion request. Please try again.')
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
                        <h1 className='text-3xl md:text-4xl font-bold text-white mb-4'>Account Management</h1>
                        <p className='text-gray-300'>Manage your account security and data</p>
                    </div>

                    <div className='space-y-8'>
                        {/* Account Overview */}
                        <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl'>
                            <h2 className='text-2xl font-semibold text-white mb-6'>Account Overview</h2>
                            
                            <div className='grid md:grid-cols-2 gap-6'>
                                <div className='space-y-4'>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-400 mb-1'>Username</label>
                                        <p className='text-white font-medium'>dslc</p>
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-400 mb-1'>Email Address</label>
                                        <p className='text-white font-medium'>23124@iittu.ac.in</p>
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-400 mb-1'>Full Name</label>
                                        <p className='text-white font-medium'>{userData?.name || 'Divyansh Sharma'}</p>
                                    </div>
                                </div>
                                
                                <div className='space-y-4'>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-400 mb-1'>Account Type</label>
                                        <p className='text-white font-medium'>Standard User</p>
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-400 mb-1'>Member Since</label>
                                        <p className='text-white font-medium'>January 2024</p>
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-400 mb-1'>Last Login</label>
                                        <p className='text-white font-medium'>Today, 2:34 PM</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='mt-6 pt-6 border-t border-gray-600'>
                                <Link to="/profile">
                                    <Button bgColor='bg-blue-600 hover:bg-blue-700'>
                                        Edit Profile Information
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Security Settings */}
                        <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl'>
                            <h2 className='text-2xl font-semibold text-white mb-6'>Security & Access</h2>
                            
                            <div className='space-y-6'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-lg font-medium text-white'>Password</h3>
                                        <p className='text-gray-400 text-sm'>Last changed 30 days ago</p>
                                    </div>
                                    <Link to="/settings">
                                        <Button bgColor='bg-gray-700 hover:bg-gray-600'>
                                            Change Password
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-lg font-medium text-white'>Two-Factor Authentication</h3>
                                        <p className='text-gray-400 text-sm'>Not enabled</p>
                                    </div>
                                    <Button bgColor='bg-green-600 hover:bg-green-700'>
                                        Enable 2FA
                                    </Button>
                                </div>
                                
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-lg font-medium text-white'>Active Sessions</h3>
                                        <p className='text-gray-400 text-sm'>2 active devices</p>
                                    </div>
                                    <Button bgColor='bg-gray-700 hover:bg-gray-600'>
                                        Manage Sessions
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Login Activity */}
                        <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl'>
                            <h2 className='text-2xl font-semibold text-white mb-6'>Recent Login Activity</h2>
                            
                            <div className='space-y-4'>
                                <div className='flex items-center justify-between py-3 border-b border-gray-600'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                        <div>
                                            <p className='text-white font-medium'>Current Session</p>
                                            <p className='text-gray-400 text-sm'>Chrome on Windows • 192.168.1.100</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-400 text-sm'>Active now</p>
                                </div>
                                
                                <div className='flex items-center justify-between py-3 border-b border-gray-600'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
                                        <div>
                                            <p className='text-white font-medium'>Mobile App</p>
                                            <p className='text-gray-400 text-sm'>iPhone • 192.168.1.105</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-400 text-sm'>2 hours ago</p>
                                </div>
                                
                                <div className='flex items-center justify-between py-3'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
                                        <div>
                                            <p className='text-white font-medium'>Firefox on Mac</p>
                                            <p className='text-gray-400 text-sm'>macOS • 192.168.1.102</p>
                                        </div>
                                    </div>
                                    <p className='text-gray-400 text-sm'>Yesterday</p>
                                </div>
                            </div>
                        </div>

                        {/* Data & Privacy */}
                        <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl'>
                            <h2 className='text-2xl font-semibold text-white mb-6'>Data & Privacy</h2>
                            
                            <div className='space-y-6'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-lg font-medium text-white'>Download Your Data</h3>
                                        <p className='text-gray-400 text-sm'>Get a copy of all your data including posts and profile information</p>
                                    </div>
                                    <Button 
                                        onClick={handleExportData}
                                        disabled={loading}
                                        bgColor='bg-blue-600 hover:bg-blue-700'
                                    >
                                        {loading ? 'Preparing...' : 'Export Data'}
                                    </Button>
                                </div>
                                
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-lg font-medium text-white'>Privacy Settings</h3>
                                        <p className='text-gray-400 text-sm'>Manage how your data is used and shared</p>
                                    </div>
                                    <Link to="/settings">
                                        <Button bgColor='bg-gray-700 hover:bg-gray-600'>
                                            Privacy Settings
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className='bg-red-900/20 border border-red-800 rounded-2xl p-6 md:p-8 shadow-xl'>
                            <h2 className='text-2xl font-semibold text-red-400 mb-6'>Danger Zone</h2>
                            
                            <div className='space-y-6'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-lg font-medium text-white'>Delete Account</h3>
                                        <p className='text-gray-400 text-sm'>Permanently delete your account and all associated data</p>
                                    </div>
                                    <Button 
                                        onClick={() => setShowDeleteModal(true)}
                                        bgColor='bg-red-600 hover:bg-red-700'
                                    >
                                        Delete Account
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50'>
                    <div className='bg-gray-800 border border-gray-700 rounded-2xl p-6 max-w-md w-full'>
                        <h3 className='text-xl font-semibold text-white mb-4'>Delete Account</h3>
                        <p className='text-gray-300 mb-6'>
                            Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
                        </p>
                        <div className='flex space-x-4'>
                            <Button 
                                onClick={handleDeleteAccount}
                                disabled={loading}
                                bgColor='bg-red-600 hover:bg-red-700'
                                className='flex-1'
                            >
                                {loading ? 'Deleting...' : 'Yes, Delete Account'}
                            </Button>
                            <Button 
                                onClick={() => setShowDeleteModal(false)}
                                bgColor='bg-gray-700 hover:bg-gray-600'
                                className='flex-1'
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Account
