import { useState } from "react";
import ProjectDetails from "./ProjectDetails"
import { Link } from "react-router-dom";
import EditProjectForm from "../Forms/EditProjectForm";

const Project = ({ id, name, description, created }) => {
   /* EDIT PROJECT FORM */
   const [isEditProjectFormOpen, setIsEditProjectFormOpen] = useState(false);
   const handleOpenEditProjectFrom = () => setIsEditProjectFormOpen(true);
   const handleCloseEditProjectFrom = () => setIsEditProjectFormOpen(false);

   const editProjectFormComponent = isEditProjectFormOpen &&
      <EditProjectForm
         handleOnClose={handleCloseEditProjectFrom}
         id={id}
         entryName={name}
         entryDescription={description}
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
         <div className="d-flex">
            <div className="title py-1">{name} <Link to={`/project/${id}`} /></div>

            <img className="details" src="./images/details.png" onClick={handleOpenProjectDetails} alt="details" />
            <img className="edit" src="./images/settings.png" onClick={handleOpenEditProjectFrom} alt="settings" />

            {editProjectFormComponent}
            {projectDetailsComponent}
         </div>
      </div>
   )
}

export default Project;