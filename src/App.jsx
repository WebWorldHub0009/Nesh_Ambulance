import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Marquee24x7 from './components/Marquee'
import Footer from "./components/Footer"

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Marquee24x7/>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App