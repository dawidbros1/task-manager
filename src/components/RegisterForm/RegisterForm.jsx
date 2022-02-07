import React, { useState } from 'react';

import Modal from '../Modal/Modal';
import Input from '../Form/Input';

import Request from '../../helpers/request';

const request = new Request();

const RegisterForm = ({ handleOnClose }) => {
   const [email, setEmail] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [validateMessages, setValidateMessages] = useState('');

   const handleOnChangeEmail = ({ target: { value } }) => setEmail(value);
   const handleOnChangeUsername = ({ target: { value } }) => setUsername(value);
   const handleOnChangePassword = ({ target: { value } }) => setPassword(value);

   const handleOnSubmit = async event => {
      event.preventDefault();

      const $data = {
         email: email,
         username: username,
         password: password
      }

      request.post('/auth/register', $data, onSuccess, onFailure);
   }

   const onFailure = (status, messages) => setValidateMessages(messages)

   const onSuccess = (data) => {
      const loginButton = document.querySelector('button.login');
      loginButton.click();
      handleOnClose();
   };

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
      >
         <form method="post" onSubmit={handleOnSubmit}>
            <div className='title'>Rejestracja</div>

            <div className='py-2'>
               <Input id="email" type="email" labelText="Adres email:" onChange={handleOnChangeEmail} value={email} errors={validateMessages.email} rules={['validate', 'sanitize', 'taken']} />
               <Input id="username" type="text" labelText="Nazwa użytkownika:" onChange={handleOnChangeUsername} value={username} errors={validateMessages.username} rules={['between']} />
               <Input id="password" type="password" labelText="Hasło:" onChange={handleOnChangePassword} value={password} errors={validateMessages.password} rules={['between']} />
            </div>

            <div className='d-flex flex-wrap pb-1'>
               <button type="submit" className='py-1 px-5'>Zarejestruj się</button>
               <div className='mx-auto' />
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>
         </form>
      </Modal >
   );
};

export default RegisterForm;