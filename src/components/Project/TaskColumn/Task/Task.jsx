
import { useState } from "react";

import EditTaskForm from "../../Forms/EditTaskForm";

import "./Task.scss";

const Task = ({ id, name, description }) => {
   const [isEditTaskFormOpen, setIsEditTaskFormOpen] = useState(false);
   const handleOpenEditTaskFrom = () => setIsEditTaskFormOpen(true);
   const handleCloseEditTaskFrom = () => setIsEditTaskFormOpen(false);

   const taskFormComponent = isEditTaskFormOpen &&
      <EditTaskForm
         id={id} entryName={name} entryDescription={description}
         handleOnClose={handleCloseEditTaskFrom}
      />;

   return (
      <div className="task">
         <div className="name" onClick={handleOpenEditTaskFrom}>{name}</div>
         {taskFormComponent}
      </div>
   )
}

export default Task;