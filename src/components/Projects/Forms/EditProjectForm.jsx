import React, { useContext, useState } from 'react';

import { StoreContext } from '../../../store/StoreProvider';

import Input from "../../Form/Input";
import Modal from "../../Modal/Modal";
import Textarea from '../../Form/TextArea';
import DeleteProjectForm from './DeleteProjectForm';

const EditProjectForm = ({ id, entryName, entryDescription, handleOnClose }) => {
   const { user, projects, setProjects, request } = useContext(StoreContext);

   const [name, setName] = useState(entryName);
   const [description, setDescription] = useState(entryDescription);
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeName = ({ target: { value } }) => setName(value);
   const handleOnChangeDescription = ({ target: { value } }) => setDescription(value);

   const handleOnSubmit = async event => {
      event.preventDefault();
      request.post(`/project/update`, getCurrentProject(), onSuccess, onFailure);
   }

   const onFailure = ({ status, validateMessages, description }) => {
      if (status === 403) setValidateMessages(validateMessages)
      console.log(description)
   }

   const onSuccess = ({ data }) => {
      var copy;

      copy = projects.map(project => {
         if (project.id !== id) return project
         else return getCurrentProject();
      })


      setProjects(copy);
      handleOnClose();
   };

   const getCurrentProject = () => ({ id: id, user_id: user.id, name, description, sideKey: user.sideKey })

   // DELETE PROJECT 
   const [isDeleteProjectFormOpen, setIsDeleteProjectFormOpen] = useState(false);
   const handleOpenDeleteProjectFrom = () => setIsDeleteProjectFormOpen(true);
   const handleCloseDeleteProjectFrom = () => setIsDeleteProjectFormOpen(false);

   const deleteProjectFormComponent = isDeleteProjectFormOpen &&
      <DeleteProjectForm
         handleOnClose={handleCloseDeleteProjectFrom}
         id={id}
         name={entryName}
      />;

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
      >
         <form method="post" onSubmit={handleOnSubmit}>
            <div id='page-title'>Edycja projektu</div>

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
               <button type="submit" className='py-1 px-5'>Zapisz zmiany</button>
               <div className='mx-auto' />
               <button onClick={handleOpenDeleteProjectFrom} type="button" className='py-1 px-3 me-2 btn-danger' >Usu??</button>
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>

            {deleteProjectFormComponent}
         </form>
      </Modal >
   );
}

export default EditProjectForm;