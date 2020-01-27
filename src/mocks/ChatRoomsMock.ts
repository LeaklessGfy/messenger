import { ChatRoom } from '../entities/ChatRoom';

export const CHAT_ROOMS_MOCK: ChatRoom[] = [
  {
    id: 1,
    uri: 'all',
    name: 'All',
    date: new Date(),
    users: []
  },
  {
    id: 2,
    uri: 'kanye',
    name: 'Kanye West',
    date: new Date(),
    users: []
  }
];
