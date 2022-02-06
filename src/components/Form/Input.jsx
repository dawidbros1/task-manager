const Input = ({ id, type, labelText, onChange, value }) => {
   return (
      <div className="mb-1 row">
         <label htmlFor={id}>{labelText}</label>
         <input type={type} id={id} onChange={onChange} value={value} />
      </div>
   );
}

export default Input;