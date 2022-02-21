
import Task from "./Task";

import "./TaskColumn.scss";

const TaskColumn = ({ name, tasks = [] }) => {
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