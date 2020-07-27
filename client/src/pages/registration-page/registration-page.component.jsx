import React from 'react';
import './registration-page.styles.scss';

import SignIn from '../../components/sign-in-form/sign-in-form.component';
import SignUp from '../../components/sign-up-form/sign-up-form.component';

const RegistrationPage = () => {
      return (
       <div className='registration-page'>
            <SignIn />
            <SignUp />
        </div>
      );
}

export default RegistrationPage;