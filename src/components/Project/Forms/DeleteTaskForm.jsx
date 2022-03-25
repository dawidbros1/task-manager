import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";

import Modal from "../../Modal/Modal";

const DeleteTaskForm = ({ id, name, handleOnClose }) => {
   const { user, tasks, setTasks, request } = useContext(StoreContext);

   const handleOnDelete = () => {
      const input = { id: id, user_id: user.id, sideKey: user.sideKey }
      request.post(`/task/delete`, input, onSuccess, onFailure);
   }

   const onSuccess = () => {
      const newTasks = tasks.filter(project => project.id !== id);
      setTasks(newTasks);
   }

   const onFailure = () => { }

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
         id="delete_form"
      >
         <form method="post">
            <div id='page-title'>Usuwanie zadania</div>

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

export default DeleteTaskForm;