import { useContext, useEffect, useState } from "react";

import { StoreContext } from "../../store/StoreProvider";

import Project from "./subcomponents/Project";

import "./Projects.scss";
import ProjectForm from "./subcomponents/ProjectForm";


const Projects = () => {
   const { projects, setProjects, data, setData, user, request } = useContext(StoreContext);

   useEffect(() => {
      if (data.areProjectsLoaded === false) {
         request.post('/project/get', { user_id: user.id, sideKey: user.sideKey }, onLoadProjects,
            ({ description }) => { console.log(description) });
      }
   }, [])

   const onLoadProjects = ({ data }) => {
      setProjects(data.projects)
      setData({ ...data, areProjectsLoaded: true })
   }

   const projectsComponent = projects.length !== 0
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