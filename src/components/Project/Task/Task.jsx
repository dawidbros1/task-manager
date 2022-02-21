


import "./Task.scss";

const Task = ({ id, name, description }) => {
   return (
      <div className="task">
         <div className="name">{name}</div>
      </div>
   )
}

export default Task;