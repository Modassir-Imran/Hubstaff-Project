import React from 'react'
import closeIcon from '../assets/close.png'
const Modal = ({ isOpen, onClose, children, timestamp }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'>
      <div className='bg-blue-400 rounded-xl overflow-hidden shadow-lg max-w-7xl mx-auto relative'>
        <button
          onClick={onClose}
          className='bg-blue-400 rounded-b-none rounded-l-none absolute right-0 text-gray-600 rounded-xl text-3xl font-bold p-4 hover:bg-red-500'
        >
          <img src={closeIcon} alt='' width={18} height={18} className='' />
        </button>
        <div className='py-4 mt-8'>
          {children}
          {timestamp && (
            <p className='mt-2 text-lg text-gray-700 text-center'>
              Taken at: {new Date(timestamp).toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
