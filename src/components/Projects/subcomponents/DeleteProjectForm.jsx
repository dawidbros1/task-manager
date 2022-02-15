import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";

import Modal from "../../Modal/Modal";

const DeleteProjectForm = ({ id, name, handleOnClose }) => {
   const { projects, setProjects } = useContext(StoreContext);

   const handleOnDelete = () => {
      const data = projects.filter(project => project.id !== id);
      setProjects(data);
   }

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
      >
         <form method="post">
            <div id='page-title'>Usuwanie projektu</div>

            <p>Czy jesteś pewien, że chcesz usunąć <span className="fw-bold">{name}</span>?</p>

            <div className='d-flex flex-wrap pb-1'>
               <button type="button" onClick={handleOnDelete} className='py-1 px-5 btn-danger'>Usuń</button>
               <div className='mx-auto' />
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>
         </form>
      </Modal >
   )
}

export default DeleteProjectForm;