import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
    errors: {}
  })

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target
    const newValue = type === 'checkbox' ? checked : value
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Validate inputs
    const errors = {}
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    if (!formData.password) {
      errors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    }
    if (Object.keys(errors).length > 0) {
      setFormData(prevState => ({
        ...prevState,
        errors
      }))
      return
    }

    // Submit form
    console.log('Form submitted:', formData)
  }
  return (
    <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
      <h1 className='text-5xl font-semibold'>Welcome back</h1>
      <p className='text-lg font-medium text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
      <form className='mt-8'>
        <div>
          <label className='text-lg font-medium'>Email</label>
          <input
            className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-gray-100 
            hover:border-gray-400 focus:outline-none
            focus:border-violet-400 focus:ring-1 focus:ring-violet-400 
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
            invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500
            ${formData.errors.email ? 'invalid:border-red-500 invalid:text-red-500 focus:invalid:border-red-500 ' : 'valid:border-green-500 valid:text-green-500 focus:valid:border-green-500 '}
            `}
            placeholder='Enter your email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className='text-lg font-medium'>Password</label>
          <input
            className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-gray-100
            hover:border-gray-400 focus:outline-none
            focus:border-violet-400 focus:ring-1 focus:ring-violet-400 
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200
            invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 
            ${formData.errors.password ? 'invalid:border-red-500 invalid:text-red-500 focus:invalid:border-red-500 ' : 'valid:border-green-500 valid:text-green-500 focus:valid:border-green-500 '}`}
            placeholder='Enter your password'
            type = 'password'
            name = 'password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='mt-8 flex justify-between items-center '>
          <div>
            <input
              type='checkbox'
              id='remember'
            />
            <label for="remember" className='ml-2 font-medium text-base'>Remember for 30 days</label>
          </div>
        <button className='font-medium text-base text-violet-500'>Forgot Password</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 rounded-xl bg-violet-500 text-white text-lg font-bold' onSubmit={handleSubmit}>Sign in</button>
          <button className='flex items-center justify-center border-2  border-gray-100 py-2  rounded-xl gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all font-semibold'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
          </svg>
            Sign in with google
          </button>
        </div>
        <div className='mt-8 flex items-center justify-center'>
          <p className='font-medium text-base'>Don't have an account?</p>
          <button className='text-violet-500 font-medium ml-2'>Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Form;