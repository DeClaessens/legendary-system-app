import React, { useState } from 'react';
import EmailInput from './EmailInput';

export default {
  title: 'EmailInput',
  component: EmailInput,
};


export const Default = () => {
  const [email, setEmail] = useState('');
  return(
    <EmailInput value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
  )
};

export const Block = () => {
  const [email, setEmail] = useState('');
  return(
    <EmailInput block value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
  )
};