import React, { useContext, useState } from 'react';

import Modal from '../Modal/Modal';
import Input from '../Form/Input';

import Request from '../../helpers/request';

import { StoreContext } from '../../store/StoreProvider';

const request = new Request();

const LoginForm = ({ handleOnClose }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeEmail = ({ target: { value } }) => setEmail(value);
   const handleOnChangePassword = ({ target: { value } }) => setPassword(value);

   const handleOnSubmit = async event => {
      event.preventDefault();
      const data = { email, password }
      request.post('/auth/login', data, onSuccess, onFailure);
   }

   const { setUser } = useContext(StoreContext);

   const onFailure = ({ validateMessages }) => setValidateMessages(validateMessages)

   const onSuccess = ({ data: { user } }) => {
      setUser(user);
      handleOnClose();
   };

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
      >
         <form method="post" onSubmit={handleOnSubmit}>
            <div className='title'>Logowanie</div>

            <Input id="email" type="email" labelText="Adres email:"
               onChange={handleOnChangeEmail}
               value={email}
               errors={validateMessages.email}
               rules={['notExist']}
            />

            <Input id="password" type="password" labelText="Hasło:"
               onChange={handleOnChangePassword}
               value={password}
               errors={validateMessages.password}
               rules={['notCorrect']}
            />

            <div className='d-flex flex-wrap pb-1'>
               <button type="submit" className='py-1 px-5'>Zaloguj się</button>
               <div className='mx-auto' />
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>
         </form>
      </Modal>
   );
};

export default LoginForm;
