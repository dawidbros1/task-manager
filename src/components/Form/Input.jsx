const Input = ({ id, type, labelText, value, onChange, errors = {}, rules = [], disabled = false }) => {

   const errorsBlock = rules.map((rule) => (
      errors.hasOwnProperty(rule) &&
      <div key={`${rule}:`} className="error">
         {errors[rule]}
      </div>
   ))

   const isEmpty = Object.keys(errors).length === 0;

   return (
      <div className="mb-1 d-flex flex-wrap box p-2">
         <label htmlFor={id}>{labelText}</label>
         <input type={type} id={id} onChange={onChange} value={value} disabled={disabled} />
         {!isEmpty ? <div className="errors">{errorsBlock}</div> : null}
      </div>
   );
}

export default Input;