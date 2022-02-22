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
         <div className="task" >
            <div className="d-flex">
               <div className="name">{name}</div>
               <img onClick={handleOpenEditTaskFrom} className="settings" src="./../images/settings.png" alt="settings icon" />
            </div>
         </div>

         {editTaskFormComponent}
      </>

   )
}

export default Task;