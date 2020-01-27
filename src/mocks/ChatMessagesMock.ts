import { ChatMessage } from '../entities/ChatMessage';

export const CHAT_MESSAGES_MOCK: ChatMessage[] = [
  {
    id: 1,
    owner: 1,
    room: 'kanye',
    content: 'Hi !',
    date: new Date(),
    isPrivate: false
  },
  {
    id: 2,
    owner: 2,
    room: 'kanye',
    content: 'Hi, how you doin?',
    date: new Date(),
    isPrivate: true
  }
];
