import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";

import Modal from "../../Modal/Modal";

const DeleteProjectForm = ({ id, name, handleOnClose, closeEditForm }) => {
   // const { projects, setProjects } = useContext(StoreContext);
   const { projects, setProjects } = useContext(StoreContext);

   const handleOnSubmit = (event) => {
      // event.preventDefault();
      // onSuccess();

   }

   const onSuccess = () => {
      // const data = projects.filter(project => project.id !== id);
      // setProjects({});

      // console.log(projects);

      // handleOnClose();
      // closeEditForm();
   }

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
      >
         <form method="post" onSubmit={handleOnSubmit}>
            <div id='page-title'>Usuwanie projektu</div>

            <p>Czy jesteś pewien, że chcesz usunąć <span className="fw-bold">{name}</span>?</p>

            <div className='d-flex flex-wrap pb-1'>
               <button type="submit" className='py-1 px-5 btn-danger'>Usuń</button>
               <div className='mx-auto' />
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>
         </form>
      </Modal >
   )
}

export default DeleteProjectForm;