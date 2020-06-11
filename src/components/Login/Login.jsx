import React from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/auth';
import TextInput from '../../atoms/TextInput';

const Login = ({isRegistering}) => {
  const {login, register} = useAuth();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async() => {
    register(email, username, password);
  };

  const handleLogin = () => {
    login(email, password);
  };
  return (
    <div>
      <h1>{isRegistering ? 'Register' : 'Log In'}</h1>
      <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
      {isRegistering && <TextInput type="text" value={username} name="username" onChange={(e) => setUsername(e.target.value)} />}
      <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
      {isRegistering && <button type="button" onClick={handleRegister}>Register</button>}
      {!isRegistering && <button type="button" onClick={handleLogin}>Login</button>}
    </div>
  )
}

export default Login;