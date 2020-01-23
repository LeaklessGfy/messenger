import ChatRoom from "../entities/ChatRoom";
import ChatMessage from "../entities/ChatMessage";

import CHAT_ROOMS_MOCK from "../mocks/ChatRoomsMock";
import CHAT_MESSAGES_MOCK from "../mocks/ChatMessagesMock";

export const fetchChatRooms = async (): Promise<ChatRoom[]> => {
  await fetch('https://httpstat.us/200');
  return CHAT_ROOMS_MOCK;
}

export const fetchChatMessages = async (uri: string): Promise<ChatMessage[]> => {
  await fetch('');
  return CHAT_MESSAGES_MOCK;
}
