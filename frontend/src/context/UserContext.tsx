import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { URL } from '../pages/url';

type Props = {
  children: JSX.Element;
};

interface UserFromServer {
  createdAt: string;
  email: string;
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
}

export type ContextType = {
  user: UserFromServer | null;
  setUser: (prev: UserFromServer | null) => void;
};

export const UserContext = createContext<ContextType | null>(null);

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserFromServer | null>(null);

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
