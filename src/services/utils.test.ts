import { hydrateMessage } from './utils';

test('Hydrate message correctly', () => {
  const message = {};
  const rooms = [];

  const hydrated = hydrateMessage(message, rooms);
});
