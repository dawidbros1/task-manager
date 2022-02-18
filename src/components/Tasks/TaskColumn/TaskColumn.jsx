
import Task from "../Task";

import "./TaskColumn.scss";

const TaskColumn = ({ name, tasks = [] }) => {

   const areTasks = tasks.length ? true : false;

   const TasksList = tasks.map(task => <Task key={task.id} {...task} />)

   return (
      <div className="col-12 col-md-4 task_column">
         <div className="title">{name}</div>

         {areTasks && <div className="tasks"> {TasksList} </div>}
      </div>
   )
}

export default TaskColumn;