import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'


function App() {
  const {register, handleSubmit, formState: { errors }} = useForm()

  const onSubmit = (data) =>{
    console.log(data);
    return data;
  }


  return (
    <>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Name' {...register("name" , 
          {required : true, 
          maxLength : {
            value: 40,
            message: "Name cannot exceed 40 characters"
          },
          minLength: {
            value: 5,
            message: "Name must be at least 2 characters"
          }


          })}/>
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

        <br/>
        <input type="email" placeholder='Email' {...register("email" , {required : true})}/>
        <br/>
        <input type="password" placeholder='Password' {...register("password" , {required : true, minLength : 6})}/>
        <br/>
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default App
