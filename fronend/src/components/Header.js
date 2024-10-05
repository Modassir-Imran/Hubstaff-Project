import React from 'react'

import img1 from '../assets/image 1.png'
import img2 from '../assets/image 2.png'
import img3 from '../assets/image 3.png'
// import ring from '../assets/ring 1.png'

const Header = () => {
  return (
    <div>
      <header className='flex flex-col items-center  bg-blue-950  text-center py-16 px-24'>
        {/* Main heading with gradient */}
        <h1 className='text-4xl sm:text-6xl mx-24 font-bold text-white mt-6'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500'>
            Time tracking software
          </span>
          for the global workforce
        </h1>

        {/* Subtitle */}
        <p className='text-xl text-gray-400 mt-8'>
          Integrated time tracking, productivity metrics, and payroll for your
          distributed team.
        </p>

        {/* Email input and button */}
        <div className='flex flex-col sm:flex-row items-center mt-12 '>
          <input
            type='email'
            placeholder='Enter your work email'
            className='px-4 text-lg  py-4 w-72 rounded-l-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button className='px-4 py-4 text-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-r-md shadow-md hover:from-purple-600 hover:to-blue-700'>
            Create account
          </button>
        </div>

        {/* G2 Leader badge and message */}
        <div className='flex items-center justify-center space-x-2 mt-4 text-white'>
          <span>🏆 G2 Leader Summer 2024</span>
          <span>|</span>
          <span>No credit card required</span>
        </div>

        <div className='container mx-auto px-4 pt-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20 justify-items-center'>
            {[img1, img2, img3].map((img, index) => (
              <div
                key={index}
                className='w-full max-w-sm aspect-square flex items-center justify-center'
              >
                <img
                  className='w-full h-full object-cover rounded-2xl'
                  src={img}
                  alt={`Images ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </header>
      {/* <div className='bg-white w-full h-32'>
        <p className=' mx-auto text-2xl font-medium hidden md:block'>
          Time tracking & productivity metrics trusted by{' '}
          <span className='text-blue-600 font-bold'> 112,000+</span> businesses
        </p>
      </div> */}
    </div>
  )
}

export default Header
