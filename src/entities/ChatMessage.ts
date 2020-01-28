import { ChatRoom } from './ChatRoom';

export interface ChatMessage {
  id: number;
  owner: number;
  room: string;
  content: string;
  date: Date;
  isPrivate: boolean;
}

export interface FullChatMessage {
  id: number;
  owner: number;
  room: ChatRoom;
  content: string;
  date: Date;
  isPrivate: boolean;
}

export type PartialChatMessage = Omit<ChatMessage, 'id' | 'owner' | 'room'>;
