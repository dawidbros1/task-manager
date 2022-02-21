import { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";

import Input from "../../Form/Input";
import Textarea from "../../Form/TextArea";
import Modal from "../../Modal/Modal";

const TaskForm = ({ id = null, projectId, entryName = "", entryDescription = "", handleOnClose }) => {
   const { tasks, setTasks } = useContext(StoreContext)


   const [name, setName] = useState(entryName);
   const [description, setDescription] = useState(entryDescription);
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeName = ({ target: { value } }) => setName(value);
   const handleOnChangeDescription = ({ target: { value } }) => setDescription(value);

   const handleOnSubmit = async event => {
      event.preventDefault();
      // request.post(`/Task/${action}`, getCurrentTask(), onSuccess, onFailure);

      onSuccess();
   }

   const onSuccess = () => {

      const newTask = {
         id: Math.floor(Math.random() * 10000),
         name, description, status: 0
         // DATE
      }

      var copy;
      copy = tasks.map((task) => task);
      copy.push(newTask);

      setTasks(copy);

      handleOnClose();
   }

   // DELETE TASK 
   const [isDeleteTaskFormOpen, setIsDeleteTaskFormOpen] = useState(false);
   const handleOpenDeleteTaskFrom = () => setIsDeleteTaskFormOpen(true);
   const handleCloseDeleteTaskFrom = () => setIsDeleteTaskFormOpen(false);

   const deleteTaskFormComponent = isDeleteTaskFormOpen && 5;
   // <DeleteTaskForm
   //    handleOnClose={handleCloseDeleteTaskFrom}
   //    id={id}
   //    name={entryName}
   // />;

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
      >
         <form method="post" onSubmit={handleOnSubmit}>
            <div id='page-title'>{id ? "Edycja zadania" : "Tworzenie zadania"}</div>

            <div className='py-2'>
               <Input id="name" type="text" labelText="Nazwa zadania:"
                  onChange={handleOnChangeName}
                  value={name}
                  errors={validateMessages.name}
                  rules={['between']}
               />

               <Textarea id="description" type="text" labelText="Opis zadania:"
                  onChange={handleOnChangeDescription}
                  value={description}
                  errors={validateMessages.description}
                  rules={['between']}
               />
            </div>

            <div className='d-flex flex-wrap pb-1'>
               <button type="submit" className='py-1 px-5'>{id ? "Zapisz zmiany" : "Dodaj zadanie"}</button>
               <div className='mx-auto' />
               {id ? <button onClick={handleOpenDeleteTaskFrom} type="button" className='py-1 px-3 me-2 btn-danger' >Usuń</button> : null}
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>

            {deleteTaskFormComponent}
         </form>
      </Modal >
   );
}

export default TaskForm;