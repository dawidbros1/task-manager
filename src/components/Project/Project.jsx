import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TaskColumn from "./TaskColumn";
import CreateTaskForm from "./Forms/CreateTaskForm";

import "./Project.scss";
import { StoreContext } from "../../store/StoreProvider";

const Project = () => {
   const { tasks, setTasks, taskStatuses } = useContext(StoreContext);

   const { id } = useParams();

   useEffect(() => {
      setTasks([
         {
            id: 1,
            user_id: 1,
            name: "Nowe zadanie numer 1",
            description: "Opis nowego zadania",
            status: 0
         },
         // {
         //    id: 2,
         //    user_id: 1,
         //    name: "Zadanie numer dwa",
         //    description: "W trakcie zadania",
         //    status: 0
         // },
      ])
   }, [])


   const [isCreateTaskFormOpen, setIsCreateTaskFormOpen] = useState(false);
   const handleOpenCreateTaskFrom = () => setIsCreateTaskFormOpen(true);
   const handleCloseCreateTaskFrom = () => setIsCreateTaskFormOpen(false);

   const createTaskFormComponent = isCreateTaskFormOpen &&
      <CreateTaskForm
         handleOnClose={handleCloseCreateTaskFrom}
         action="create"
      />;

   /*
      ! Instrukcja z użyciem API !
      * Pobierz projekt o podanym ID [ request.post("/project/get"), {id : project_id, user_id, sideKey} ]
         * Zwróc data.project | data.tasks
   */

   const taskColumns = taskStatuses.map(taskStatus => {
      return (
         <TaskColumn key={taskStatus.status}
            name={taskStatus.name}
            tasks={tasks.filter(task => task.status === taskStatus.status)}
         />
      )
   })


   return (
      <main id="project" className="mt-0 p-0">
         <div id="background" />

         <div id="upper-section" className="position-relative">
            <div className="title">Nazwa projektu</div>
            <button id="add_task" className="btn btn-success p-1 me-1" onClick={handleOpenCreateTaskFrom}>Dodaj zadanie</button>
         </div>

         <div className="d-flex p-2"> {taskColumns}</div>

         {createTaskFormComponent}
      </main>
   )
}

export default Project;