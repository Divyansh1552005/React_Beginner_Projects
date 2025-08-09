import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from "react-redux"
import authservice from "../appwrite/auth"
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        const toastId = toast.loading("Signing you in...")
        try {
            const session = await authservice.login(data.email, data.password)
            if (session) {
                const userData = await authservice.get_current_user() // get user data after login
                if (userData) {
                    dispatch(authLogin({userData})); // store user data in redux with correct payload structure
                    toast.update(toastId, {
                        render: `Welcome back, ${userData.name}! 🎉`,
                        type: "success",
                        isLoading: false,
                        autoClose: 3000,
                    });
                    navigate("/") // login successful, redirect to home page
                }
            }
        }
        catch (error) {
            toast.update(toastId, {
                render: error.message || "Login failed. Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 4000,
            });
            setError(error.message)
        }
    }

    return (
        <div
            className='flex items-center justify-center w-full min-h-screen px-4'
        >
            <div className={`mx-auto w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl`}>
                <div className="mb-6 flex justify-center">
                    <span className="inline-block w-full max-w-[80px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-white mb-2">Welcome Back</h2>
                <p className="text-center text-sm text-gray-300 mb-6">
                    Don&apos;t have an account?{' '}
                    <Link
                        to="/signup"
                        className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-400 mt-4 text-center bg-red-900/20 border border-red-800 rounded-lg p-3">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-6'>
                    <div className='space-y-4'>
                           <Input
                            label="Email"
                            placeholder="Enter your email address"
                            type="email"
                            {...register("email", {   
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full mt-6"
                            bgColor="bg-blue-600 hover:bg-blue-700"
                        >Sign In</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login