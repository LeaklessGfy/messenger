interface ChatMessage {
  id: number;
  owner: number;
  receiver: number;
  content: string;
  date: Date;
}

export default ChatMessage;
