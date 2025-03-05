import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import MusicVisualizer from './components/MusicVisualizer'
import TokenInfo from './components/TokenInfo'
import Roadmap from './components/Roadmap'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <MusicVisualizer />
        <TokenInfo />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
