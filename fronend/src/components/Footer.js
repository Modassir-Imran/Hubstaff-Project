import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Footer = () => {
  return (
    <footer className='bg-blue-950 text-white font-medium'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12'>
          {/* Software Column */}
          <div>
            <h4 className='text-white font-bold mb-4'>Software</h4>
            <ul className='space-y-2'>
              {[
                'Features overview',
                'Solutions',
                'Free time tracking app',
                'Integrations',
                'Download app',
                'Demo',
                'Time tracking API',
                'Request a feature'
              ].map((item, index) => (
                <li key={index}>
                  <a href='/' className='hover:underline'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Center Column */}
          <div>
            <h4 className='text-white font-bold mb-4'>Learning center</h4>
            <ul className='space-y-2'>
              {[
                'Time tracking resources',
                'Workforce management resources',
                'Business resources',
                'Guiding principles',
                'Blog'
              ].map((item, index) => (
                <li key={index}>
                  <a href='/' className='hover:underline'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div>
            <h4 className='text-white font-bold mb-4'>More</h4>
            <ul className='space-y-2'>
              {['Help Center', 'FAQ', 'Status'].map((item, index) => (
                <li key={index}>
                  <a href='/' className='hover:underline'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className='text-white font-bold mb-4'>Company</h4>
            <ul className='space-y-2'>
              {[
                'About us',
                'Contact Us',
                'Reviews',
                'Customer stories',
                'Careers',
                'Press',
                'Partners'
              ].map((item, index) => (
                <li key={index}>
                  <a href='/' className='hover:underline'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section (Button + Social Icons) */}
          <div className='md:col-span-2 lg:col-span-1'>
            <h4 className='text-white text-2xl lg:text-3xl mb-4'>
              Ready to get started?
            </h4>
            <button className='bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 text-lg lg:text-xl font-medium  sm:w-auto'>
              Get started
            </button>
            <hr className='my-6 border-gray-700' />
            <p className='font-medium text-lg lg:text-xl mb-4'>Follow Us</p>
            {/* Social Icons */}
            <div className='flex space-x-6'>
              {['facebook-f', 'twitter', 'linkedin', 'instagram'].map(
                (icon, index) => (
                  <a
                    key={index}
                    href='/'
                    className='text-white hover:text-blue-400 text-xl'
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-700 mt-8 py-6'>
        <div className='container mx-auto px-4 text-center text-gray-400 text-sm'>
          <p>
            © 2024 Netsoft Holdings, LLC | 11650 Olio Road, Suite /1000 - 193
            Fishers, IN 46037
          </p>
          <p className='mt-2'>
            {['Terms', 'Privacy', 'GDPR compliance'].map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && ' | '}
                <a href='/' className='hover:underline'>
                  {item}
                </a>
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
