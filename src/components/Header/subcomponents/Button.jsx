import { Link } from "react-router-dom";
import RegisterForm from "../../RegisterForm";

const Button = ({ children, className, isOpen }) => {

   const Form = <RegisterForm isOpen={isOpen} />

   return (
      <>
         <button className={className}>
            {children}
         </button>

         {Form}
      </>

   );
};

export default Button;