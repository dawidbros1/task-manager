import React, { useState } from 'react';

import Modal from '../Modal/Modal';
import Input from '../Form/Input';

const LoginForm = ({ handleOnClose }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleOnChangeEmail = ({ target: { value } }) => setEmail(value);
   const handleOnChangePassword = ({ target: { value } }) => setPassword(value);

   const handleOnSubmit = async event => {
      event.preventDefault();
      // const { data, status } = await request.post(
      // 	'/users',
      // 	{ email, password }
      // );

      // if (status === 200) {
      // 	setUser(data.user);
      // 	resetStateOfInputs();
      // 	handleOnClose();
      // } else {
      // 	setValidateMessage(data.message);
      // }
   }

   return (
      <Modal
         handleOnClose={handleOnClose}
         shouldBeCloseOnOutsideClick={false}
         SubmitButtonName={"Zaloguj"}
      >
         <form method="post" onSubmit={handleOnSubmit}>
            <Input id="email" type="email" labelText="Adres email:" onChange={handleOnChangeEmail} value={email} />
            <Input id="password" type="password" labelText="Hasło:" onChange={handleOnChangePassword} value={password} />

            {/* BUTTONS SECTION */}
            <div className='py-2'>
               <div className='border-top' />
            </div>

            <div className='d-flex flex-wrap'>
               <button type="submit" className='py-1 px-5'>Zaloguj</button>
               <div className='mx-auto' />
               <button onClick={handleOnClose} type="button" className='py-1 px-3' >Anuluj</button>
            </div>
         </form>
      </Modal>
   );
};

export default LoginForm;
