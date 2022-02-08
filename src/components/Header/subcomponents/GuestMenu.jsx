import { useState } from "react";

import LoginForm from "../../LoginForm";
import RegisterForm from "../../RegisterForm";

const GuestMenu = () => {
   const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
   const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

   const handleOpenRegisterForm = () => setIsRegisterFormOpen(true);
   const handleCloseRegisterForm = () => setIsRegisterFormOpen(false);

   const handleOpenLoginForm = () => setIsLoginFormOpen(true);
   const handleCloseLoginForm = () => setIsLoginFormOpen(false);

   const registerFormComponent = isRegisterFormOpen &&
      <RegisterForm
         handleOnClose={handleCloseRegisterForm}
         isModalOpen={isRegisterFormOpen}
      />;

   const loginFormComponent = isLoginFormOpen &&
      <LoginForm
         handleOnClose={handleCloseLoginForm}
         isModalOpen={isLoginFormOpen}
      />;

   return (
      <>
         <div className="mx-auto"></div>

         <button className="register" onClick={handleOpenRegisterForm}> Zarejestruj się</button>
         <button className="login" onClick={handleOpenLoginForm}> Zaloguj </button>

         {registerFormComponent}
         {loginFormComponent}
      </>
   );
};

export default GuestMenu;