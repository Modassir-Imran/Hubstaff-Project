// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import ScreenshotItem from './ScreenshotItem'

// const ScreenshotList = () => {
//   const [screenshots, setScreenshots] = useState([])

//   useEffect(() => {
//     // Fetch the list of screenshots from the backend
//     axios
//       .get('http://localhost:4000/api/screenshots')
//       .then(response => {
//         setScreenshots(response.data)
//       })
//       .catch(error => {
//         console.error('Error fetching screenshots:', error)
//       })
//   }, [])

//   return (
//     <div className='max-w-5xl p-4 rounded-2xl'>
//       <h2 className='text-3xl font-bold text-black text-center mb-6'>
//         Screenshots
//       </h2>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto max-h-[55vh]'>
//         {screenshots.map(screenshot => (
//           <ScreenshotItem key={screenshot._id} screenshot={screenshot} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ScreenshotList









import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScreenshotItem from './ScreenshotItem';

const ScreenshotList = () => {
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    // Fetch the list of screenshots from the backend
    const fetchScreenshots = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/screenshots');
        setScreenshots(response.data);
      } catch (error) {
        console.error('Error fetching screenshots:', error);
      }
    };

    fetchScreenshots();

    // Set up a polling mechanism to fetch screenshots every minute
    const intervalId = setInterval(fetchScreenshots, 60000); // 60 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='max-w-5xl p-4 rounded-2xl'>
      <h2 className='text-3xl font-bold text-black text-center mb-6'>
        Screenshots
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto max-h-[55vh]'>
        {screenshots.map(screenshot => (
          <ScreenshotItem key={screenshot._id} screenshot={screenshot} />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotList;
