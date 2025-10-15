import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import ProjectDetails from './pages/projectDetails'
import Navbar from './components/navbar'
import Footer from './components/footer'


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
      <Footer />
    </div>
  )
}


export default App