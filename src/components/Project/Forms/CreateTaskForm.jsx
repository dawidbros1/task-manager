import { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";

import Input from "../../Form/Input";
import Textarea from "../../Form/TextArea";
import Modal from "../../Modal/Modal";

const CreateTaskForm = ({ projectId, handleOnClose }) => {
   const { user, tasks, setTasks, request } = useContext(StoreContext)

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeName = ({ target: { value } }) => setName(value);
   const handleOnChangeDescription = ({ target: { value } }) => setDescription(value);

   const handleOnSubmit = async event => {
      event.preventDefault();
      const task = {
         name, description,
         project_id: projectId,
         user_id: user.id, sideKey: user.sideKey
      }
      request.post(`/Task/create`, task, onSuccess, onFailure);
   }

   const onSuccess = ({ data }) => {
      const copyTasks = tasks.map((task) => task);
      const updatedTasks = copyTasks.concat(data.task);

      setTasks(updatedTasks);
      handleOnClose();
   }

   const onFailure = ({ status, validateMessages }) => {
      if (status === 403) setValidateMessages(validateMessages);
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