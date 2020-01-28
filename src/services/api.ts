import { ChatRoom } from '../entities/ChatRoom';
import { ChatMessage } from '../entities/ChatMessage';

import { CHAT_ROOMS_MOCK } from '../mocks/ChatRoomsMock';
import { CHAT_MESSAGES_MOCK } from '../mocks/ChatMessagesMock';

function getMessagesFromLocal(uri: string): ChatMessage[] | null {
  const localJson = localStorage.getItem(`messages/${uri}`);
  if (localJson === null) return null;
  return JSON.parse(localJson).map((message: ChatMessage) => ({
    ...message,
    date: new Date(message.date)
  }));
}

export const fetchStubMessage = async (
  id: number,
  uri: string
): Promise<ChatMessage> => {
  const response = await fetch(
    uri === 'chuck'
      ? 'https://api.chucknorris.io/jokes/random'
      : 'https://api.kanye.rest'
  );
  const data = await response.json();

  return {
    id,
    owner: -1,
    room: uri,
    content: uri === 'chuck' ? data.value : data.quote,
    date: new Date(),
    isPrivate: false
  };
};

export const fetchChatRooms = async (): Promise<ChatRoom[]> => {
  return CHAT_ROOMS_MOCK;
};

export const fetchChatMessages = async (
  uri: string
): Promise<ChatMessage[]> => {
  const messages = getMessagesFromLocal(uri);
  if (messages === null) {
    const mocks = CHAT_MESSAGES_MOCK.filter(m => m.room === uri);
    localStorage.setItem(`messages/${uri}`, JSON.stringify(mocks));
    return mocks;
  }
  return messages;
};

export const sendChatMessage = async (
  chatMessage: ChatMessage
): Promise<ChatMessage[]> => {
  let messages = getMessagesFromLocal(chatMessage.room);

  if (messages === null) {
    messages = [chatMessage];
  } else {
    messages.push(chatMessage);
  }

  try {
    const stub = await fetchStubMessage(messages.length + 1, chatMessage.room);
    messages.push(stub);
  } catch (e) {
    // Only warn because stub isn't a main feature, just nice to have
    console.warn('Unable to reach stub service');
  }

  localStorage.setItem(
    `messages/${chatMessage.room}`,
    JSON.stringify(messages)
  );

  return messages;
};
