
import Task from "./Task";

import "./TaskColumn.scss";

const TaskColumn = ({ name, tasks = [], className }) => {

   // Testy //
   // const number = Math.floor(Math.random() * 30);
   // for (var i = 0; i < number; i++) {
   //    tasks.push({
   //       id: (i + 1), status: 0,
   //       name: "nazwa zadania",
   //       description: "opis zadania",
   //       created: "data zadania"
   //    })
   // }

   const areTasks = tasks.length ? true : false;
   const TasksList = tasks.map(task => <Task key={task.id + Math.random()} {...task} />)

   return (
      <div className={"task_column" + " " + className}>
         <div className="title">{name}</div>

         {areTasks && <div className="tasks"> {TasksList} </div>}
      </div>
   )
}

export default TaskColumn;