export interface ChatMessage {
  id: number;
  owner: number;
  room: string;
  content: string;
  date: Date;
  isPrivate: boolean;
}

export type PartialChatMessage = Omit<ChatMessage, 'id' | 'owner' | 'room'>
