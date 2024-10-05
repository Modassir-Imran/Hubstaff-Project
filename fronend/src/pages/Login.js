// import React, { useState } from "react";
// import axios from "axios"; // for making API requests

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Make API request to login user
//       const response = await axios.post("/api/login", { email, password });

//       if (response.data.success) {
//         // Handle successful login (e.g., redirect, store token)
//         console.log("Login successful:", response.data);
//       } else {
//         setError("Login failed. Please check your credentials.");
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-blue-500">
//       <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-5 text-center">Sign in to Hubstaff</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Work Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-xs italic">{error}</p>}
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Sign In
//             </button>
//           </div>
//           <p className="mt-4 text-center">
//             Don't have an account? <a href="/signup" className="text-blue-500">Get started</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   })
//   const [error, setError] = useState('')
//   const navigate = useNavigate()

//   const handleChange = e => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async e => {
//     e.preventDefault()
//     setError('')

//     const response = await fetch('http://localhost:4000/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })

//     const data = await response.json()
//     if (data.success) {
//       alert('Login successful!')
//       localStorage.setItem('authToken', data.authToken)
//       navigate('/dashboard')
//     } else {
//       setError(data.errors ? data.errors : data.error)
//     }
//   }

//   return (
//     <div className='flex h-screen justify-center items-center bg-gray-100'>
//       <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
//         <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
//         {error && <p className='text-red-500 text-center'>{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className='mb-4'>
//             <label
//               htmlFor='email'
//               className='block text-sm font-medium text-gray-700'
//             >
//               Email or Username <span className='text-red-600 text-lg'>*</span>
//             </label>
//             <input
//               type='email'
//               id='email'
//               name='email'
//               value={credentials.email}
//               onChange={handleChange}
//               className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
//               required
//             />
//           </div>
//           <div className='mb-4'>
//             <label
//               htmlFor='password'
//               className='block text-sm font-medium text-gray-700'
//             >
//               Password <span className='text-red-600 text-lg'>*</span>
//             </label>
//             <input
//               type='password'
//               id='password'
//               name='password'
//               value={credentials.password}
//               onChange={handleChange}
//               className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
//               required
//             />
//           </div>
//           <button
//             type='submit'
//             className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'
//           >
//             Submit
//           </button>
//         </form>
//         <div className='mt-4 text-center'>
//           <a href='/signu' className='text-blue-500 hover:underline'>
//             Don't have an account? Sign up
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import profile from '../assets/profile.jpg'
import logo from '../assets/logo.webp'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })

    const data = await response.json()
    if (data.success) {
      alert('Login successful!')
      localStorage.setItem('authToken', data.authToken)
      navigate('/dashboard')
    } else {
      setError(data.errors ? data.errors : data.error)
    }
  }

  return (
    <div className='flex flex-col md:flex-row'>
      {/* Left Side (Welcome Section) */}
      <div className=' bg-blue-600 text-white lg:flex flex-col  p-16 pt-32 w-1/2  hidden'>
        <div className=''>
          <h1 className='hidden lg:block text-7xl font-bold mb-6'>
            Welcome to our community
          </h1>
          <div className='w-1/4 bg-white h-[2px] mt-36'></div>
          <div className='mt-20 space-y-4'>
            <span className='text-yellow-400 text-4xl'>★★★★★</span>
            <p className='text-2xl font-medium  mb-4 w-3/4 '>
              Hubstaff allows us to focus on what really matters. We now know
              more about our business and spend less time managing it, helping
              us be a better company.
            </p>
          </div>

          <div className='mt-28  flex gap-6 '>
            <img
              src={profile} // Replace with actual testimonial image
              alt='User'
              className='h-14 w-14 rounded-full'
            />
            <div className='flex flex-col'>
              <p className='text-lg'>Modassir Imran</p>
              <p className='text-sm italic'>Fullstack Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (Login Section) */}
      <div className='bg-white flex flex-col justify-center lg:w-1/2 w-full p-8'>
        <div className='flex mb-32 justify-end'>
          <img src={logo} alt='Logo' className='w-10 h-10' />
          <Link to='/' className='ml-2 text-3xl font-bold text-gray-800'>
            Hubstaff
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <div className='w-full max-w-xl'>
            <h2 className='text-5xl font-bold mb-16'>Sign in to Hubstaff</h2>
            {error && <p className='text-red-500 text-center'>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='block font-medium text-gray-500'
                >
                  WORK EMAIL <span className='text-red-600 text-lg'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={credentials.email}
                  placeholder='Enter email'
                  onChange={handleChange}
                  className='mt-1 p-3 block w-full border border-gray-300  rounded-md'
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='password'
                  className='block font-medium text-gray-500'
                >
                  PASSWORD <span className='text-red-600 text-lg'>*</span>
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={credentials.password}
                  placeholder='Password'
                  onChange={handleChange}
                  className='mt-1 p-3 block w-full border border-gray-300 rounded-md'
                  required
                />
                <p className='text-blue-600 text-end font-medium my-2'>
                  forgot your password ?
                </p>
              </div>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white text-xl font-medium py-3 rounded-md hover:bg-blue-600 mt-4'
              >
                Sign in
              </button>
            </form>
            <div className='mt-4 text-center'>
              <a
                href='/signup'
                className=' text-lg font-medium hover:underline'
              >
                <p>
                  Don't have an account ?{' '}
                  <span className='text-blue-600'>Get started</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
