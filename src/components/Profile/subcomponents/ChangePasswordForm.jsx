import { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import Input from "../../Form/Input";
import Button from "./Button";

const ChangePasswordForm = () => {
   const { user, request } = useContext(StoreContext);

   const [currentPassword, setCurrentPassword] = useState('');
   const [password, setPassword] = useState('');
   const [repeatPassword, setRepeatPassword] = useState('');
   const [validateMessages, setValidateMessages] = useState('');
   const [message, setMessage] = useState(null);

   const handleOnChangeCurrentPassword = ({ target: { value } }) => setCurrentPassword(value);
   const handleOnChangePassword = ({ target: { value } }) => setPassword(value);
   const handleOnChangeRepeatPassword = ({ target: { value } }) => setRepeatPassword(value);

   const handleOnSubmit = async event => {
      event.preventDefault();

      const { id, sideKey } = user;
      const data = { id, currentPassword, password, repeatPassword, sideKey }

      request.post('/user/updatePassword', data, onSuccess, onFailure);
   }

   const onFailure = ({ validateMessages }) => setValidateMessages(validateMessages)
   const onSuccess = () => {
      setValidateMessages({});
      setMessage("Hasło użytkownika zostało zmienione");
   }

   const onSuccessMessage = message && <div className='message'>{message}</div>

   return (
      <form onSubmit={handleOnSubmit}>
         <div className='box-title'>Zmiana hasła</div>

         {onSuccessMessage}

         <Input id="current-password" type="password" labelText="Aktualne hasło:"
            onChange={handleOnChangeCurrentPassword}
            value={currentPassword}
            errors={validateMessages.currentPassword}
            rules={['same']}
         />

         <Input id="password" type="password" labelText="Nowe hasło:"
            onChange={handleOnChangePassword}
            value={password}
            errors={validateMessages.password}
            rules={['between']}
         />

         <Input id="repeatPassword" type="password" labelText="Powtórz nowe hasło:"
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