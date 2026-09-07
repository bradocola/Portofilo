import './index.css'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'

function App() {
  const [picSelected, setPicSelected] = useState(false);
  return (
    <>
      <Navbar picSelected={picSelected} setPicSelected={setPicSelected} />

      
      {picSelected ? (
        <Profile picSelected={picSelected} setPicSelected={setPicSelected} />
      ) : (
        <>
          <Hero />
          <Projects />
        </>
      )}

      <Footer />
    </>
  )
}

export default App
