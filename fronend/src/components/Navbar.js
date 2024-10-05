import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='container mx-auto  bg-white shadow-md w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='flex items-center'>
            <img src={logo} alt='Logo' className='w-8 h-8' />
            <Link to='/' className='ml-2 text-2xl font-bold text-gray-800'>
              Hubstaff
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center justify-between flex-1 mx-8 text-lg font-medium'>
            <ul className='flex space-x-10 text-black font-medium'>
              <li>
                <Link to='#' className='hover:text-blue-600'>
                  Product
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-blue-600'>
                  Solutions
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-blue-600'>
                  Resources
                </Link>
              </li>
            </ul>
            <ul className='flex space-x-10 text-black font-medium'>
              <li>
                <to to='#' className='hover:text-blue-600'>
                  Pricing
                </to>
              </li>
              <li>
                <Link to='#' className='hover:text-blue-600'>
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className='hidden md:flex items-center space-x-6'>
            <Link
              to='/signup'
              className='bg-gradient-to-r from-purple-400  to-blue-800 text-white px-5 py-2 rounded-lg shadow hover:from-purple-600 hover:to-blue-600 '
            >
              Free 14-day trial
            </Link>
            <Link
              to='/login'
              className='border-2 border-blue-600 text-blue-800 px-5 py-2 rounded-lg hover:bg-blue-50 font-bold'
            >
              <span className='mr-1'>🔑</span> Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-500 hover:text-gray-600'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='#'
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600'
            >
              Product
            </Link>
            <Link
              to='#'
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600'
            >
              Solutions
            </Link>
            <Link
              to='#'
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600'
            >
              Resources
            </Link>
            <Link
              to='#'
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600'
            >
              Pricing
            </Link>
            <Link
              to='#'
              className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600'
            >
              Demo
            </Link>
          </div>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='#'
              className='block px-3 py-2 text-base font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md'
            >
              Free 14-day trial
            </Link>
            <Link
              to='#'
              className='block px-3 py-2 text-base font-medium border-2 border-blue-600 text-blue-600 rounded-md mt-2'
            >
              <span className='mr-1'>🔑</span> Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
