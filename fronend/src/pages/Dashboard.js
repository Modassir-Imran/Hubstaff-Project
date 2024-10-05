// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import logo from '../assets/logo.webp';
// import ScreenshotList from '../components/ScreenshotList';
// import TimeTracking from '../components/TimeTracking';
// import ProjectCreate from '../components/ProjectCreate';

// const Dashboard = () => {
//   const [projectName, setProjectName] = useState('');
//   const [clientId, setClientId] = useState('');
//   const [timer, setTimer] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);
//   const [projectId, setProjectId] = useState('');

//   const createProject = async () => {
//     try {
//       const res = await axios.post('http://localhost:4000/api/projects/create', { projectName });
//       console.log('Project created: ', res.data);
//       alert('Project created successfully!');
//     } catch (error) {
//       console.error('Error creating project:', error);
//     }
//   };

//   const assignProject = async () => {
//     try {
//       const res = await axios.post('http://localhost:4000/api/projects/assign-project', { clientId, projectName });
//       console.log('Project assigned: ', res.data);
//       setProjectId(res.data.projectId);
//       alert('Project assigned successfully!');
//       startTimer();
//     } catch (error) {
//       console.error('Error assigning project:', error);
//     }
//   };

//   const startTimer = () => {
//     if (!intervalId) {
//       const id = setInterval(() => {
//         setTimer(prev => prev + 1);
//       }, 1000);
//       setIntervalId(id);
//       setInterval(takeScreenshot, 600000);
//     }
//   };

//   const takeScreenshot = async () => {
//     try {
//       const res = await axios.post('http://localhost:4000/api/screenshots/capture', { projectId });
//       console.log('Screenshot captured: ', res.data);
//     } catch (error) {
//       console.error('Error capturing screenshot:', error);
//     }
//   };

//   const formatTime = seconds => {
//     const hrs = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const navItems = [
//     { to: '/dashboard', text: 'Dashboard', active: true },
//     { to: '/screenListpage', text: 'Screenshot List' },
//     { to: '/dashboard', text: 'Activity' },
//     { to: '/dashboard', text: 'Insights' },
//     { to: '/dashboard', text: 'Locations' },
//     { to: '/dashboard', text: 'Project Management' },
//     { to: '/dashboard', text: 'Calendar' },
//     { to: '/dashboard', text: 'Reports' },
//     { to: '/dashboard', text: 'People' },
//     { to: '/dashboard', text: 'Financials' },
//     { to: '/dashboard', text: 'Settings' }
//   ];

//   return (
//     <div className='flex min-h-screen bg-gray-200'>
//       <div className='w-64 bg-gray-200 shadow-md'>
//         <div className='p-6 flex gap-2'>
//           <img src={logo} alt='Logo' className='w-10 h-10' />
//           <h1 className='text-3xl font-bold text-blue-600'>Hubstaff</h1>
//         </div>
//         <nav className='px-4 space-y-4'>
//           {navItems.map((item, index) => (
//             <Link
//               key={index}
//               to={item.to}
//               className={`block py-2 px-4 rounded-lg font-medium text-lg ${
//                 item.active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
//               }`}
//             >
//               {item.text}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       <div className='flex-1'>
//         <div className='flex w-full py-2 text-gray-600 bg-white px-20 space-x-9'>
//           <div className='border px-8 py-1 rounded-full space-x-2'>
//             <span className='text-lg'><i className='fas fa-stopwatch'></i></span>
//             <span className='text-xl'>{formatTime(timer)}</span>
//           </div>
//           <div className='mt-1'>
//             <Link to='/' className='text-blue-800 items-center hover:text-blue-100 text-sm'>
//               <span>Pro trial expires in 11 days.</span>
//             </Link>
//           </div>
//         </div>

//         <div className='bg-blue-500 flex flex-col gap-2 p-4'>
//           <div className='flex justify-between items-center'>
//             <h2 className='text-white font-bold'>Get started with Hubstaff</h2>
//             <span className='text-white'>33%</span>
//           </div>
//           <div className='relative w-full h-2 bg-blue-200 rounded'>
//             <div className='absolute top-0 h-2 bg-blue-600 rounded' style={{ width: '33%' }}></div>
//           </div>
//           <div className='flex justify-between mt-4'>
//             {['Create a project', 'Track time', 'Adjust settings', 'Invite your team'].map((step, index) => (
//               <button key={index} className='flex bg-white text-black py-2 px-3 rounded-full font-medium gap-2 text-sm hover:text-blue-600'>
//                 <span className='w-6 h-6 rounded-full border text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'>
//                   {index + 1}
//                 </span>
//                 <span className='pt-[2px]'>{step}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className='py-6 px-10'>
//           {/* <div className='p-6 bg-white shadow-lg'>
//             <div className='flex gap-4'>
//               <input
//                 type='text'
//                 placeholder='Project Name'
//                 value={projectName}
//                 onChange={e => setProjectName(e.target.value)}
//                 className='border p-2 rounded'
//               />
//               <input
//                 type='text'
//                 placeholder='Client ID'
//                 value={clientId}
//                 onChange={e => setClientId(e.target.value)}
//                 className='border p-2 rounded'
//               />
//               <button
//                 className='bg-blue-500 text-white px-4 py-2 rounded-lg'
//                 onClick={createProject}
//               >
//                 Create Project
//               </button>
//               <button
//                 className='bg-blue-500 text-white px-4 py-2 rounded-lg'
//                 onClick={assignProject}
//               >
//                 Assign Project & Start Timer
//               </button>
//             </div>
//           </div> */}
//           <ProjectCreate/>

//           <div className='flex flex-col md:flex-row gap-20  justify-between px-4 md:px-10 pt-10'>
//             <div className='bg-white p-5 border rounded-xl shadow h-1/2'>
//               <TimeTracking clientId={clientId} projectId={projectId} timer={timer} />
//             </div>
//             <div className='bg-white p-5 border rounded-xl shadow'>
//               <ScreenshotList projectId={projectId} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;









// src/pages/Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.webp';
import ScreenshotList from '../components/ScreenshotList';
import TimeTracking from '../components/TimeTracking';
import ProjectCreate from '../components/ProjectCreate';

const Dashboard = () => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [projectId, setProjectId] = useState('');

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => setTimer(prev => prev + 1), 1000);
      setIntervalId(id);
      setInterval(takeScreenshot, 600000); // 10 min intervals for screenshot
    }
  };

  const takeScreenshot = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/screenshots/capture', { projectId });
      console.log('Screenshot captured:', res.data);
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

  const formatTime = seconds => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const navItems = [
    { to: '/dashboard', text: 'Dashboard' },
    { to: '/screenListpage', text: 'Screenshot List' },
    { to: '/dashboard', text: 'Activity' },
    { to: '/dashboard', text: 'Insights' },
    { to: '/dashboard', text: 'Locations' },
    { to: '/dashboard', text: 'Project Management' },
    { to: '/dashboard', text: 'Calendar' },
    { to: '/dashboard', text: 'Reports' },
    { to: '/dashboard', text: 'People' },
    { to: '/dashboard', text: 'Financials' },
    { to: '/dashboard', text: 'Settings' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-200">
      <div className="w-64 bg-gray-200 shadow-md">
        <div className="p-6 flex gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <Link to='/'>
          <h1 className="text-3xl font-bold text-blue-600">Hubstaff</h1>
          </Link>
        </div>
        <nav className="px-4 space-y-4">
          {navItems.map((item, index) => (
            <Link key={index} to={item.to} className="block py-2 px-4 rounded-lg font-medium text-lg text-gray-600 hover:text-blue-600">
              {item.text}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex-1">
        <div className="flex w-full py-2 text-gray-600 bg-white px-20 space-x-9">
          <div className="border px-8 py-1 rounded-full space-x-2">
            <span className="text-lg"><i className="fas fa-stopwatch"></i></span>
            <span className="text-xl">{formatTime(timer)}</span>
          </div>
          <div className="mt-1">
            <Link to="/" className="text-blue-800 items-center hover:text-blue-100 text-sm">
              Pro trial expires in 11 days.
            </Link>
          </div>
        </div>

        <div className="bg-blue-500 flex flex-col gap-2 p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-white font-bold">Get started with Hubstaff</h2>
            <span className="text-white">33%</span>
          </div>
          <div className="relative w-full h-2 bg-blue-200 rounded">
            <div className="absolute top-0 h-2 bg-blue-600 rounded" style={{ width: '33%' }}></div>
          </div>
        </div>

        <div className="py-6 px-10">
          <ProjectCreate />
          <div className="flex flex-col md:flex-row gap-20 justify-between px-4 md:px-10 pt-10">
            <div className="bg-white p-5 border rounded-xl shadow h-1/2">
              <TimeTracking projectId={projectId} timer={timer} />
            </div>
            <div className="bg-white p-5 border rounded-xl shadow">
              <ScreenshotList projectId={projectId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
