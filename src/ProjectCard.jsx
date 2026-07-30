
function ProjectCard({project}){
  return(
    <div className="project-container">
      <img src={project.image} className="project-image" />
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.about}</p>
      {project.tools.map((t) => <p className="project-tool">{t}</p>)}
      <a href={project.live}>
        <button className="live-button">Live</button>
      </a>
      <a href={project.code}>
        <button className="code-button">Code</button>
      </a>
    </div>
  )
}
export default ProjectCard