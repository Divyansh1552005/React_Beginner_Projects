import React, {useState} from 'react'
import authservice from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import { toast } from 'react-toastify'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        // Reset error message before making the request, this is done to ensure that any previous error is cleared
        setError("")
        const toastId = toast.loading("Creating your account...")
        try {
            const userData = await authservice.create_account(data.email, data.password, data.name)
            if (userData) {
                const userData = await authservice.get_current_user()
                if(userData) {
                    dispatch(login({userData})); // store user data in redux with correct payload structure
                    toast.update(toastId, {
                        render: `Welcome to BlogSpace, ${userData.name}! 🎉`,
                        type: "success",
                        isLoading: false,
                        autoClose: 3000,
                    });
                    navigate("/") 
                }
            }
        } catch (error) {
            toast.update(toastId, {
                render: error.message || "Account creation failed. Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 4000,
            });
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
            <div className={`mx-auto w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl`}>
            <div className="mb-6 flex justify-center">
                    <span className="inline-block w-full max-w-[80px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-white mb-2">Create Account</h2>
                <p className="text-center text-sm text-gray-300 mb-6">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-400 mt-4 text-center bg-red-900/20 border border-red-800 rounded-lg p-3">{error}</p>}

                <form onSubmit={handleSubmit(create)} className="mt-6">
                    <div className='space-y-4'>
                        <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                         {...register("name", {
                            required: true,
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters long"
                            },
                            maxLength: {
                                value: 50,
                                message: "Name must be less than 50 characters long"
                            }
                        })}
                        />
                        <Input
                        label="Email"
                        placeholder="Enter your email address"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password"
                        type="password"
                        placeholder="Create a strong password"
                        {...register("password", {
                            required: true,})}
                        />
                        <Button 
                            type="submit" 
                            className="w-full mt-6"
                            bgColor="bg-blue-600 hover:bg-blue-700"
                        >
                            Create Account
                        </Button> 
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup