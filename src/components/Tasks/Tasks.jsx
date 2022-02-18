import { useState } from "react";
import { useParams } from "react-router-dom";

import TaskColumn from "./TaskColumn";

import "./Tasks.scss";

const Tasks = () => {
   const { id } = useParams();

   const [tasks, setTasks] = useState([
      {
         id: 1,
         user_id: 1,
         name: "Nowe zadanie 1",
         description: "Opis nowego zadania",
         status: 0
      },
      {
         id: 1,
         user_id: 1,
         name: "Nowe zadanie 2",
         description: "W trakcie zadania",
         status: 1
      },
      {
         id: 1,
         user_id: 1,
         name: "Nowe zadanie 3",
         description: "Zadanie zakończone",
         status: 2
      }
   ])

   const newTasks = tasks.filter(task => task.status === 0)
   const inProgressTasks = tasks.filter(task => task.status === 1)
   const finishedTasks = tasks.filter(task => task.status === 2)

   /*
      ! Instrukcja z użyciem API !
      * Pobierz projekt o podanym ID [ request.post("/project/get"), {id : project_id, user_id, sideKey} ]
         * Zwróc data.project | data.tasks
   */

   return (
      <main id="tasks" className="mt-0 p-0">
         <div id="upper-section" className="position-relative">
            <div className="title">Nazwa projektu</div>
            <button id="add_task" className="btn btn-success p-1 me-1">Dodaj zadanie</button>
         </div>

         <div className="d-flex flex-wrap">
            <TaskColumn name="Nowe zadania" tasks={newTasks} />
            <TaskColumn name="Zadania w trakcie" tasks={inProgressTasks} />
            <TaskColumn name="Zadania zakończone" tasks={finishedTasks} />
         </div>
      </main>
   )
}

export default Tasks;