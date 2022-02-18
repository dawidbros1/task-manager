import Modal from "../../Modal/Modal";

const ProjectDetails = ({ handleOnClose, name, description, created }) => {
   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={true}>

         <main id="project_details">
            <div className="text-center fw-bold fs-5 border-bottom border-2 pb-1"> {name} </div>

            <div className="content position-relative pt-4">
               <div className="date"> {created} </div>
               <div>{description} </div>
            </div>
         </main>
      </Modal >
   )
}

export default ProjectDetails;