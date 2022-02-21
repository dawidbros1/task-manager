import { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";

import Input from "../../Form/Input";
import Textarea from "../../Form/TextArea";
import Modal from "../../Modal/Modal";

const CreateTaskForm = ({ projectId, handleOnClose }) => {
   const { tasks, setTasks } = useContext(StoreContext)

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeName = ({ target: { value } }) => setName(value);
   const handleOnChangeDescription = ({ target: { value } }) => setDescription(value);

   const handleOnSubmit = async event => {
      event.preventDefault();
      // request.post(`/Task/${action}`, getCurrentTask(), onSuccess, onFailure);
      onSuccess();
   }

   const onSuccess = () => {
      const copyTasks = tasks.map((task) => task);

      const newTask = {
         id: Math.floor(Math.random() * 10000),
         name, description, status: 0, // PROJECT_ID
      }

      const updatedTasks = copyTasks.concat(newTask);

      setTasks(updatedTasks);
      handleOnClose();
   }

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
      >
         <form method="post" onSubmit={handleOnSubmit}>
            <div id='page-title'>Tworzenie zadania</div>

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
               <button type="submit" className='py-1 px-5'>Dodaj zadanie</button>
               <div className='mx-auto' />
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>
         </form>
      </Modal >
   );
}

export default CreateTaskForm;