import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ChatRoom } from '../../entities/ChatRoom';
import {
  FullChatMessage,
  PartialChatMessage
} from '../../entities/ChatMessage';

import { useAuth } from '../../services/auth';
import { useNotification } from '../../services/notification';
import {
  sendChatMessage,
  fetchChatRooms,
  fetchChatMessages
} from '../../services/api';
import { hydrateMessages } from '../../services/utils';

interface ChatHook {
  rooms: ChatRoom[];
  messages: FullChatMessage[];
  send: (partial: PartialChatMessage) => void;
}

export const useChat = (): ChatHook => {
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [messages, setMessages] = useState<FullChatMessage[]>([]);
  const user = useAuth();
  const { setNotification } = useNotification();
  const { uri } = useParams();

  const send = (partial: PartialChatMessage): void => {
    if (uri === undefined) return;

    sendChatMessage({
      ...partial,
      id: messages.length + 1,
      owner: user.id,
      room: uri
    })
      .then(messages => {
        setMessages(hydrateMessages(rooms, messages, uri));
      })
      .catch(err => {
        setNotification({
          severity: 'error',
          content: err.message
        });
      });
  };

  useEffect(() => {
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
  }, [setNotification]);

  useEffect(() => {
    if (uri === undefined || rooms.length === 0) return;
    setMessages([]);

    fetchChatMessages(uri)
      .then(messages => {
        setMessages(hydrateMessages(rooms, messages, uri));
      })
      .catch(err => {
        setNotification({
          severity: 'error',
          content: err.message
        });
      });
  }, [uri, rooms, setNotification]);

  return {
    rooms,
    messages,
    send
  };
};
