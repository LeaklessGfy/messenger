import ChatMessage from "../entities/ChatMessage";

const CHAT_MESSAGES_MOCK: ChatMessage[] = [
  {
    id: 1,
    owner: 1,
    receiver: 2,
    content: 'Salut',
    date: new Date()
  },
  {
    id: 2,
    owner: 2,
    receiver: 1,
    content: 'Hey ! Comment ça va ?',
    date: new Date()
  }
]

export default CHAT_MESSAGES_MOCK;
