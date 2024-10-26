
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
