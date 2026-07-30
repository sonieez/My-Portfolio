
function SkillCard({skill}){

  return(
    <div className='skill-container'>
      <h4 className="skill-title">{skill.title}</h4>
      {skill.names.map((s) => <p className="skill">{s}</p>)}
    </div>
  )
}
export default SkillCard;