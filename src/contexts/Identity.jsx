import React, { useEffect, createContext, useMemo, useState } from 'react';

const IdentityContext = createContext({
  current: undefined,
  setCurrent: undefined,
})

export function AuthProvider(props) {
  const [identity, setIdentity] = useState({
    username: '',
    email: '',
    token: '',
  });

  useEffect(() => {
    const profile = localStorage.getItem('profile');

    
    if (profile) {
      const p = JSON.parse(profile);
      setIdentity({
        username: p.username,
        email: p.email,
        token: p.token,
      });
    }

  }, []);

  const identityContextValue = useMemo(
    () => ({
      current: identity,
      setCurrent: setIdentity,
    }),
    [identity]
  );

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IdentityContext.Provider value={identityContextValue} {...props} />;
}

export default IdentityContext;