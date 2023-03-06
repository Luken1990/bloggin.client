import { createContext, useState } from 'react';

//create use context, set initial value
export const userContext = createContext({ user: {}, setUser: () => {} });

//create content provider to share user state amongst components
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <userContext.Provider value={[user, setUser]}>
      {children}
    </userContext.Provider>
  );
};
