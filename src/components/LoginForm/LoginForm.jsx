import React, { useContext, useEffect, useState } from 'react';

import Modal from '../Modal/Modal';
import Input from '../Form/Input';

import Request from '../../helpers/request';

import { StoreContext } from '../../store/StoreProvider';

const request = new Request();

const LoginForm = ({ handleOnClose }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const [message, setMessage] = useState(null);
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeEmail = ({ target: { value } }) => setEmail(value);
   const handleOnChangePassword = ({ target: { value } }) => setPassword(value);

   const handleOnSubmit = async event => {
      event.preventDefault();
      const data = { email, password }
      request.post('/auth/login', data, onSuccess, onFailure);
   }

   const { setStateByDataProperty, setUser } = useContext(StoreContext);

   useEffect(() => {
      setStateByDataProperty('email', setEmail);
      setStateByDataProperty('message', setMessage);
   }, [])

   const afterRegisterMessage = message !== null
      ? <div className='feedback'>{message}</div>
      : null;

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
            <div id='page-title'>Logowanie</div>

            {afterRegisterMessage}

            <div className='py-2'>
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
            </div>

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
