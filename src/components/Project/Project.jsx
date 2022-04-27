import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TaskColumn from "./TaskColumn";
import CreateTaskForm from "./Forms/CreateTaskForm";

import "./Project.scss";
import { StoreContext } from "../../store/StoreProvider";

const Project = () => {
   const { id } = useParams();
   const { taskStatuses, user, request, tasks, setTasks } = useContext(StoreContext);

   const [project, setProject] = useState({});

   /* LOAD CURRENT PROJECT SECTION */
   useEffect(() => {
      const data = { id: id, user_id: user.id, sideKey: user.sideKey }
      request.post("/project/get", data, onSuccess, onFailure)
      return () => setTasks([]);
   }, [])

   const onSuccess = ({ data }) => {
      setProject(data.project); // OBJECT
      setTasks(data.tasks) // ARRAY OF OBJECT
   }

   const onFailure = (response) => {
      // jakieś przekierowani do stony głownej z informaję o błędzie
   }

   /* CREATE TASK FORM SECTION */
   const [isCreateTaskFormOpen, setIsCreateTaskFormOpen] = useState(false);
   const handleOpenCreateTaskFrom = () => setIsCreateTaskFormOpen(true);
   const handleCloseCreateTaskFrom = () => setIsCreateTaskFormOpen(false);

   const createTaskFormComponent = isCreateTaskFormOpen &&
      <CreateTaskForm
         projectId={project.id}
         handleOnClose={handleCloseCreateTaskFrom}
      />;


   const taskColumns = taskStatuses.map(taskStatus => {
      return (
         <TaskColumn key={taskStatus.status}
            name={taskStatus.name}
            className={taskStatus.className}
            tasks={tasks.filter(task => (task.status - 0) === taskStatus.status)}
         />
      )
   })

   return (
      <main id="project">
         <div id="background" />

         <div id="upper-section" className="position-relative">
            <div className="title">{project.name}
               <img id="add_project" src="./../images/add.png" alt="add" onClick={handleOpenCreateTaskFrom} />
            </div>
         </div>

         <div className="d-flex flex-wrap p-2"> {taskColumns}</div>

         {createTaskFormComponent}
      </main>
   )
}

export default Project;