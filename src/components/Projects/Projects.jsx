import { useContext, useState } from "react";

import { StoreContext } from "../../store/StoreProvider";

import Project from "./subcomponents/Project";

import "./Projects.scss";
import ProjectForm from "./subcomponents/ProjectForm";


const Projects = () => {
   const { user, projects, setProjects } = useContext(StoreContext)

   const projectsComponent = projects.map((project) => <Project key={project.id} {...project} />);

   const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);


   const handleOpenProjectFrom = () => setIsProjectFormOpen(true);
   const handleCloseProjectFrom = () => setIsProjectFormOpen(false);

   const projectFormComponent = isProjectFormOpen &&
      <ProjectForm
         handleOnClose={handleCloseProjectFrom}
         isModalOpen={isProjectFormOpen}
         action="/project/create"
      />;

   return (
      <main id="projects">
         <div id="page-title" className="border-bottom">Moje projekty</div>
         <button id="add" onClick={handleOpenProjectFrom}>Dodaj nowy</button>

         {projectsComponent}
         {projectFormComponent}
      </main>
   )
}

export default Projects;