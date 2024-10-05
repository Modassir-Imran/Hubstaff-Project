import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BodySec2 from '../components/BodySec2'
// import BodySec2 from '../components/BodySec2';
import BodySec1 from '../components/BodySec1'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BodySec1 />
      <BodySec2 />
      <Footer />
    </>
  )
}

export default Home
