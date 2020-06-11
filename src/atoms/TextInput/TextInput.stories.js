import React, { useState } from 'react';
import TextInput from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
};


export const Default = () => {
  const [name, setName] = useState('');
  return(
    <TextInput value={name} name="name" onChange={(e) => setName(e.target.value)} />
  )
};

export const Block = () => {
  const [name, setName] = useState('');
  return(
    <TextInput block value={name} name="name" onChange={(e) => setName(e.target.value)} />
  )
};