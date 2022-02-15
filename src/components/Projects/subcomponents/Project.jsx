import { useState } from "react";
import ProjectForm from "./ProjectForm";

const Project = ({ id, name, description }) => {

   const [isEditProjectFormOpen, setIsEditProjectFormOpen] = useState(false);

   const handleOpenEditProjectFrom = () => setIsEditProjectFormOpen(true);
   const handleCloseEditProjectFrom = () => {
      setIsEditProjectFormOpen(false);
   }

   const editProjectFormComponent = isEditProjectFormOpen &&
      <ProjectForm
         handleOnClose={handleCloseEditProjectFrom}
         id={id}
         entryName={name}
         entryDescription={description}
         action="edit"
      />;

   return (
      <div className="project">
         <div className="fw-bold">{name}</div>
         <p className="description">{description}</p>
         <button className="edit" onClick={handleOpenEditProjectFrom}>edytuj</button>

         {editProjectFormComponent}
      </div>
   )
}

export default Project;