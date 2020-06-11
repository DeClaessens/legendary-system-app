import React from 'react';

import LoginForm from './LoginForm';

export default {
  title: 'LoginForm',
  component: LoginForm,
};


export const Default = () => {
  const handleLogin = ({email, password}) => {
    console.log({email, password});
  }

  return(
    <LoginForm onLogin={(values) => handleLogin(values)} />
  )
};