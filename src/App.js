import React, { useEffect } from 'react';
import useAuth from './hooks/auth';
import LoginForm from './molecules/LoginForm';

function App() {
  const { identity, login, logout } = useAuth();

  useEffect(() => {
    console.log({ identity });
  });

  return (
    <>
      {identity.username}
      {!identity.token && <LoginForm onLogin={(email, password) => login(email, password)} />}
      {identity.token && <button type="button" onClick={logout}>Logout</button>}
    </> 
  );
}

export default App;
