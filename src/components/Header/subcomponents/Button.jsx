import { Link } from "react-router-dom";

const Button = ({ children, className, to }) => {

   return (
      <button className={className}>
         <Link to={to}>{children}</Link>
      </button>
   );
};

export default Button;