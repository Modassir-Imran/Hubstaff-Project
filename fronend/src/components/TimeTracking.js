// import React, { useState, useEffect, useCallback } from 'react'
// import axios from 'axios'

// const TimeTracking = ({ clientId, projectId }) => {
//   const [isActive, setIsActive] = useState(false)
//   const [isPaused, setIsPaused] = useState(false)
//   const [time, setTime] = useState(0)
//   const [isScreenshotActive, setIsScreenshotActive] = useState(false)

//   const takeScreenshot = useCallback(async () => {
//     try {
//       const res = await axios.post(
//         'http://localhost:4000/api/screenshots/capture',
//         { projectId }
//       )
//       console.log('Screenshot captured: ', res.data)
//     } catch (error) {
//       console.error('Error capturing screenshot: ', error)
//     }
//   }, [projectId])

//   useEffect(() => {
//     let interval = null
//     if (isActive && !isPaused) {
//       interval = setInterval(() => setTime(prevTime => prevTime + 1), 1000)
//     } else {
//       clearInterval(interval)
//     }
//     return () => clearInterval(interval)
//   }, [isActive, isPaused])

//   useEffect(() => {
//     let screenshotInterval = null
//     if (isScreenshotActive && isActive && !isPaused) {
//       screenshotInterval = setInterval(takeScreenshot, 600000)
//     }
//     return () => clearInterval(screenshotInterval)
//   }, [isScreenshotActive, isActive, isPaused, takeScreenshot])

//   const formatTime = () => {
//     const getSeconds = `0${time % 60}`.slice(-2)
//     const minutes = Math.floor(time / 60)
//     const getMinutes = `0${minutes % 60}`.slice(-2)
//     const getHours = `0${Math.floor(time / 3600)}`.slice(-2)
//     return `${getHours}:${getMinutes}:${getSeconds}`
//   }

//   const handleStart = () => {
//     setIsActive(true)
//     setIsPaused(false)
//   }

//   const handlePause = () => setIsPaused(!isPaused)

//   const handleStop = async () => {
//     setIsActive(false)
//     setIsPaused(false)
//     setIsScreenshotActive(false)
//     await saveTimeToDB()
//   }

//   const saveTimeToDB = async () => {
//     const hours = Math.floor(time / 3600)
//     const minutes = Math.floor((time % 3600) / 60)
//     try {
//       await axios.post('http://localhost:4000/api/save-time', {
//         clientId,
//         projectId,
//         hours,
//         minutes
//       })
//       alert('Time saved successfully!')
//     } catch (error) {
//       console.error('Error saving time:', error)
//     }
//   }

//   return (
//     <div className='w-[250px] h-[300px] flex flex-col justify-center items-center p-8 bg-blue-900 text-white rounded-lg shadow-lg'>
//       <h2 className='text-2xl font-bold mb-4'>Time Tracking</h2>
//       <div className='text-4xl font-mono mb-6'>{formatTime()}</div>
//       <div className='flex space-x-4 mb-4'>
//         {!isActive ? (
//           <button
//             className='px-4 py-2 bg-green-500 hover:bg-green-600 rounded'
//             onClick={handleStart}
//           >
//             Start
//           </button>
//         ) : (
//           <>
//             <button
//               className={`px-4 py-2 ${
//                 isPaused
//                   ? 'bg-yellow-500 hover:bg-yellow-600'
//                   : 'bg-red-500 hover:bg-red-600'
//               } rounded`}
//               onClick={handlePause}
//             >
//               {isPaused ? 'Resume' : 'Pause'}
//             </button>
//             <button
//               className='px-4 py-2 bg-red-600 hover:bg-red-700 rounded'
//               onClick={handleStop}
//             >
//               Stop
//             </button>
//           </>
//         )}
//       </div>
//       <div>
//         <button
//           className={`px-4 py-2 rounded ${
//             isScreenshotActive
//               ? 'bg-red-500 hover:bg-red-600'
//               : 'bg-blue-500 hover:bg-blue-600'
//           }`}
//           onClick={() => setIsScreenshotActive(!isScreenshotActive)}
//           disabled={!isActive || isPaused}
//         >
//           {isScreenshotActive ? 'Stop Screenshots' : 'Start Screenshots'}
//         </button>
//       </div>
//     </div>
//   )
// }

// export default TimeTracking








import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const TimeTracking = ({ clientId, projectId }) => {
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [time, setTime] = useState(0)
  const [isScreenshotActive, setIsScreenshotActive] = useState(false)

  // Function to take a screenshot
  const takeScreenshot = useCallback(async () => {
    try {
      const res = await axios.post(
        'http://localhost:4000/api/screenshots/capture',
        { projectId }
      )
      console.log('Screenshot captured: ', res.data)
    } catch (error) {
      console.error('Error capturing screenshot: ', error)
    }
  }, [projectId])

  // Timer for time tracking
  useEffect(() => {
    let interval = null
    if (isActive && !isPaused) {
      interval = setInterval(() => setTime(prevTime => prevTime + 1), 1000)
    } else if (!isActive) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, isPaused])

  // Timer for screenshots every 10 seconds
  useEffect(() => {
    let screenshotInterval = null
    if (isScreenshotActive && isActive && !isPaused) {
      screenshotInterval = setInterval(takeScreenshot, 10000) // Trigger every 10 seconds
    }
    return () => clearInterval(screenshotInterval)
  }, [isScreenshotActive, isActive, isPaused, takeScreenshot])

  // Format time for display
  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2)
    const minutes = Math.floor(time / 60)
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2)
    return `${getHours}:${getMinutes}:${getSeconds}`
  }

  // Handle start button
  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
    setTime(0) // Reset time to 0 when started
  }

  // Handle pause button
  const handlePause = () => setIsPaused(!isPaused)

  // Handle stop button
  const handleStop = async () => {
    setIsActive(false)
    setIsPaused(false)
    setIsScreenshotActive(false)
    await saveTimeToDB()
  }

  // Save time to DB
  const saveTimeToDB = async () => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    try {
      await axios.post('http://localhost:4000/api/save-time', {
        clientId,
        projectId,
        hours,
        minutes
      })
      alert('Time saved successfully!')
    } catch (error) {
      console.error('Error saving time:', error)
    }
  }

  return (
    <div className="flex flex-col w-[200px]">
      <div className="p-4 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Time Tracking</h1>

        <div className="text-4xl font-mono mb-4">{formatTime()}</div>

        <div className="flex space-x-4">
          {!isActive ? (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleStart}
            >
              Start
            </button>
          ) : (
            <>
              <button
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                onClick={handlePause}
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleStop}
              >
                Stop
              </button>
            </>
          )}
        </div>

        <div className="mt-4">
          <button
            className={`px-4 py-2 rounded ${
              isScreenshotActive ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
            onClick={() => setIsScreenshotActive(!isScreenshotActive)}
            disabled={!isActive || isPaused}
          >
            {isScreenshotActive ? "Screen Recoding" : 'Track Screenshot'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimeTracking
