import React, { useState } from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};


export const Default = () => {
  const [text, setText] = useState('Click me!');
  const handleClick = () => {
    setText('Good Job');
  }
  return(
    <Button onClick={handleClick}>{text}</Button>
  )
};

export const Block = () => {
  const [text, setText] = useState('Click me!');
  const handleClick = () => {
    setText('Good Job');
  }
  return(
    <Button block onClick={handleClick}>{text}</Button>
  )
};