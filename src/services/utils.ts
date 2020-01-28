import { ChatMessage, FullChatMessage } from '../entities/ChatMessage';
import { ChatRoom } from '../entities/ChatRoom';

export const hydrateMessage = (
  message: ChatMessage,
  rooms: ChatRoom[]
): FullChatMessage => {
  const room = rooms.find(room => room.uri === message.room);

  if (room === undefined) {
    throw new Error('No chat room available with name ' + message.room);
  }

  return {
    ...message,
    room
  };
};
