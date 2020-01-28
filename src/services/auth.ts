import { createContext, useContext } from 'react';

import { User } from '../entities/User';

const INITIAL_STATE: User = {
  id: 1,
  uri: 'tom',
  name: 'Tom Ford'
};

export const AuthContext = createContext(INITIAL_STATE);
export const useAuth = (): User => useContext(AuthContext);
