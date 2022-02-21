import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TaskColumn from "./TaskColumn";
import TaskForm from "./TaskForm";

import "./Project.scss";
import { StoreContext } from "../../store/StoreProvider";

const Project = () => {
   const { tasks, setTasks } = useContext(StoreContext);

   const { id } = useParams();

   useEffect(() => {
      setTasks([
         {
            id: 1,
            user_id: 1,
            name: "Nowe zadanie 1",
            description: "Opis nowego zadania",
            status: 0
         },
         {
            id: 2,
            user_id: 1,
            name: "Nowe zadanie  zadanie zadaniezadaniezadaniezadaniezadaniezadaniev  zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadanie zadanie 2",
            description: "W trakcie zadania",
            status: 0
         },
         {
            id: 3,
            user_id: 1,
            name: "Nowe zadanie  zadanie zadaniezadaniezadaniezadaniezadaniezadaniev  zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadanie zadanie 2",
            description: "Zadanie zakończone",
            status: 0
         },
         {
            id: 4,
            user_id: 1,
            name: "Nowe zadanie  zadanie zadaniezadaniezadaniezadaniezadaniezadaniev  zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadanie zadanie 23",
            description: "Opis nowego zadania",
            status: 0
         },
         {
            id: 5,
            user_id: 1,
            name: "Nowe zadanie  zadanie zadaniezadaniezadaniezadaniezadaniezadaniev  zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadaniezadaniezadaniezadaniezadaniezadaniev zadanie zadanie 25",
            description: "W trakcie zadania",
            status: 0
         },
         {
            id: 6,
            user_id: 1,
            name: "Nowe zadanie 3 25  Nowe zadanie 3 25  Nowe zadanie 3 25  Nowe zadanie 3 25  Nowe zadanie 3 25  Nowe zadanie 3 25  Nowe zadanie 3 25 KONIEC",
            description: "Zadanie zakończone",
            status: 0
         }
      ])
   }, [])


   const [isCreateTaskFormOpen, setIsCreateTaskFormOpen] = useState(false);
   const handleOpenCreateTaskFrom = () => setIsCreateTaskFormOpen(true);
   const handleCloseCreateTaskFrom = () => setIsCreateTaskFormOpen(false);

   const taskFormComponent = isCreateTaskFormOpen &&
      <TaskForm
         handleOnClose={handleCloseCreateTaskFrom}
         action="create"
      />;

   const newTasks = tasks.filter(task => task.status === 0)
   const inProgressTasks = tasks.filter(task => task.status === 1)
   const finishedTasks = tasks.filter(task => task.status === 2)

   /*
      ! Instrukcja z użyciem API !
      * Pobierz projekt o podanym ID [ request.post("/project/get"), {id : project_id, user_id, sideKey} ]
         * Zwróc data.project | data.tasks
   */

   return (
      <main id="project" className="mt-0 p-0">

         <div id="background" />

         <div id="upper-section" className="position-relative">
            <div className="title">Nazwa projektu</div>
            <button id="add_task" className="btn btn-success p-1 me-1" onClick={handleOpenCreateTaskFrom}>Dodaj zadanie</button>
         </div>

         <div className="d-flex p-2">
            <TaskColumn name="Nowe zadania" tasks={newTasks} />
            <TaskColumn name="Zadania w trakcie" tasks={inProgressTasks} />
            <TaskColumn name="W trakcie testowania" tasks={[]} />
            <TaskColumn name="Zadania zakończone" tasks={finishedTasks} />
         </div>

         {taskFormComponent}
      </main>
   )
}

export default Project;