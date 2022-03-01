import React, { useContext, useState } from 'react';

import { StoreContext } from '../../../store/StoreProvider';

import Input from "../../Form/Input";
import Modal from "../../Modal/Modal";
import Textarea from '../../Form/TextArea';

const CreateProjectForm = ({ entryName = "", entryDescription = "", handleOnClose }) => {
   const { user, projects, setProjects, request } = useContext(StoreContext);

   const [name, setName] = useState(entryName);
   const [description, setDescription] = useState(entryDescription);
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeName = ({ target: { value } }) => setName(value);
   const handleOnChangeDescription = ({ target: { value } }) => setDescription(value);

   const handleOnSubmit = async event => {
      event.preventDefault();
      const data = { user_id: user.id, name, description, sideKey: user.sideKey }
      request.post(`/project/create`, data, onSuccess, onFailure);
   }

   const onSuccess = ({ data }) => {
      var copy;

      copy = projects.map((project) => project);
      copy.push(data.project);

      setProjects(copy);
      handleOnClose();
   };

   const onFailure = ({ status, validateMessages, description }) => {
      if (status === 403) setValidateMessages(validateMessages)
      console.log(description)
   }

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
      >
         <form method="post" onSubmit={handleOnSubmit}>
            <div id='page-title'>Tworzenie projektu</div>

            <div className='py-2'>
               <Input id="name" type="text" labelText="Nazwa projektu:"
                  onChange={handleOnChangeName}
                  value={name}
                  errors={validateMessages.name}
                  rules={['between']}
               />

               <Textarea id="description" type="text" labelText="Opis projektu:"
                  onChange={handleOnChangeDescription}
                  value={description}
                  errors={validateMessages.description}
                  rules={['between']}
               />
            </div>

            <div className='d-flex flex-wrap pb-1'>
               <button type="submit" className='py-1 px-5'>Dodaj projekt</button>
               <div className='mx-auto' />
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>
         </form>
      </Modal >
   );
}

export default CreateProjectForm;