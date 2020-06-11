import React, { useEffect } from 'react';
import Login from './components/Login/Login';
import useAuth from './hooks/auth';

function App() {
  const { identity, logout } = useAuth();

  useEffect(() => {
    console.log({ identity });
  });

  return (
    <>
      {identity.username}
      {!identity.token && <Login />}
      {identity.token && <button type="button" onClick={logout}>Logout</button>}
    </> 
  );
}

export default App;
