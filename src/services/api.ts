import { ChatRoom } from '../entities/ChatRoom';
import { ChatMessage } from '../entities/ChatMessage';

import { CHAT_ROOMS_MOCK } from '../mocks/ChatRoomsMock';
import { CHAT_MESSAGES_MOCK } from '../mocks/ChatMessagesMock';

export const fetchChatRooms = async (): Promise<ChatRoom[]> => {
  // await fetch('https://httpstat.us/200');
  return CHAT_ROOMS_MOCK;
};

export const fetchChatMessages = async (
  uri: string
): Promise<ChatMessage[]> => {
  // await fetch('');
  const localJson = localStorage.getItem(`messages/${uri}`);
  if (localJson === null) {
    const mocks = CHAT_MESSAGES_MOCK.filter(m => m.room === uri);
    localStorage.setItem(`messages/${uri}`, JSON.stringify(mocks));
    return mocks;
  }
  return JSON.parse(localJson);
};

export const sendChatMessage = async (
  chatMessage: ChatMessage
): Promise<ChatMessage[]> => {
  const localJson = localStorage.getItem(`messages/${chatMessage.room}`);
  let data = [];
  if (localJson === null) {
    data = [chatMessage];
  } else {
    data = JSON.parse(localJson);
    data.push(chatMessage);
  }

  // fetchStubMessages

  localStorage.setItem(`messages/${chatMessage.room}`, JSON.stringify(data));
  return data;
};

export const fetchStubMessage = async (): Promise<ChatMessage> => {
  const response = await fetch('https://api.kanye.rest');
  const data = await response.json();

  return {
    id: -1,
    owner: 1,
    room: 'diane',
    content: data.quote,
    date: new Date(),
    isPrivate: false
  };
};
