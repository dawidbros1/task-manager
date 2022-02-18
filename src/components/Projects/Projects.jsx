import { useContext, useEffect, useState } from "react";

import { StoreContext } from "../../store/StoreProvider";

import Project from "./Project/Project";

import "./Projects.scss";
import ProjectForm from "./Project/ProjectForm";


const Projects = () => {
   const { projects, setProjects, data, setData, user, request } = useContext(StoreContext);

   useEffect(() => {
      setProjects([{
         id: 1,
         user_id: 1,
         name: "Nazwa projektu 22222222222222",
         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quo vero non nostrum iure iste alias officia incidunt, excepturi facere, molestias qui molestiae veritatis quam illum tempore velit nihil mollitia.",
         created: "2022-02-14 08:52:35"
      },
      {
         id: 2,
         user_id: 1,
         name: "Nazwa projektu",
         description: "Opis mojego projektu",
         created: "2022-02-14 08:52:35"
      },
      {
         id: 3,
         user_id: 1,
         name: "Nazwa projektu",
         description: "Opis mojego projektu",
         created: "2022-02-14 08:52:35"
      },
      {
         id: 4,
         user_id: 1,
         name: "Nazwa projektu",
         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quo vero non nostrum iure iste alias officia incidunt, excepturi facere, molestias qui molestiae veritatis quam illum tempore velit nihil mollitia.",
         created: "2022-02-14 08:52:35"
      },
      {
         id: 5,
         user_id: 1,
         name: "Nazwa projektu",
         description: "Opis mojego projektu",
         created: "2022-02-14 08:52:35"
      },
      {
         id: 6,
         user_id: 1,
         name: "Nazwa projektu",
         description: "Opis mojego projektu",
         created: "2022-02-14 08:52:35"
      },
      {
         id: 7,
         user_id: 1,
         name: "Nazwa projektu",
         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quo vero non nostrum iure iste alias officia incidunt, excepturi facere, molestias qui molestiae veritatis quam illum tempore velit nihil mollitia.",
         created: "2022-02-14 08:52:35"
      },
      {
         id: 8,
         user_id: 1,
         name: "Nazwa projektu",
         description: "Opis mojego projektu",
         created: "2022-02-14 08:52:35"
      }]);
   }, [])

   // useEffect(() => {
   //    if (data.areProjectsLoaded === false) {
   //       request.post('/project/get', { user_id: user.id, sideKey: user.sideKey }, onLoadProjects,
   //          ({ description }) => { console.log(description) });
   //    }
   // }, [])

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

         <div className="d-flex flex-wrap">
            {projectsComponent}
         </div>

         {projectFormComponent}
      </main>
   )
}

export default Projects;