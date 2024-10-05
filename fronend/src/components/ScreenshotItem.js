import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from './Modal' // Import the modal component

const ScreenshotItem = ({ screenshot }) => {
  const [image, setImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/screenshots/${screenshot._id}`,
          {
            responseType: 'blob'
          }
        )
        setImage(URL.createObjectURL(response.data))
      } catch (error) {
        console.error('Error fetching screenshot image:', error)
      }
    }
    fetchImage()
  }, [screenshot._id])

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen) // Toggle modal open/close
  }

  const handleCloseModal = () => {
    setIsModalOpen(false) // Close modal
  }

  return (
    <div className='bg-gray-300 rounded-lg shadow-md p-'>
      {image ? (
        <>
          <img
            src={image}
            alt='Screenshot'
            className='rounded-t-lg  w-full h-auto cursor-pointer'
            onClick={handleImageClick} // Open modal on click
          />
          <p className='mt-2 px-4 text-black font-medium'>
            Taken at: {new Date(screenshot.timestamp).toLocaleString()}
          </p>
        </>
      ) : (
        <p className='text-center text-gray-500'>Loading...</p>
      )}

      {/* Modal to show screenshot */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        timestamp={screenshot.timestamp}
      >
        {image && (
          <div className='flex justify-center items-center relative'>
            <img
              src={image}
              alt='Screenshot'
              className='rounded-md max-w-full h-auto'
              style={{ width: '90%', height: 'auto' }} // Set larger width
            />
          </div>
        )}
      </Modal>
    </div>
  )
}

export default ScreenshotItem
