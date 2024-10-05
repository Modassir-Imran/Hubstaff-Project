import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.webp'
import profile from '../assets/profile.jpg'

function Signup () {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await fetch('http://localhost:4000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: credentials.firstName,
        middleName: credentials.middleName,
        lastName: credentials.lastName,
        email: credentials.email,
        password: credentials.password,
        confirmPassword: credentials.confirmPassword
      })
    })

    const json = await response.json()
    if (!json.success) {
      alert('Enter valid credentials')
    } else {
      navigate('/login')
    }
  }

  const onChangeHandler = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className='h-screen flex'>
      {/* Left side: Form */}
      <div className='w-full lg:w-1/2 p-10 flex flex-col justify-center  bg-white'>
        <div className='max-w-md mx-auto'>
          <div className='mb-8'>
            <div className='flex gap-3 items-center'>
              <img
                src={Logo} // Replace this with your actual logo
                alt='Hubstaff logo'
                className='h-14 mb-4'
              />
              <span className='text-3xl font-bold mb-3'> Hubstaff</span>
            </div>
            <h1 className='text-4xl font-bold mb-2'>Automate Timesheets</h1>
            <p className='text-gray-600 mb-8'>
              Maximize productivity with real-time insights, automated
              timesheets, budget costing, and more.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-700'
              >
                First Name <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={credentials.firstName}
                onChange={onChangeHandler}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium text-gray-700'
              >
                Last Name <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={credentials.lastName}
                onChange={onChangeHandler}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Work Email <span className='text-red-600'>*</span>
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={credentials.email}
                onChange={onChangeHandler}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                required
              />
              <p className='mt-2 text-sm text-gray-500'>
                We'll never share your email with anyone else.
              </p>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password <span className='text-red-600'>*</span>
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={credentials.password}
                onChange={onChangeHandler}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-gray-700'
              >
                Confirm Password <span className='text-red-600'>*</span>
              </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={credentials.confirmPassword}
                onChange={onChangeHandler}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-sm'>
                <input
                  type='checkbox'
                  className='mr-2 leading-tight'
                  required
                />
                I agree to the <span className='text-blue-600'>Terms</span>,{' '}
                <span className='text-blue-600'>Privacy Policy</span>, and{' '}
                <span className='text-blue-600'>DPA</span>.
              </label>
            </div>

            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'
            >
              Create my account
            </button>
          </form>

          <div className='mt-4 text-center'>
            <Link to='/login' className='text-blue-500 hover:underline'>
              Already a user? Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right side: Testimonial */}
      <div className='hidden lg:flex w-full bg-blue-600 justify-center items-center'>
        <div className='text-white w-1/3'>
          <div className='bg-gradient-to-b from-blue-700 to-blue-400 bg-opacity-10 p-8 border-2 border-gray-200 rounded-lg'>
            <div className='flex flex-col items-center'>
              <img
                src={profile} // Replace with actual testimonial image
                alt='User'
                className='h-16 w-16 my-4 rounded-full'
              />
              <div>
                <p className='font-semibold text-xl'>
                  Hubstaff is the most cost-effective solution in its industry
                  since it delivers all the tools needed at the best price.
                </p>
                <div>
                  <hr className='my-10 w-full ' />
                  <p className='mt-4'>
                    <strong>Industry:</strong> IT <br />
                    <strong>Employees:</strong> 220
                  </p>
                  <div className='flex flex-col'>
                    <p className='mt-10 text-xl font-medium text-gray-200'>
                      Modassir Imran{' '}
                    </p>
                    <span className='font-medium text-gray-200 text-sm'>
                      Fullstack Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
