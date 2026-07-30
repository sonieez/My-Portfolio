
function SkillCard({skill}){

  return(
    <div className='skill-container'>
      <h4 className="skill-title">{skill.title}</h4>
      <div className="skill-names">
        {skill.names.map((s) => <p className="skill">{s}</p>)}
      </div>
    </div>
  )
}
export default SkillCard;