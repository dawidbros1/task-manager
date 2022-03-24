
import Task from "./Task";

import "./TaskColumn.scss";

const TaskColumn = ({ name, tasks = [] }) => {

   // Testy //
   // const number = Math.floor(Math.random() * 10);
   // for (var i = 0; i < number; i++) {
   //    tasks.push({ id: 1, status: 0, name: "abc", description: "haaha", created: "dzisiaj" })
   // }

   const areTasks = tasks.length ? true : false;
   const TasksList = tasks.map(task => <Task key={task.id} {...task} />)

   return (
      <div className="task_column">
         <div className="title">{name}</div>

         {areTasks && <div className="tasks"> {TasksList} </div>}
      </div>
   )
}

export default TaskColumn;