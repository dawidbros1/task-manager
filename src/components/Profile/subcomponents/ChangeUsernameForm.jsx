import { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";

import Input from "../../Form/Input";
import Button from "./Button";

const ChangeUsernameForm = () => {
   const { user, setUser, request } = useContext(StoreContext);

   const [username, setUsername] = useState(user.username);
   const [validateMessages, setValidateMessages] = useState('');
   const [message, setMessage] = useState(null);

   const handleOnChangeUsername = ({ target: { value } }) => setUsername(value);

   const handleOnSubmit = async event => {
      event.preventDefault();

      const { id, sideKey } = user;
      const data = { id, username, sideKey }

      request.post('/user/updateUsername', data, onSuccess, onFailure);
   }

   const onFailure = ({ validateMessages }) => setValidateMessages(validateMessages)

   const onSuccess = () => {
      setValidateMessages({});
      setUser({ ...user, username })
      setMessage("Nazwa użytkownika została zmieniona")
   }

   const onSuccessMessage = message && <div className='message'>{message}</div>

   return (
      <form onSubmit={handleOnSubmit}>
         <div className='box-title'>Zmiana nazwy użytkownika</div>

         {onSuccessMessage}

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