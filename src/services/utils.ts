import { ChatMessage, FullChatMessage } from '../entities/ChatMessage';
import { ChatRoom } from '../entities/ChatRoom';
import { Notification } from '../entities/Notification';

import { sendChatMessage, fetchChatRooms, fetchChatMessages } from './api';

export const hydrateChatMessage = (
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

export const sendMessageHelper = (
  message: ChatMessage,
  rooms: ChatRoom[],
  setMessages: (messages: FullChatMessage[]) => void,
  setNotification: (notification: Notification | null) => void
): void => {
  sendChatMessage(message)
    .then(messages => {
      const fullMessages = messages.map(m => hydrateChatMessage(m, rooms));
      setMessages(fullMessages);
    })
    .catch(err => {
      setNotification({
        severity: 'error',
        content: err.message
      });
    });
};

export const fetchRoomsHelper = (
  setRooms: (rooms: ChatRoom[]) => void,
  setNotification: (notification: Notification | null) => void
): void => {
  fetchChatRooms()
    .then(rooms => {
      setRooms(rooms);
    })
    .catch(err => {
      setNotification({
        severity: 'error',
        content: err.message
      });
    });
};

export const fetchMessagesHelper = (
  uri: string,
  rooms: ChatRoom[],
  setMessages: (messages: FullChatMessage[]) => void,
  setNotification: (notification: Notification | null) => void
): void => {
  setMessages([]);

  fetchChatMessages(uri)
    .then(messages => {
      const fullMessages = messages.map(m => hydrateChatMessage(m, rooms));
      setMessages(fullMessages);
    })
    .catch(err => {
      setNotification({
        severity: 'error',
        content: err.message
      });
    });
};
