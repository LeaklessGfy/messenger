import { createContext } from 'react';

const INITIAL_STATE = {
  userId: 1
};

export const AuthContext = createContext(INITIAL_STATE);
