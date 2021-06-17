import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sing-in-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className="sing-in-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;
