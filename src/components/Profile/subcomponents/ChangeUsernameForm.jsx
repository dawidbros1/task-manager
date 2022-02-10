import { useState } from "react";

import Input from "../../Form/Input";
import Button from "./Button";

const ChangeUsernameForm = ({ user }) => {
   const [username, setUsername] = useState(user.username);
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeUsername = ({ target: { value } }) => setUsername(value);

   const handleOnSubmit = async event => {
      // event.preventDefault();
      // const data = { email, username, password, repeatPassword }
      // request.post('/auth/register', data, onSuccess, onFailure);
   }

   const onFailure = ({ validateMessages }) => setValidateMessages(validateMessages)

   const onSuccess = () => {
      // const loginButton = document.querySelector('button.login');
      // setData({ email, message: "Konto zostało utworzone, możesz się teraz zalogować" });
      // loginButton.click();
      // handleOnClose();
   };

   return (
      <form>
         <div className='box-title'>Zmiana nazwy użytkownika</div>

         <Input id="username" type="text" labelText="Nazwa użytkownika:"
            onChange={handleOnChangeUsername}
            value={username}
            errors={validateMessages.username}
            rules={['between']}
         />

         <Button name="Zmień nazwę użytkownika" />
      </form>
   )
}

export default ChangeUsernameForm;