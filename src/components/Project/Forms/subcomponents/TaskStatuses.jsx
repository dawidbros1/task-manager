import { useContext } from "react";
import { StoreContext } from "../../../../store/StoreProvider";

const TaskStatuses = ({ status, setStatus, errors = {}, rules = [] }) => {
   const { taskStatuses } = useContext(StoreContext)

   const optionsComponent = taskStatuses.map(option => {
      const selected = option.status === status ? " selected" : "";
      const classNames = `option${selected}`;

      const handleClick = () => setStatus(option.status)

      return (<div key={option.status} onClick={handleClick} className={classNames}>{option.name}</div>)
   })

   const errorsBlock = rules.map((rule) => (
      errors.hasOwnProperty(rule) &&
      <div key={`${rule}:`} className="error">
         {errors[rule]}
      </div>
   ))

   const isEmpty = Object.keys(errors).length === 0;

   return (
      <div className="p-2 d-flex flex-wrap mb-1 box" id="status_box">
         <label className="w-100 mb-1">Wybierz status zadania:</label>
         {optionsComponent}
         {!isEmpty ? <div className="errors">{errorsBlock}</div> : null}
      </div>
   )
}

export default TaskStatuses;