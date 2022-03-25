import { useState } from "react";

import EditTaskForm from "../../Forms/EditTaskForm";
import TaskDetails from "./TaskDetails";

import "./Task.scss";

const Task = ({ id, status, name, description, created }) => {
   /* EDIT TASK FORM SECTION */
   const [isEditTaskFormOpen, setIsEditTaskFormOpen] = useState(false);
   const handleOpenEditTaskForm = () => setIsEditTaskFormOpen(true);
   const handleCloseEditTaskForm = () => setIsEditTaskFormOpen(false);

   const editTaskFormComponent = isEditTaskFormOpen &&
      <EditTaskForm
         id={id}
         entryStatus={status}
         entryName={name}
         entryDescription={description}
         handleOnClose={handleCloseEditTaskForm}
      />;

   /* DEATILS TASK SECTION */
   const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false);
   const handleOpenTaskDetails = () => setIsTaskDetailsOpen(true);
   const handleCloseTaskDetails = () => setIsTaskDetailsOpen(false);

   const TaskDetailsComponent = isTaskDetailsOpen &&
      <TaskDetails
         status={status}
         name={name}
         description={description}
         created={created}
         handleOnClose={handleCloseTaskDetails}
      />;

   return (
      <>
         <div className="task" >
            <div className="d-flex">
               <div className="name" onClick={handleOpenTaskDetails}>{name}</div>
               <img onClick={handleOpenEditTaskForm} className="settings" src="./../images/settings.png" alt="settings" />
            </div>
         </div>

         {TaskDetailsComponent}
         {editTaskFormComponent}
      </>

   )
}

export default Task;