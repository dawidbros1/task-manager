const Textarea = ({ id, type, labelText, value, onChange, errors = {}, rules = [] }) => {

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
         <textarea rows={5} type={type} id={id} onChange={onChange} value={value} />
         {!isEmpty ? <div className="errors">{errorsBlock}</div> : null}
      </div>
   );
}

export default Textarea;