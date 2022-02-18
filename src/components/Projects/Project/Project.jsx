import { useState } from "react";
import ProjectForm from "./ProjectForm";
import ProjectDetails from "./ProjectDetails"
import { Link } from "react-router-dom";

const Project = ({ id, name, description, created }) => {
   /* EDIT PROJECT FORM */
   const [isEditProjectFormOpen, setIsEditProjectFormOpen] = useState(false);
   const handleOpenEditProjectFrom = () => setIsEditProjectFormOpen(true);
   const handleCloseEditProjectFrom = () => setIsEditProjectFormOpen(false);

   const editProjectFormComponent = isEditProjectFormOpen &&
      <ProjectForm
         handleOnClose={handleCloseEditProjectFrom}
         id={id}
         entryName={name}
         entryDescription={description}
         action="update"
      />;

   /* PROJECT DETAILS */
   const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);
   const handleOpenProjectDetails = () => setIsProjectDetailsOpen(true);
   const handleCloseProjectDetails = () => setIsProjectDetailsOpen(false);

   const projectDetailsComponent = isProjectDetailsOpen &&
      <ProjectDetails
         name={name}
         description={description}
         created={created}
         handleOnClose={handleCloseProjectDetails}
      />;

   return (
      <div className="project col-12 col-lg-6">
         <div className="d-flex flex-wrap">
            <div className="title py-1">{name} <Link to={`/project/${id}`} /></div>

            <button className="details" onClick={handleOpenProjectDetails}> Szczegóły</button>
            <button className="edit" onClick={handleOpenEditProjectFrom}> Edytuj</button>

            {editProjectFormComponent}
            {projectDetailsComponent}
         </div>
      </div>
   )
}

export default Project;