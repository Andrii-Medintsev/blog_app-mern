import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { URL } from '../pages/url';
import { User } from '../types/User';

type Props = {
  children: JSX.Element;
};

export type ContextType = {
  user: User | null;
  setUser: (prev: User | null) => void;
};

export const UserContext = createContext<ContextType | null>(null);

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser();
  }, [])

  const getUser = async () => {
    try {
      const res = await axios.get(
        URL + '/api/auth/refetch',
        { withCredentials: true }
      );

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
