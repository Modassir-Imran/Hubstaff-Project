import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home  from './pages/Home'
import SignUp  from './pages/SignUp'
import Login  from './pages/Login'
import Dashboard from './pages/Dashboard'
import ScreenshotList from './components/ScreenshotList';
import ManualTrigger from './components/ManualTrigger';

import ScreenshotListpage from './pages/ScreenshotListpage'



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/manualTrigger' element={<ManualTrigger/>}/>
          <Route path='/screenList' element={<ScreenshotList/>}/>
          <Route path='/screenListpage' element={<ScreenshotListpage/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App
