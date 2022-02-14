import React, { useContext, useState } from 'react';

import { StoreContext } from '../../../store/StoreProvider';

import Input from "../../Form/Input";
import Modal from "../../Modal/Modal";
import Textarea from '../../Form/TextArea';
import DeleteProjectForm from './DeleteProjectForm';

const ProjectForm = ({ id = null, entryName = "", entryDescription = "", handleOnClose, action = "create" }) => {
   const { projects, setProjects } = useContext(StoreContext);

   const [name, setName] = useState(entryName);
   const [description, setDescription] = useState(entryDescription);
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeName = ({ target: { value } }) => setName(value);
   const handleOnChangeDescription = ({ target: { value } }) => setDescription(value);

   const handleOnSubmit = async event => {
      event.preventDefault();
      onSuccess();
   }

   const onFailure = ({ validateMessages }) => setValidateMessages(validateMessages)

   const onSuccess = () => {
      var data;

      const currentProject = {
         id: Math.floor(Math.random() * 100000),
         name, description
      }

      if (action === "create") {
         data = projects.map((project) => project);
         data.push(currentProject)
      }
      else if (action === "edit") {
         data = projects.map(project => {
            if (project.id !== id) return project
            else return currentProject;
         })
      }

      setProjects(data);
      handleOnClose();
   };

   const test = () => {
      console.log("XD");
   }

   // DELETE PROJECT 
   const [isDeleteProjectFormOpen, setIsDeleteProjectFormOpen] = useState(false);
   const handleOpenDeleteProjectFrom = () => setIsDeleteProjectFormOpen(true);
   const handleCloseDeleteProjectFrom = () => setIsDeleteProjectFormOpen(false);

   const deleteProjectFormComponent = isDeleteProjectFormOpen &&
      <DeleteProjectForm
         handleOnClose={handleCloseDeleteProjectFrom}
         id={id}
         name={entryName}
         closeEditForm={handleOnClose}
      />;

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
      >
         <form method="post" onSubmit={handleOnSubmit}>
            <div id='page-title'>{id ? "Edycja projektu" : "Tworzenie projektu"}</div>

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
               <button type="submit" className='py-1 px-5'>{id ? "Zapisz zmiany" : "Dodaj projekt"}</button>
               <div className='mx-auto' />
               {id ? <button onClick={handleOpenDeleteProjectFrom} type="button" className='py-1 px-3 me-2 btn-danger' >Usuń</button> : null}
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>

            {deleteProjectFormComponent}
         </form>
      </Modal >
   );
}

export default ProjectForm;