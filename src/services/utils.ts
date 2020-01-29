import { ChatMessage, FullChatMessage } from '../entities/ChatMessage';
import { ChatRoom } from '../entities/ChatRoom';

export const hydrateMessages = (
  rooms: ChatRoom[],
  messages: ChatMessage[],
  uri: string
): FullChatMessage[] => {
  const room = rooms.find(room => room.uri === uri);

  if (room === undefined) {
    throw new Error('No chat room available with name ' + uri);
  }

  return messages.map(m => ({
    ...m,
    room
  }));
};
