import { useContext, useState } from "react";

import { StoreContext } from "../../store/StoreProvider";

import Project from "./subcomponents/Project";

import "./Projects.scss";
import ProjectForm from "./subcomponents/ProjectForm";


const Projects = () => {
   const { projects } = useContext(StoreContext);

   const projectsComponent = Object.keys(projects).length !== 0
      ? projects.map((project) => <Project key={project.id} {...project} />)
      : null;

   const [isCreateProjectFormOpen, setIsCreateProjectFormOpen] = useState(false);

   const handleOpenCreateProjectFrom = () => setIsCreateProjectFormOpen(true);
   const handleCloseCreateProjectFrom = () => setIsCreateProjectFormOpen(false);

   const projectFormComponent = isCreateProjectFormOpen &&
      <ProjectForm
         handleOnClose={handleCloseCreateProjectFrom}
         action="create"
      />;

   return (
      <main id="projects">
         <div id="page-title" className="border-bottom">Moje projekty</div>
         <button id="add" onClick={handleOpenCreateProjectFrom}>Dodaj nowy</button>

         {projectsComponent}
         {projectFormComponent}
      </main>
   )
}

export default Projects;