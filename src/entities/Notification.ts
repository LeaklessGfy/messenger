import { Color } from '@material-ui/lab/Alert';

export interface Notification {
  severity: Color;
  content: string;
}

export interface NotificationCtx {
  notification: Notification | null;
  setNotification: (notification: Notification | null) => void;
}
