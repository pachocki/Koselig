import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/profile');
      setUser(data);
      setReady(true);
    }
    if (!user) {
      fetchData();
    }
  }, [user]);

  const contextValue = { user, setUser, ready };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}