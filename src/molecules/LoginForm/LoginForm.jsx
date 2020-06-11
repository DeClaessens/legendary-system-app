import React, { useState } from 'react';
import styled from '@emotion/styled';
import EmailInput from '../../atoms/EmailInput';
import PasswordInput from '../../atoms/PasswordInput';
import Button from '../../atoms/Button';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100px;

  justify-content: center;
  align-items: center;

  padding: 20px;

  border-radius: 10px;

  box-shadow: 0 0 0 2px #eee;

  > input {
    margin-bottom: 10px;
  }
`;

const LoginForm = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email === '' || password === '') return false;

    return onLogin(email, password);
  }

  return (
    <StyledContainer>
      <EmailInput block value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
      <PasswordInput block value={password} onChange={(e) => setPassword(e.target.value)} name="password" />

      <Button block onClick={handleSubmit}>Log In</Button>
    </StyledContainer>
  )
};

export default LoginForm;