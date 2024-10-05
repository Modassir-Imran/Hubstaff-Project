import React from 'react'

const features = [
  'Custom roles and permissions',
  'GDPR & HIPAA',
  'Concierge setup',
  'SOC 2 Type II',
  'Single sign-on',
  'Advanced reporting',
  'MSI installer',
  'On-premise/self-hosted',
  'Background timer',
  'Account provisioning',
  'Follows security best practices'
]

const EnterpriseReadyComponent = () => {
  return (
    <section className='bg-gray-500 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-4xl rounded-2xl bg-indigo-950 text-white py-8 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold'>Enterprise ready</h2>
          <p className='mt-2 text-lg'>
            Scalable, secure setup and distribution for larger teams.
          </p>

          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 sm:mt-12'>
            {features.map((feature, index) => (
              <div key={index} className='flex items-center'>
                <svg
                  className='w-5 h-5 bg-blue-600 rounded-full text-white mr-3 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='3'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  ></path>
                </svg>
                <p className='text-sm sm:text-base'>{feature}</p>
              </div>
            ))}
          </div>

          <div className='mt-10 sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300'>
              Learn more
            </button>
            <button className='bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-6 rounded transition duration-300'>
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseReadyComponent
