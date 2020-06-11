
import React, { useState } from 'react';
import PasswordInput from './PasswordInput';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
};


export const Default = () => {
  const [password, setPassword] = useState('');
  return(
    <PasswordInput value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
  )
};

export const Block = () => {
  const [password, setPassword] = useState('');
  return(
    <PasswordInput block value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
  )
};