import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ScreenshotItem from '../components/ScreenshotItem'

const ScreenshotList = () => {
  const [screenshots, setScreenshots] = useState([])

  useEffect(() => {
    // Fetch the list of screenshots from the backend
    axios
      .get('http://localhost:4000/api/screenshots')
      .then(response => {
        setScreenshots(response.data)
      })
      .catch(error => {
        console.error('Error fetching screenshots:', error)
      })
  }, [])

  return (
    <div className='w-full h-full bg-blue-400 min-h-screen flex items-center justify-center'>
      <div className='max-w-6xl  p-4 bg-blue-900 rounded-2xl'>
        <h2 className='text-3xl font-bold text-white text-center mb-6'>
          Screenshots
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto max-h-[65vh]'>
          {screenshots.map(screenshot => (
            <ScreenshotItem key={screenshot._id} screenshot={screenshot} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScreenshotList
