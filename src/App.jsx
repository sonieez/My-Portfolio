import ProjectCard from './ProjectCard.jsx'
import SkillCard from './SkillCard.jsx'
import './App.css'

function App() {
  
  return(
    <div className='app'>
      <div className='main-page'>
        <h3>Hi, I am</h3>
        <h1>Sona Zeynalova</h1>
        <h2>Junior Frontend Developer</h2>
        <p></p>
        <button className='projects-button'>Projects</button>
        <button className='contact-button'>Contact</button>
      </div>
      <div className='about-page'>
        <hr/>
        <h2>About Me</h2>
        <p></p>
      </div>
      <div className='skills-page'>
        <hr/>
        <h2>Skills</h2>
      </div>
      <div className='projects-page'>
        <hr/>
        <h2>Featured Projects</h2>
      </div>
      <div className='contact-page'>
        <hr/>
        <h2>Contact Me</h2>
        <p></p>

      </div>
    </div>
  )
}

export default App
