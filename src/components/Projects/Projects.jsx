import { useContext, useEffect, useState } from "react";

import { StoreContext } from "../../store/StoreProvider";
import CreateProjectForm from "./Forms/CreateProjectForm";

import Project from "./Project/Project";

import "./Projects.scss";

const Projects = () => {
   const { projects, setProjects, data, setData, user, request } = useContext(StoreContext);

   useEffect(() => {
      if (data.areProjectsLoaded === false) {
         request.post('/project/getAll', { user_id: user.id, sideKey: user.sideKey }, onLoadProjects,
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
      <CreateProjectForm handleOnClose={handleCloseCreateProjectFrom} />;

   return (
      <main id="projects">
         <div id="page-title" className="border-bottom">
            Moje projekty
            <img id="add_project" src="./images/add.png" alt="add" onClick={handleOpenCreateProjectFrom} />
         </div>

         <div className="d-flex flex-wrap pt-2">{projectsComponent} </div>

         {projectFormComponent}
      </main>
   )
}

export default Projects;