const Project = ({ id, name, description }) => {
   return (
      <div className="project">
         <div className="fw-bold">{name}</div>
         <p className="description">{description}</p>
         <button className="edit">edytuj</button>
      </div>
   )
}

export default Project;