import React, { useState } from 'react'
import { Container, Input, Button } from '../Components'
import { useSelector } from 'react-redux'

function Settings() {
    const [activeTab, setActiveTab] = useState('general')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const userData = useSelector((state) => state.auth.userData)

    const tabs = [
        { id: 'general', name: 'General', icon: '⚙️' },
        { id: 'privacy', name: 'Privacy', icon: '🔒' },
        { id: 'notifications', name: 'Notifications', icon: '🔔' },
        { id: 'security', name: 'Security', icon: '🛡️' },
    ]

    const handleSaveSettings = async () => {
        setLoading(true)
        setMessage('')
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            setMessage('Settings saved successfully!')
        } catch (error) {
            setMessage('Failed to save settings. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case 'general':
                return (
                    <div className='space-y-6'>
                        <h3 className='text-xl font-semibold text-white mb-4'>General Settings</h3>
                        
                        <div className='space-y-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-300 mb-2'>Language</label>
                                <select className='px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 w-full'>
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                    <option>German</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className='block text-sm font-medium text-gray-300 mb-2'>Timezone</label>
                                <select className='px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 w-full'>
                                    <option>UTC-05:00 (Eastern Time)</option>
                                    <option>UTC-08:00 (Pacific Time)</option>
                                    <option>UTC+00:00 (GMT)</option>
                                    <option>UTC+05:30 (India Standard Time)</option>
                                </select>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-white font-medium'>Dark Mode</p>
                                    <p className='text-gray-400 text-sm'>Use dark theme across the application</p>
                                </div>
                                <label className='relative inline-flex items-center cursor-pointer'>
                                    <input type='checkbox' className='sr-only peer' defaultChecked />
                                    <div className='w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
                                </label>
                            </div>
                        </div>
                    </div>
                )
            
            case 'privacy':
                return (
                    <div className='space-y-6'>
                        <h3 className='text-xl font-semibold text-white mb-4'>Privacy Settings</h3>
                        
                        <div className='space-y-4'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-white font-medium'>Profile Visibility</p>
                                    <p className='text-gray-400 text-sm'>Make your profile visible to other users</p>
                                </div>
                                <label className='relative inline-flex items-center cursor-pointer'>
                                    <input type='checkbox' className='sr-only peer' defaultChecked />
                                    <div className='w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
                                </label>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-white font-medium'>Show Email</p>
                                    <p className='text-gray-400 text-sm'>Display email address on your public profile</p>
                                </div>
                                <label className='relative inline-flex items-center cursor-pointer'>
                                    <input type='checkbox' className='sr-only peer' />
                                    <div className='w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
                                </label>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-white font-medium'>Analytics</p>
                                    <p className='text-gray-400 text-sm'>Allow us to collect anonymous usage data</p>
                                </div>
                                <label className='relative inline-flex items-center cursor-pointer'>
                                    <input type='checkbox' className='sr-only peer' defaultChecked />
                                    <div className='w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
                                </label>
                            </div>
                        </div>
                    </div>
                )
            
            case 'notifications':
                return (
                    <div className='space-y-6'>
                        <h3 className='text-xl font-semibold text-white mb-4'>Notification Preferences</h3>
                        
                        <div className='space-y-4'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-white font-medium'>Email Notifications</p>
                                    <p className='text-gray-400 text-sm'>Receive email updates about your account</p>
                                </div>
                                <label className='relative inline-flex items-center cursor-pointer'>
                                    <input type='checkbox' className='sr-only peer' defaultChecked />
                                    <div className='w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
                                </label>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-white font-medium'>New Post Notifications</p>
                                    <p className='text-gray-400 text-sm'>Get notified when someone you follow posts</p>
                                </div>
                                <label className='relative inline-flex items-center cursor-pointer'>
                                    <input type='checkbox' className='sr-only peer' />
                                    <div className='w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
                                </label>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-white font-medium'>Marketing Emails</p>
                                    <p className='text-gray-400 text-sm'>Receive promotional emails and updates</p>
                                </div>
                                <label className='relative inline-flex items-center cursor-pointer'>
                                    <input type='checkbox' className='sr-only peer' />
                                    <div className='w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
                                </label>
                            </div>
                        </div>
                    </div>
                )
            
            case 'security':
                return (
                    <div className='space-y-6'>
                        <h3 className='text-xl font-semibold text-white mb-4'>Security Settings</h3>
                        
                        <div className='space-y-6'>
                            <div>
                                <h4 className='text-lg font-medium text-white mb-3'>Change Password</h4>
                                <div className='space-y-4'>
                                    <Input
                                        label="Current Password"
                                        type="password"
                                        placeholder="Enter current password"
                                    />
                                    <Input
                                        label="New Password"
                                        type="password"
                                        placeholder="Enter new password"
                                    />
                                    <Input
                                        label="Confirm New Password"
                                        type="password"
                                        placeholder="Confirm new password"
                                    />
                                    <Button bgColor='bg-blue-600 hover:bg-blue-700'>
                                        Update Password
                                    </Button>
                                </div>
                            </div>
                            
                            <div className='border-t border-gray-600 pt-6'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <p className='text-white font-medium'>Two-Factor Authentication</p>
                                        <p className='text-gray-400 text-sm'>Add an extra layer of security to your account</p>
                                    </div>
                                    <Button bgColor='bg-green-600 hover:bg-green-700'>
                                        Enable 2FA
                                    </Button>
                                </div>
                            </div>
                            
                            <div className='border-t border-gray-600 pt-6'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <p className='text-white font-medium'>Active Sessions</p>
                                        <p className='text-gray-400 text-sm'>Manage devices logged into your account</p>
                                    </div>
                                    <Button bgColor='bg-gray-700 hover:bg-gray-600'>
                                        View Sessions
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            
            default:
                return null
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8'>
            <Container>
                <div className='max-w-6xl mx-auto'>
                    {/* Header */}
                    <div className='text-center mb-8'>
                        <h1 className='text-3xl md:text-4xl font-bold text-white mb-4'>Settings</h1>
                        <p className='text-gray-300'>Manage your preferences and account settings</p>
                    </div>

                    <div className='grid lg:grid-cols-4 gap-8'>
                        {/* Sidebar Navigation */}
                        <div className='lg:col-span-1'>
                            <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 shadow-xl'>
                                <nav className='space-y-2'>
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                                                activeTab === tab.id
                                                    ? 'bg-blue-600 text-white'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`}
                                        >
                                            <span className='text-lg'>{tab.icon}</span>
                                            <span className='font-medium'>{tab.name}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className='lg:col-span-3'>
                            <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl'>
                                {message && (
                                    <div className='mb-6 p-3 bg-green-900/20 border border-green-800 rounded-lg text-green-400'>
                                        {message}
                                    </div>
                                )}
                                
                                {renderTabContent()}
                                
                                <div className='mt-8 pt-6 border-t border-gray-600'>
                                    <div className='flex flex-col sm:flex-row gap-4'>
                                        <Button
                                            onClick={handleSaveSettings}
                                            disabled={loading}
                                            bgColor='bg-blue-600 hover:bg-blue-700'
                                        >
                                            {loading ? 'Saving...' : 'Save Settings'}
                                        </Button>
                                        <Button bgColor='bg-gray-700 hover:bg-gray-600'>
                                            Reset to Default
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Settings
