import { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";

import Input from "../../Form/Input";
import Textarea from "../../Form/TextArea";
import Modal from "../../Modal/Modal";
import DeleteTaskForm from "./DeleteTaskForm";
import TaskStatuses from "./subcomponents/TaskStatuses";

const EditTaskForm = ({ id, entryName, entryDescription, entryStatus, handleOnClose }) => {
   const { user, tasks, setTasks, request } = useContext(StoreContext)

   const [name, setName] = useState(entryName);
   const [description, setDescription] = useState(entryDescription);
   const [status, setStatus] = useState(parseInt(entryStatus));
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeName = ({ target: { value } }) => setName(value);
   const handleOnChangeDescription = ({ target: { value } }) => setDescription(value);

   /* ON SUBMIT SECTION */
   const handleOnSubmit = async event => {
      event.preventDefault();
      const task = {
         id: id, name: name, description: description, status: status,
         user_id: user.id, sideKey: user.sideKey
      }
      request.post(`/Task/update`, task, onSuccess, onFailure);
   }

   const onSuccess = () => {
      const newTask = { id, name, description, status }

      const updatedTasks = tasks.map(task => {
         if (task.id !== id) return task
         else return newTask;
      })

      setTasks(updatedTasks);
      handleOnClose();
   }

   const onFailure = ({ status, validateMessages }) => {
      if (status === 403) setValidateMessages(validateMessages);
   }

   /* DELETE TASK SECTION */
   const [isDeleteTaskFormOpen, setIsDeleteTaskFormOpen] = useState(false);
   const handleOpenDeleteTaskForm = () => setIsDeleteTaskFormOpen(true);
   const handleCloseDeleteTaskForm = () => setIsDeleteTaskFormOpen(false);

   const deleteTaskFormComponent = isDeleteTaskFormOpen &&
      <DeleteTaskForm
         handleOnClose={handleCloseDeleteTaskForm}
         id={id}
         name={entryName}
      />;

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
      >
         <form method="post" onSubmit={handleOnSubmit}>
            <div id='page-title'>Edycja zadania</div>

            <div className='py-2'>
               <Input id="name" type="text" labelText="Nazwa zadania:"
                  onChange={handleOnChangeName}
                  value={name}
                  errors={validateMessages.name}
                  rules={['between']}
               />

               <TaskStatuses status={status} setStatus={setStatus}
                  errors={validateMessages.status}
                  rules={['enumeration']}
               />

               <Textarea id="description" type="text" labelText="Opis zadania:"
                  onChange={handleOnChangeDescription}
                  value={description}
                  errors={validateMessages.description}
                  rules={['between']}
               />
            </div>

            <div className='d-flex flex-wrap pb-1'>
               <button type="submit" className='py-1 px-5'>Zapisz zmiany</button>
               <div className='mx-auto' />
               <button onClick={handleOpenDeleteTaskForm} type="button" className='py-1 px-3 me-2 btn-danger' >Usu??</button>
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>

            {deleteTaskFormComponent}
         </form>
      </Modal >
   );
}

export default EditTaskForm;