import React, { createContext, useMemo, useState } from 'react';

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