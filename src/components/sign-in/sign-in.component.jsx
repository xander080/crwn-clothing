import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.action';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(emailSignInStart(email, password));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          required
          label='Email'
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          required
          label='Password'
        />
        <div className='buttons'>
          <CustomButton type='submit'>SIGN IN</CustomButton>
          <CustomButton
            type='button'
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignin='isGoogleSignin'
          >
            GOOGLE SIGN IN
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
