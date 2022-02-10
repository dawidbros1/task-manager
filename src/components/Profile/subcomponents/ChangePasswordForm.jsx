import { useState } from "react";
import Input from "../../Form/Input";
import Button from "./Button";

const ChangePasswordForm = ({ user }) => {
   const [password, setPassword] = useState('');
   const [repeatPassword, setRepeatPassword] = useState('');
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangePassword = ({ target: { value } }) => setPassword(value);
   const handleOnChangeRepeatPassword = ({ target: { value } }) => setRepeatPassword(value);

   const handleOnSubmit = async event => {
      event.preventDefault();
   }

   const onFailure = ({ validateMessages }) => setValidateMessages(validateMessages)

   const onSuccess = () => {

   };

   return (
      <form>
         <div className='box-title'>Zmiana hasła</div>

         <Input id="password" type="password" labelText="Aktualne hasło:"
            onChange={handleOnChangePassword}
            value={password}
            errors={validateMessages.currentPassword}
            rules={['same']}
         />

         <Input id="password" type="password" labelText="Hasło:"
            onChange={handleOnChangePassword}
            value={password}
            errors={validateMessages.password}
            rules={['between']}
         />

         <Input id="repeatPassword" type="password" labelText="Powtórz hasło:"
            onChange={handleOnChangeRepeatPassword}
            value={repeatPassword}
            errors={validateMessages.repeatPassword}
            rules={['same']}
         />

         <Button name="Zmień hasło" />
      </form>
   )
}

export default ChangePasswordForm;