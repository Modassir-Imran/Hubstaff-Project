import React from 'react'

function HubstaffBanner () {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-blue-600 h-[400px] md:min-h-screen  w-full flex items-center'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24'>
        <div className='flex flex-col gap-6 sm:gap-8'>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Try Hubstaff free for 14 days{' '}
            <span role='img' aria-label='rocket' className='inline-block'>
              🚀
            </span>
          </h1>
          <button className='w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 bg-gray-700 text-white px-2 md:px-6 py-2  md:py-5 rounded-lg font-semibold text-lg sm:text-xl hover:bg-blue-900 transition duration-300 ease-in-out'>
            Get started
          </button>
          <p className='text-white text-base sm:text-lg font-medium'>
            No credit card required
          </p>
        </div>
      </div>
    </div>
  )
}

export default HubstaffBanner
