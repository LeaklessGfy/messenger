import { hydrateMessages } from './utils';

import { ChatRoom } from '../entities/ChatRoom';
import { ChatMessage } from '../entities/ChatMessage';

test('Hydrate message correctly', () => {
  const rooms: ChatRoom[] = [
    {
      id: 1,
      uri: 'test',
      name: 'Test',
      date: new Date()
    },
    {
      id: 2,
      uri: 'test2',
      name: 'Test 2',
      date: new Date()
    }
  ];
  const messages: ChatMessage[] = [
    {
      id: 1,
      owner: 1,
      room: 'test',
      content: '',
      date: new Date(),
      isPrivate: false
    }
  ];
  const uri = 'test';

  const hydrated = hydrateMessages(rooms, messages, uri);

  expect(hydrated.length).toBe(1);
  expect(hydrated[0].room).toBe(rooms[0]);
});
