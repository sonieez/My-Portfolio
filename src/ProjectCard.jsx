
function ProjectCard({project}){
  return(
    <div className="project-container">
      <img src={project.image} className="project-image" />
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.about}</p>
      <div className="project-tools">
        {project.tools.map((t) => <p className="project-tool">{t}</p>)}
      </div>
      <div className="project-buttons">
        <a href={project.live} target="_blank">
          <button className="live-button">Live</button>
        </a>
        <a href={project.code} target="_blank">
          <button className="code-button">Code</button>
        </a>
      </div>
      
    </div>
  )
}
export default ProjectCard