import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectsSem1 from './components/ProjectsSem1'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { useTheme } from './hooks/useTheme'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  useScrollReveal()

  return (
    <div data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProjectsSem1 />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}
