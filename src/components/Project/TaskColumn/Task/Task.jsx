import { useState } from "react";

import EditTaskForm from "../../Forms/EditTaskForm";

import "./Task.scss";

const Task = ({ id, status, name, description }) => {
   const [isEditTaskFormOpen, setIsEditTaskFormOpen] = useState(false);
   const handleOpenEditTaskFrom = () => setIsEditTaskFormOpen(true);
   const handleCloseEditTaskFrom = () => setIsEditTaskFormOpen(false);

   const editTaskFormComponent = isEditTaskFormOpen &&
      <EditTaskForm
         id={id}
         entryStatus={status}
         entryName={name}
         entryDescription={description}
         handleOnClose={handleCloseEditTaskFrom}
      />;

   return (
      <>
         <div className="task" onClick={handleOpenEditTaskFrom}>
            <div className="name">{name}</div>
         </div>

         {editTaskFormComponent}
      </>

   )
}

export default Task;