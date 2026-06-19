import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Skills />
      <Contact />
    </>
  )
}

export default App
