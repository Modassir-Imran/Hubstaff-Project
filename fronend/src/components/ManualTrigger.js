import React from 'react'
import axios from 'axios'

const ManualTrigger = () => {
  const handleManualTrigger = async () => {
    try {
      await axios.post('http://localhost:4000/api/screenshots/take-screenshot')
      alert('Screenshot manually triggered and saved successfully!')
    } catch (error) {
      console.error('Error triggering screenshot:', error)
    }
  }

  return (
    <div className='max-w-xl mx-auto py-8'>
      <button
        onClick={handleManualTrigger}
        className='w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600'
      >
        Take Manual Screenshot
      </button>
    </div>
  )
}

export default ManualTrigger
