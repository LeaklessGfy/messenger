import { User } from './User';

export interface ChatRoom {
  id: number;
  uri: string;
  name: string;
  date: Date;
  users: User[];
}
