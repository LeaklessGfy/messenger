import { createContext, useContext } from 'react';

import { NotificationCtx } from '../entities/Notification';

const INITIAL_STATE: NotificationCtx = {
  notification: null,
  setNotification: () => ({})
};

export const NotificationContext = createContext<NotificationCtx>(
  INITIAL_STATE
);
export const useNotification = (): NotificationCtx =>
  useContext(NotificationContext);
