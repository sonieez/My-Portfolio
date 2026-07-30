import ProjectCard from './ProjectCard.jsx'
import SkillCard from './SkillCard.jsx'
import { skills } from './data/Skills.js'
import { projects } from './data/Projects.js'
import './App.css'

function App() {
  
  return(
    <div className='app'>
      <div className='main-page'>
        <h3 className='greeting'>Hi, I am</h3>
        <h1 className='my-name'>Sona Zeynalova</h1>
        <h2 className='my-prof'>Junior Frontend Developer</h2>
        <p className='my-description'>Continuously learning modern web technologies and improving my frontend development skills.</p>
        <a href='#projects'>
          <button className='projects-button'>Projects</button>
        </a>
        <a href='#contact'>
          <button className='contact-button'>Contact</button>
        </a>
      </div>

      <div className='about-page'>
        <h2 className='page-title'>About Me</h2>
        <p className='about-me'>Hi! I'm Sona, a junior frontend developer passionate about creating responsive and user-friendly web applications. I enjoy building real-world projects using HTML, CSS, JavaScript, and React to strengthen my skills. I'm always learning new technologies and continuously improving as a developer, with the goal of becoming a full-stack developer in the future.</p>
      </div>

      <div className='skills-page'>
        <h2 className='page-title'>Skills</h2>
        {skills.map((skill) => <SkillCard skill={skill}/>)}
      </div>

      <div id='projects' className='projects-page'>
        <h2 className='page-title'>Featured Projects</h2>
        {projects.map((project) => <ProjectCard project={project}/>)}
      </div>

      <div id='contact' className='contact-page'>
        <h2 className='page-title'>Contact Me</h2>
        <p className='contact-message'>Have a project in mind or just want to say hello? Feel free to reach out! I'd be happy to connect and discuss new opportunities.</p>
        <div className='contacts'>
          <div className='github-contact'>
            <img className='app-icon' src=''/>
            <h4 className='app-name'>Github</h4>
            <a href='https://github.com/sonieez'>sonieez</a>
          </div>
          <div className='linkedin-contact'>
            <img className='app-icon' src=''/>
            <h4 className='app-name'>Linkedin</h4>
            <a href='https://www.linkedin.com/in/sona-zeynalova-4bb872385/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Be4KOVg%2BFQSy1julTeZC%2B1g%3D%3D'>Sona Zeynalova</a>
          </div>
          <div className='email-contact'>
            <img className='app-icon' src=''/>
            <h4 className='app-name'>Email</h4>
            <a href='mailto:sonie.zeynalova@gmail.com'>sonie.zeynalova@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
